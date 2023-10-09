import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import styles from "./Details.style";
import { Header } from "../../components";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";

const Details = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch()

  const handleToCart = () => {
    dispatch(addItem({...product, quantity: 1}))
  }
  return (
    <View style={styles.detailsContainer}>
      {/* <Header title={"Detalles"} /> */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.images[0] }} style={styles.image} />
      </View>
      <View style={styles.titleContainer}>
        <Text>{product.title}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>{product.description}</Text>
      </View>
      <Pressable onPress={handleToCart}>
        <Text>
          Add to cart
        </Text>
      </Pressable>
    </View>
  );
};

export default Details;
