import { Model } from '@nozbe/watermelondb';
import { children } from '@nozbe/watermelondb/decorators';

export default class RawMaterialVendors extends Model{
    static table = 'raw_material_vendors'
    static associations = {
        high_purity_materials: 
            {type: 'belongs_to', key: 'parent_material_number_id'},
        raw_material_logs:
            {type: 'has_many', foreignKey: 'material_number_id'},
    }

    @text('material_number_id') materialNumber
    @text('vendor_name') vendorName
    @text('material_code') materialCode
    @field('is_batch_managed') batchManaged
    @field('is_container_number_required') containerNumberRequired
    @text('sequence_number') sequenceId
    @text('total_records') totalRecords
    @text('unit_of_issue') unitOfIssue
    @text('parent_material_number_id') parentMaterialNumber

    @relation('high_purity_materials', 'material_number_id') highPurityMaterial
    @children('raw_material_logs') rawMaterialLogs
}