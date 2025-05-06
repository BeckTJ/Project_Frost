import { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import Vendor from '../data/Vendor';

export default RawMaterialScreen = () =>{
    
    // const vendor = Vendor(12345,"Store", "Cow");
    // const hpMaterial = Material(12344, 'Milk', 'MLK', '123-wer-456', 'AA', true, 100, 100, 'kg');
    const [material, setMaterial] = useState({
        materialNumber : 0,
        materialName : '',
        vendorName :'',
        vendorLotNumber: '',
        batchNumber: 0,
        inspectionLotNumber: 0,
        materialType: '',
        containerId: '',
        containerWeight: 0,
    });

    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>Raw Material ({material.materialName})</Text>

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
})