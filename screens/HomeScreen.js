import {Text, View, ScrollView, StyleSheet, FlatList} from 'react-native'
import LargeButton from '../components/LargeButton';

const distOptions = ['Raw Material', 'Sample', 'Distillation', ''];

export default HomeScreen = ({navigation}) => {
    
    const renderItem = ({item}) =>(
        <View style={styles.buttons}>
            <LargeButton title={item} onPress={() => {navigation.navigate(item)}} />
        </View>
    );

   return( 
    <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <View style={styles.buttonGrid}>
            <FlatList  
                data={distOptions}
                renderItem={renderItem}
                numColumns={2}  
            />
        </View>
    </View>
   );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:25,
        alignItems:'center'
    },
    buttonGrid:{
        marginTop: 250,
    },
    text:{
        fontSize: 32,
        textAlign: 'center',
    },
    buttons: {
        
        margin: 25,
    },
});
