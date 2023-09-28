import { StyleSheet } from 'react-native';
import { colorsPallete } from '../../constants/colorsPallete';

export default styles = StyleSheet.create({
    container:{
        marginTop:10,
    },
    counterValue:{
        backgroundColor:colorsPallete.secondaryColor,
        width:50,
        height:50,
        alignSelf:'center',
        textAlign:'center',
        textAlignVertical:'center'
    }
})