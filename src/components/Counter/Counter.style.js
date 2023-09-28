import { StyleSheet } from "react-native";
import { colorsPallete } from "../../constants/colorsPallete";

export default styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:30,
        justifyContent:'space-evenly'
    },
    button:{
        backgroundColor:colorsPallete.secondaryColor,
        width:30,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        backgroundColor:colorsPallete.primaryColor,
        width:40,
        height:'100%',
        textAlign:'center',
        textAlignVertical:'center'
    }
})