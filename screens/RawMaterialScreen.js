import { useEffect, useState, useRef } from "react";
import { Text, TextInput, View, StyleSheet, Alert } from "react-native";
import VendorLotAjax from '../data/VendorLotAjax';
import LargeButton from "../components/LargeButton";

export default RawMaterialScreen = ({navigation, route}) =>{
    const hpMaterial = route.params.material;
    const vendor = route.params.vendor;
    
    const [material,setMaterial] = useState({});
    const [type,setType] = useState('');
    const [lotNumber,setLotNumber] = useState('');
    const [batch,setBatch] = useState(null);

    const lotNumberRef = useRef(null);
    const batchNumberRef = useRef(null);
    const qtyRef = useRef(null);

    var rawMaterial =
    {
        materialName:material.materialName,
        materialNumber: vendor.materialNumber,
        vendorName: vendor.vendorName,
        materialType:type,
        vendorLot:lotNumber,
        inspectionLot:0,
        batchNumber:batch,
        containerId:null,
        containerWeight:0,
        quantity : 0,
    };

    const validateRequirements = () => {
        {/*Check If Inspection Lot, Batch Number, or Container number 
            are required fields */}
            
        
    };

    {/* system needs to screen vendor lots to see if it exsists */}
    {/* both vendor lot and batch number need to be screened together 
        on vendor lot can have multiple batch numbers */}
    {/*what if it is not batch managed? */}
    const verifyVendorLot = async ()  =>{
        async function CheckVendorLot() {

            var vendorLot = (hpMaterial.batchManaged) ? 
                await VendorLotAjax.verifyVendorLot(lotNumber,batch):
                await VendorLotAjax.verifyVendorLot(lotNumber);
            return vendorLot;
        }
        var checkLot = await CheckVendorLot();
        var type = (checkLot)?'N':'Y';
        
        setType(type);
    };
    useEffect(() =>
    {
        if(vendor.batchManaged === true)
        {
            batchNumberRef.current.focus();
        }
        else{
            qtyRef.current.focus();
        }
    }, [vendor.batchManaged === true]);
    const handleClick = ()=>{
        setMaterial({rawMaterial});
        navigation.push('Home');
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
                            value={type}
                            placeholder="R/Y/N"
                            multiline={false}
                            editable={false}
                            maxLength={1}
                        />
                    </View>
                </View>
                <View style={styles.formView}>
                    <View style={styles.inputView}>
                        
                        <Text style={styles.inputTitle}>Vendor Lot Number</Text>
                        <TextInput
                            style={styles.longInput}
                            value={lotNumber}
                            onChangeText={setLotNumber}
                            onBlur={(batch!==null && vendor.batchManaged === true)?
                                verifyVendorLot:null}
                            placeholder="Vendor Lot Number"
                            maxLength={25}
                            multiline={false}
                            ref={lotNumberRef}
                        />
                    </View>
                    {vendor.batchManaged === true &&
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>Batch Number</Text>
                        <TextInput
                            style={styles.input}
                            value={batch}
                            onChangeText={setBatch}
                            onBlur={verifyVendorLot}
                            placeholder={"1234567"}
                            keyboardType="number-pad"
                            maxLength={7}
                            multiline={false}
                            ref={batchNumberRef}
                        />
                    </View>
                    }
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
                            ref={qtyRef}
                            
                        />
                    </View>
                </View>

                <View style={styles.formView}>
                { vendor.vendorName == 'Reclaim' &&
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
                }
                {vendor.containerNumberRequired &&
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
                }
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