
data class Material(
    val MaterialNumber: Int,
    val MaterialName: String,

)
data class Vendor(
    val Material: Material,
    val VendorName: String,
)
data class RawMaterial(
    val RawMaterialId: String,
    val MaterialNumber: Material,
    val VendorName: String,
    val VendorLotNumber: String,
    val BatchNumber: Int,
    val InspectionLotNumber: Long,
    val SampleId: String,
    val ContainerTagNumber: String,
    val Weight: Int,
    val Qty: Int,
)