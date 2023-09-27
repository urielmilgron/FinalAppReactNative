import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './Cart.style'
import dataCart from '../../data/dataCart'
import CartItem from './components/CartItem'

const Cart = () => {
  return (
    <View style={styles.container}>
        <FlatList
          data={dataCart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CartItem dataCart={item} />
          )}
        />
    </View>
  )
}

export default Cart