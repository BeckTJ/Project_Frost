import {Text, View, StyleSheet} from 'react-native'
import LargeButton from '../components/LargeButton';


export default HomeScreen = ({navigation, props}) => {
   return( 
    <View style={styles.container}>
        <Text>Home Screen</Text>
        <LargeButton title={'test'} onPress={() => {navigation.navigate('Raw Material')}} />
    </View>
   );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        margin: 10,
        borderWidth: 2,
        borderRadius: 8,
        padding: 50,      
        backgroundColor: 'lightblue',
    },
    grid:{
        flexDirection: 'row',
        flex:1,
        
    },
    column: {
        flex:1,
        
    }
});
