const ravenapi = 'http://localhost:8082/VendorLot';

export default{

    async verifyVendorLot(lotNumber,batchNumber){
        try{
            const response = await fetch(
                ravenapi+`/VerifyVendorLot?lotNumber=${lotNumber}&batchNumber=${batchNumber}`,
            );
            const responseJson = await response.json();
            return responseJson;
        }catch(err){
            console.log(err);
        }
    },
    async verifyVendorLot(lotNumber){
        try{
            const response = await fetch(
                ravenapi+`/VerifyVendorLotByLotNumber?lotNumber=${lotNumber}`,
            );
            const responseJson = await response.json();
            return responseJson;
        }catch(err){
            console.log(err);
        }
    }
};