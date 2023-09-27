import { Text, View } from "react-native";
import React from "react";

const CartItem = ({ dataCart }) => {
  return (
    <View>
        <Text>{dataCart.title}</Text>
    </View>
  );
};

export default CartItem;
