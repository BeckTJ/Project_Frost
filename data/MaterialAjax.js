const ravenapi = "http://localhost:8082/Material";

export default{
    async fetchMaterial(){
      try{
      const response = await fetch(ravenapi);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },
    
    async fetchRunLog(materialNumber) {
    try {
      const response = await fetch(
        ravenapi + '/?materialNumber=' + materialNumber,
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },
  
} 