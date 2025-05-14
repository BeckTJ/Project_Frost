import { useState } from "react";
import { Text, Button, TextInput, View, StyleSheet } from "react-native";
import Vendor from '../data/Vendor';
import UserInputFields from "../components/UserInputFields";


export default RawMaterialScreen = () =>{
    
    // const vendor = Vendor(12345,"Store", "Cow");
    // const hpMaterial = Material(12344, 'Milk', 'MLK', '123-wer-456', 'AA', true, 100, 100, 'kg');
    const [material,setMaterial] = useState({
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
            <View>
                <View style={styles.formView}>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Material Number</Text>
                        <TextInput
                            style={styles.input}
                            value={material.materialNumber}
                            onChangeText={setMaterial.materialNumber}
                            placeholder="12345"
                            keyboardType="number-pad"
                            multiline={false}
                        />
                    </View>
                    {/* this should be a drop down or auto populate when material number enter */}
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Material Type</Text>
                        <TextInput
                            style={styles.input}
                            value={material.materialType}
                            onChangeText={setMaterial.materialType}
                            placeholder="R/Y/N"
                            multiline={false}
                        />
                    </View>
                </View>
                {/*Dropdown or Auto Populate*/}
                <View style={styles.formView}>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Vendor Name</Text>
                        <TextInput
                            style={styles.input}
                            value={material.vendorName}
                            onChangeText={setMaterial.materialType}
                            placeholder="Name"
                            multiline={false}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Vendor Lot Number</Text>
                        <TextInput
                            style={styles.longInput}
                            value={material.vendorLotNumber}
                            onChangeText={setMaterial.vendorLotNumber}
                            placeholder="Vendor Lot Number"
                            maxLength={25}
                            multiline={false}
                        />
                    </View>
                </View>
                <View style={styles.formView}>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Batch Number</Text>
                        <TextInput
                            style={styles.input}
                            value={material.batchNumber}
                            onChangeText={setMaterial.batchNumber}
                            placeholder="12345"
                            keyboardType="number-pad"
                            maxLength={7}
                            multiline={false}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Inspection Lot Number</Text>
                        <TextInput
                            style={styles.longInput}
                            value={material.inspectionLotNumber}
                            onChangeText={setMaterial.inspectionLotNumber}
                            placeholder="Inspection Lot Number"
                            keyboardType="number-pad"
                            maxLength={11}
                            multiline={false}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Container Number</Text>
                        <TextInput
                            style={styles.input}
                            value={material.containerId}
                            onChangeText={setMaterial.containerId}
                            placeholder="CTN"
                            maxLength={10}
                            multiline={false}
                        />
                    </View>
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
    buttonView:{
        padding: 250,
    },
    formView:{
    },
    sectionView:{
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
        width: 150,
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 24 ,
    },
    longInput:{
        marginVertical:5,
        width: 350,
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 24,
    },
});