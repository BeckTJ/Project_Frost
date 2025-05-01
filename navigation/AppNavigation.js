import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RawMaterialScreen from "../screens/RawMaterialScreen";

const Stack = createNativeStackNavigator();

export default AppNavigation=()=>{
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name='Raw Material' component={RawMaterialScreen}/>
    </Stack.Navigator>    
}

