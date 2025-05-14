import { Text, TextInput, View, Button, StyleSheet } from "react-native";

export default UserInputFields =(material,updateRawMaterial)=>{
    
    const rawMaterial = {
        materialNumber: 0,
        materialType: '',
        vendorName: '',
        vendorLotNumber: '',
        batchNumber: 0,
        inspectionLotNumber: 0,
        ContainerNumber: '',
    };

    return(
        <View style={styles.container}>
            <View style={styles.formView}>
                <View style={styles.inputView}>
                    <Text style={styles.inputTitle}>Material Number</Text>
                    <TextInput
                        style={styles.input}
                        value={material.materialNumber}
                        onChangeText={rawMaterial.materialNumber}
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
                        onChangeText={rawMaterial.materialType}
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
                        onChangeText={rawMaterial.materialType}
                        placeholder="Name"
                        multiline={false}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputTitle}>Vendor Lot Number</Text>
                    <TextInput
                        style={styles.longInput}
                        value={material.vendorLotNumber}
                        onChangeText={rawMaterial.vendorLotNumber}
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
                        onChangeText={rawMaterial.batchNumber}
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
                        onChangeText={rawMaterial.inspectionLotNumber}
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
                        onChangeText={rawMaterial.containerId}
                        placeholder="CTN"
                        maxLength={10}
                        multiline={false}
                    />
                </View>
            </View>
            </View>
            
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,  
        marginTop: 100,
    },
    formView:{
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
    }
});