import { Pressable,Text, StyleSheet, View } from "react-native";

export default LargeButton =({props,onPress})=> {
    return(
        
        <Pressable style={({pressed}) => [styles.button, pressed ? styles.buttonPress : {}]}
         onPress={onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
        
    );
}

const styles = StyleSheet.create({
    
    button:{
        justifyContent:'center',
        padding: 5,
        borderRadius: 15,
        width: 250,
        height: 150,
        borderWidth:2,
        borderColor: "blue",
        backgroundColor:'lightblue',
        elevation: 20,
    },
    buttonPress:{
        borderColor:'grey',
        backgroundColor: 'lightgrey',
        elevation:0,

    },
    text:{
        fontSize: 32,
        textAlign: 'center',
    },
})