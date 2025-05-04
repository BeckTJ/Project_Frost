import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';
import RawMaterialScreen from '../screens/RawMaterialScreen';
import Distillation from "../screens/Distillation";
import Sample from "../screens/Sample";

const Stack = createNativeStackNavigator();

export default AppNav=()=>{
    return(
    <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name='Raw Material' component={RawMaterialScreen}/>
        <Stack.Screen name='Distillation' component={Distillation}/>
        <Stack.Screen name='Sample' component={Sample} />
    </Stack.Navigator>    
    );
}

