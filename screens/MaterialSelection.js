import {View, Text, FlatList, StyleSheet} from 'react-native';
import { useEffect, useState } from 'react';
import MaterialAjax from '../data/MaterialAjax';
import RawMaterialScreen from './RawMaterialScreen';

export default MaterialSelection =({navigation})=>{
    const [material, setMaterial] = useState({});
    useEffect(() => {
        async function getMaterial(){
            return setMaterial(await MaterialAjax.fetchMaterial());
        }
        getMaterial();
    }, );
    
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Raw Material</Text>
            <FlatList
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-evenly'}}
                ItemSeparatorComponent={<View style={{margin: 10}} />}
                data={material}
                renderItem={({item})=> (
                    <View style={styles.buttons}>
                    <LargeButton  
                        title={item.materialName}
                        key={item.materialNumber}
                        onPress={() => 
                        {
                            navigation.push('Vendor Selection', {material: item})
                        }} />
                    </View>
                    )
                } 
            />
        </View>
    );
};

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