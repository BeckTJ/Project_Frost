import { appSchema,tableSchema } from "@nozbe/watermelondb";


export const dbSchema = appSchema({
    version: 0.1,
    tables:[
        tableSchema({
            name:'high_purity_materials',
            columns:[
                {name: 'material_number_id', type: 'number'},
                {name: 'material_name', type:'string'},
                {name: 'binomial', type: 'string'},
                {name: 'permit_number', type: 'string'},
                {name: 'material_code', type: 'string'},
                {name: 'is_batch_managed', type: 'boolean'},
                {name: 'sequence_number', type: 'number'},
                {name: 'total_records', type: 'number'},
                {name: 'unit_of_issue', type: 'string'},
            ]
        }),
        tableSchema({
            name:'raw_material_vendors',
            columns:[
                {name: 'material_number_id', type: 'number'},
                {name: 'vendor_name', type: 'string'},
                {name: 'material_code', type: 'string'},
                {name: 'is_batch_managed', type: 'boolean'},
                {name: 'is_container_number_required', type: 'boolean'},
                {name: 'sequence_number', type: 'number'},
                {name: 'total_records', type: 'number'},
                {name: 'unit_of_issue', type: 'string'},
                {name: 'parent_material_number_id', type: 'number'},
            ]
        }),
        tableSchema({
            name: 'raw_material_logs',
            columns:[
                {name:'product_lot_number_id',type:'string'},
                {name:'vendor_lot_number', type: 'string'},
                {name:'batch_number', type: 'number'},
                {name:'inspection_lot_number', type: 'number'},
                {name:'container_number',type:'string'},
                {name:'net_weight',type:'number'},
                {name:'issue_date_at',type:'number'},
                {name:'sample_id',type:'number'},
                {name:'sample_type', type: 'string'},
                {name:'submit_date_at', type: 'number'},
                {name:'is_approved', type: 'boolean'},
                {name:'is_rejected', type: 'boolean'},
                {name:'status_date_at', type: 'number'},
                {name:'material_number_id', type: 'number'},
            ]
        }),
        tableSchema({
            name: 'date_codes',
            columns:[
                {name:'date_id',type:'number'},
                {name:'date_code',type:'string'},
            ]
        }),
        tableSchema({
            name: 'sample_required',
            columns:[
                {name:'required_id',type:'number'},
                {name:'material_type',type:'string'},
                {name:'product_type',type:'string'},
                {name:'is_assay',type:'boolean'},
                {name:'is_water',type:'boolean'},
                {name:'is_metals',type:'boolean'},
                {name:'is_chloride',type:'boolean'},
                {name:'is_boron',type:'boolean'},
                {name:'is_phosphorus',type:'boolean'},
                {name:'material_number_id',type:'number'},
            ]
        }),
        tableSchema({
            name: 'hazard_labels',
            columns:[
                {name: 'hazard_id',type: 'number'},
                {name: 'is_carcinogen',type: 'boolean'},
                {name: 'is_flammable',type: 'boolean'},
                {name: 'is_corrosive',type: 'boolean'},
                {name: 'is_pyrophoric',type: 'boolean'},
                {name: 'is_combustable',type: 'boolean'},
                {name: 'is_sensitiser',type: 'boolean'},
                {name: 'is_hygroscopic',type: 'boolean'},
                {name: 'is_irritant',type: 'boolean'},
                {name: 'is_highly_toxic',type: 'boolean'},
                {name: 'is_volitile',type: 'boolean'},
                {name: 'is_explosive',type: 'boolean'},
                {name: 'is_peroxidizable',type: 'boolean'},
                {name: 'is_shelf_life',type: 'boolean'},
                {name: 'is_dusty',type: 'boolean'},
                {name: 'material_number_id',type: 'number'},
            ]
        }),
    ]
});