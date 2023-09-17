import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingTop:12,
        paddingBottom:12,
        justifyContent:"center"
    },
    input:{
        backgroundColor:'white',
        width:'60%',
        marginLeft:15,
        borderTopLeftRadius:1,
        borderBottomLeftRadius:1,
        paddingLeft:10,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderLeftWidth:1

    },
    clearIcon:{
        backgroundColor:'white',
        padding:8,
        borderTopRightRadius:1,
        borderBottomRightRadius:1,
        borderRightWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1
    },
    searchIcon:{
        backgroundColor:'grey',
        padding:8,
        marginLeft:10,
        borderRadius:25
    }
})