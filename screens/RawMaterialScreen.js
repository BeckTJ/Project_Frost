import { useEffect, useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import RawMaterialAjax from '../data/RawMaterialAjax';
import LargeButton from "../components/LargeButton";

export default RawMaterialScreen = ({navigation, route}) =>{
    const hpMaterial = route.params.material;
    const vendor = route.params.vendor;
    
    // const vendor = Vendor(12345,"Store", "Cow");
    // const hpMaterial = Material(12344, 'Milk', 'MLK', '123-wer-456', 'AA', true, 100, 100, 'kg');
    const [material,setMaterial] = useState({});

  
    {/* system needs to screen vendor lots to see if it exsists */}
    
    const verifyVendorLotNumber = ({lotNumber}) =>{
        async function CheckVendorLot() {
            var vendorLot = await RawMaterialAjax.fetchVendorLot(lotNumber);
            return vendorLot;
        }
        var lot = CheckVendorLot();
    
        var type; 

        if(lot.vendorLotNumber === lotNumber){
            type = "N";
        }
        else {
            type = "Y";
        }
        rawMaterial.materialType = type;
    }
    const handleClick = ()=>{
        setMaterial({rawMaterial});
        navigation.push('Home');
    };

    var rawMaterial =
    {
        materialName:material.materialName,
        materialNumber: vendor.materialNumber,
        vendorName: vendor.vendorName,
        materialType:null,
        vendorLot:null,
        inspectionLot:0,
        batchNumber:0,
        containerId:null,
        containerWeight:0,
        quantity : 0,
    };

    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>Raw Material ({hpMaterial.materialName})</Text>
            <View>
                <View style={styles.formView}>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Material Number</Text>
                        <TextInput
                            style={styles.input}
                            value={rawMaterial.materialNumber.toString()}
                            editable={false}                    
                            multiline={false}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Vendor Name</Text>
                        <TextInput
                            style={styles.input}
                            value={rawMaterial.vendorName}
                            editable={false}
                            multiline={false}
                        />
                    </View>
                    {/* populate once vendor lot number is entered */}
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Material Type</Text>
                        <TextInput
                            style={styles.input}
                            value={rawMaterial.materialType}
                            placeholder="R/Y/N"
                            multiline={false}
                            maxLength={1}
                        />
                    </View>
                </View>
                <View style={styles.formView}>
                    <View style={styles.inputView}>
                        
                        <Text style={styles.inputTitle}>Vendor Lot Number</Text>
                        <TextInput
                            style={styles.longInput}
                            value={rawMaterial.vendorLot}
                            onChangeText={rawMaterial.vendorLot}
                            onBlur={verifyVendorLotNumber} 
                            placeholder="Vendor Lot Number"
                            maxLength={25}
                            multiline={false}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Batch Number</Text>
                        <TextInput
                            style={styles.input}
                            value={rawMaterial.batchNumber}
                            onChangeText={rawMaterial.batchNumber}
                            placeholder={"1234567"}
                            keyboardType="number-pad"
                            maxLength={7}
                            multiline={false}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Quantity</Text>
                        <TextInput
                            style={styles.input}
                            value={rawMaterial.quantity}
                            onChangeText={rawMaterial.quantity}
                            keyboardType="number-pad"
                            placeholder={"1"}
                            maxLength={7}
                            multiline={false}
                        />
                    </View>
                </View>

                <View style={styles.formView}>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Inspection Lot Number</Text>
                        <TextInput
                            style={styles.longInput}
                            value={rawMaterial.inspectionLot}
                            onChangeText={rawMaterial.inspectionLot}
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
                            value={rawMaterial.containerId}
                            onChangeText={rawMaterial.containerId}
                            placeholder="CTN"
                            maxLength={10}
                            multiline={false}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Container Weight</Text>
                        <TextInput
                            style={styles.input}
                            value={rawMaterial.containerWeight}
                            onChangeText={rawMaterial.containerWeight}
                            placeholder="180"
                            maxLength={10}
                            multiline={false}
                            keyboardType="number-pad"
                        />
                    </View>
                </View>
                <View style={styles.formView}>
                    <View style={styles.inputView}>
                        <LargeButton title={"Submit"} onClick={handleClick}/>
                    </View>
                    <View style={styles.inputView}>
                        <LargeButton title={"Clear"} onClick={handleClick}/>
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
        margin: 50,
    },
    buttonView:{
        margin: 15,
    },
    formView:{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    inputView:{
        margin: 15,
        marginTop: 50,
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
        textAlign:'center',
    },
    longInput:{
        marginVertical:5,
        width: 350,
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 24,
    },
});