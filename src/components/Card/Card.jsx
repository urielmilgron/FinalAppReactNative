import { View } from 'react-native'
import styles from './Card.style'

//En este componente podemos mandar como children lo que quisieramos, haciendolo super reutilizable
const Card = ({ children, style }) => {
  return(
    //Colocamos el style a lo ultimo para que sobreescriba el estilo en caso de que no queramos que 
    //tengan el que creamos en la misma card.
    <View style={[styles.container, style]}>{children}</View>
  )
}

export default Card