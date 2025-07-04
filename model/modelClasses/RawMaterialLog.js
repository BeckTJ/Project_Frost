import { Model } from "@nozbe/watermelondb";
import { relation, text, field, date } from "@nozbe/watermelondb/decorators";

export default class RawMaterialLogs extends Model{
    static table = 'raw_material_logs'
    static associations = {
        raw_material_vendors: 
            {type: 'belongs_to', key: 'material_number_id'}
    }

    @text('product_lot_number_id') productLotNumber
    @text('vendor_lot_number') vendorLotNumber
    @text('batch_number') batchNumber
    @text('inspection_lot_number') inspectionLotNumber
    @text('container_number') containerNumber
    @text('net_weight') netWeight
    @date('issue_date_at') issueDate
    @text('sample_id') sampleId
    @text('sample_type') sampleType
    @date('submit_date_at') submitDate
    @field('is_approved') approved
    @field('is_rejected') rejected
    @date('status_date_at') statusDate
    @text('material_number_id') materialNumber

    @relation('raw_material_vendors', 'material_number_id') vendor
}