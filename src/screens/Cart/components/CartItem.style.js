import { StyleSheet } from "react-native";
import { colorsPallete } from "../../../constants/colorsPallete";

export default styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:colorsPallete.secondaryColor,
        marginBottom:5,
        marginTop:5,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        width:'90%',
        alignSelf:'center'
    },
    itemTitle:{
        width:'90%'
    }
})