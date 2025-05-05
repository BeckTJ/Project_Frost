class RawMaterial{
    constructor(id, type, vendor, vendorLotNumber, batchNumber, inspectionLotNumber, sampleId, containerTagNumber, weight){
        this.id = id;
        this.type = type;
        this.vendor = vendor;
        this.vendorLotNumber = vendorLotNumber;
        this.batchNumber = batchNumber;
        this.inspectionLotNumber = inspectionLotNumber;
        this.sampleId = sampleId;
        this.containerTagNumber = containerTagNumber;
        this.weight = weight;
    }
}