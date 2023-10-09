import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import styles from './Cart.style'
import dataCart from '../../data/dataCart'
import CartItem from './components/CartItem'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../../services/shopApi'

const Cart = () => {
  const cart = useSelector(state=> state.cart.items)
  const total = useSelector(state => state.cart.total)
  const [ triggerPost, result ] = usePostOrderMutation()

  const renderItem = ({item}) => <CartItem dataCart={item}/>
  const confirmOrder = () => {
    triggerPost({total, cart, user:"userLogged"})
  }
  return (
    <View style={styles.container}>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
        <Pressable onPress={confirmOrder}>
          <Text>Confirmar</Text>
        </Pressable>
        <Text>total: {total}</Text>
    </View>
  )
}

export default Cart