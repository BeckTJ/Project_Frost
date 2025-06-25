import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';
import Distillation from "../screens/Distillation";
import Sample from "../screens/Sample";
import MaterialSelection from "../screens/MaterialSelection";
import RawMaterialScreen from "../screens/RawMaterialScreen";
import VendorSelection from "../screens/VendorSelection";

const Stack = createNativeStackNavigator();

export default AppNav=()=>{
    return(
    <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name='Raw Material' component={RawMaterialNav}/>
        <Stack.Screen name='Distillation' component={Distillation}/>
        <Stack.Screen name='Sample' component={Sample} />
    </Stack.Navigator>    
    );
}
function RawMaterialNav() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Material Selection' component={MaterialSelection} />
            <Stack.Screen name='Vendor Selection' component={VendorSelection} />
            <Stack.Screen name= 'Raw Material Input' component={RawMaterialScreen}/>
        </Stack.Navigator>
    );
}

