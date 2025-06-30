const ravenapi = "http://localhost:8082/";


export default{

    async postProduct(product) {
        await fetch(ravenapi + '/Product/UpdateProductLot', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            productLotNumber: product.lotNumber,
            materialNumber: product.materialNumber,
            productBatchNumber: product.batchNumber,
            processOrder: product.processOrder,
            receiverId: product.receiver,
            sampleSubmitNumber: product.sampleNumber,
            startDate: product.startDate,
          }),
        }).then(response => {
          response.json();
        });
      },
      
      async fetchVendorLot(lotNumber) {
        try {
          const response = await fetch(
            ravenapi + 'VendorLot/'+lotNumber,
          );
          const responseJson = await response.json();
          return responseJson;
        } catch (error) {
          console.error(error);
        }
      },

}