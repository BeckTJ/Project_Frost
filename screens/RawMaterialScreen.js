import { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import Vendor from '../data/Vendor';
import UserInputFields from "../components/UserInputFields";

export default RawMaterialScreen = () =>{
    
    // const vendor = Vendor(12345,"Store", "Cow");
    // const hpMaterial = Material(12344, 'Milk', 'MLK', '123-wer-456', 'AA', true, 100, 100, 'kg');
    const [material] = useState({
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

            <UserInputFields materials={material} />
            
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