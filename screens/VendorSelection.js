import {View, Text, FlatList, StyleSheet} from 'react-native';


export default VendorSelection =({navigation,route})=>{
    const material = route.params.material
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Material Vendor</Text>
            <FlatList
                numColumns={1}
                ItemSeparatorComponent={<View style={{margin: 10}} />}
                data={material.rawMaterialVendors}
                renderItem={({item})=> (
                    <View style={styles.buttons}>
                    <LargeButton  
                        title={item.vendorName}
                        key={item.materialNumber}
                        onPress={() => 
                        {
                            navigation.push('Raw Material Input',
                            {vendor: item, material: material})
                        }} />
                    </View>
                    )
                } 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        fontSize: 32,
        textAlign: 'center',
        margin: 25,
    },
    buttons: {
        marginTop: '10%',
        flexDirection: 'column',
    },
});