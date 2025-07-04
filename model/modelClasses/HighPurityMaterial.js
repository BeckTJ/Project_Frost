import { Model } from "@nozbe/watermelondb";
import {children, field, text} from '@nozbe/watermelondb/decorators';

export default class HighPurityMaterial extends Model{
    static table = 'high_purity_materials';
    static associations = {
        raw_material_vendors:
            {type: 'has_many', foreignKey: 'material_number_ids'}, 
    }
    @text('material_number_id') materialNumber
    @text('material_name') materialName
    @text('binomial') binomial
    @text('permit_number')permitNumber
    @text('material_code') materialCode
    @field('is_batch_managed') batchManaged
    @text('sequence_number') sequenceId
    @text('total_records') totalRecords
    @text('unit_of_issue') unitOfIssue

    @children('material_Number_ids') materialNumberIds
}