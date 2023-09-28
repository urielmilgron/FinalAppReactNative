import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './Cart.style'
import dataCart from '../../data/dataCart'
import CartItem from './components/CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {
  const counter = useSelector(state => state.counter.value)
  return (
    <View style={styles.container}>
        <FlatList
          data={dataCart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CartItem dataCart={item} />
          )}
        />
        <Text style={styles.counterValue}>{counter}</Text>
    </View>
  )
}

export default Cart