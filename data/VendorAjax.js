const ravenapi = 'http://localhost:8082/Vendor';

export default{
    async fetchVendors(materialNumber) {
        try{
            const response = await fetch(
                ravenapi + '/?materialNumber=' + materialNumber,);
            const responseJson = await response.json();
            return responseJson;
        }catch(err){
            console.error(error);
        }
    },
}