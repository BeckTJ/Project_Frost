import { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import Vendor from '../data/Vendor';

export default RawMaterialScreen = () =>{
    
    const vendor = Vendor(12345,"Store", "tomato");
    const hpMaterial = Material();
    const [material, setMaterial] = useState({
        materialNumber : 0,
        materialName : 'ATRP',
        vendorName : vendor.vendorName,
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
                    <Text style={styles.inputTitle}>Material Name</Text>
                    <TextInput
                        style={styles.input}
                        value={material.materialName}
                        onChange={setMaterial.materialName}
                        placeholder="Material Name"
                        readOnly={true}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputTitle}>Vendor Name</Text>
                    <TextInput
                        style={styles.input}
                        value={material.vendorName}
                        onChange={setMaterial.vendorName}
                        placeholder="Vendor Name"
                        readOnly={true}
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