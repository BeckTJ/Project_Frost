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
    async fetchVendorLots(materialNumber){
        try{
            const response = await fetch(ravenapi + '');
            const responseJson = await response.json();
            return responseJson;
        }catch(err){
            console.error(err);
        }
    },
}