import { Text, View } from "react-native";
import React from "react";
import styles from './CartItem.style'

const CartItem = ({ dataCart }) => {
  return (
    <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{dataCart.title}</Text>
    </View>
  );
};

export default CartItem;
