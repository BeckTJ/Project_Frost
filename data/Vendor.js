class Vendor{
    constructor(materialNumber, vendorName, vendorLotNumber){
        this.materialNumber = materialNumber;
        this.vendorName = vendorName;
        this.vendorLotNumber = vendorLotNumber;
    }
    
    getVendorLot(){
        const vendorLot = VendorAjax.fetchVendorLots(materialNumber);
    }
}