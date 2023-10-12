import { StyleSheet } from "react-native";
import { colorsPallete } from "../../constants/colorsPallete";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    imageAndButton:{
        width:'40%',
        height:'40%',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    imageContainer:{
        width:100,
        height:100,
    
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:100,
        borderColor:'black',
        borderWidth:1,
        shadowColor:'blue',
    },
    button:{
        backgroundColor:colorsPallete.primaryColor,
        width:'75%',
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
    },
})