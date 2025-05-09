import { Text, TextInput, View, StyleSheet } from "react-native";

export default UserInputFields =(props)=>{
    const material = props.materials.material;
    const setMaterial = props.materials.setMaterial;

    return(
        <View style={styles.formView}>
                <View style={styles.inputView}>
                    <Text style={styles.inputTitle}>Material Number</Text>
                    <TextInput
                        style={styles.input}
                        value={material.materialNumber}
                        onChange={setMaterial.materialNumber}
                        placeholder="Material Number"
                        keyboardType="number-pad"
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputTitle}>Material Type</Text>
                    <TextInput
                        style={styles.input}
                        value={material.materialType}
                        onChange={setMaterial.materialType}
                        placeholder="Batch Number"
                        keyboardType="number-pad"
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputTitle}>Vendor Lot Number</Text>
                    <TextInput
                        style={styles.input}
                        value={material.vendorLotNumber}
                        onChange={setMaterial.vendorLotNumber}
                        placeholder="Vendor Lot Number"
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputTitle}>Batch Number</Text>
                    <TextInput
                        style={styles.input}
                        value={material.batchNumber}
                        onChange={setMaterial.batchNumber}
                        placeholder="Batch Number"
                        keyboardType="number-pad"
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputTitle}>Inspection Lot Number</Text>
                    <TextInput
                        style={styles.input}
                        value={material.inspectionLotNumber}
                        onChange={setMaterial.inspectionLotNumber}
                        placeholder="Inspection Lot Number"
                        keyboardType="number-pad"
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputTitle}>Container Number</Text>
                    <TextInput
                        style={styles.input}
                        value={material.containerId}
                        onChange={setMaterial.containerId}
                        placeholder="CTN"
                    />
                </View>
            </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,  
        margin: 25,
    },
    textHeader:{
        textAlign: 'center',
        fontSize: 32,
    },
    formView:{
        marginTop: 100,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    inputView:{
        margin: 15,
    },
    inputTitle:{
        fontSize: 18,
    },
    input:{
        marginVertical:5,
        width: 200,
        borderRadius: 10,
        borderWidth: 1,
        fontSize: 24 ,
    },
});