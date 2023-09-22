import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./Details.style";
import { Header } from "../../components";

const Details = ({ route }) => {
  const { product } = route.params;
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
    </View>
  );
};

export default Details;
