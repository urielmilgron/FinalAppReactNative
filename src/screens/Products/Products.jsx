import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { useState, useEffect } from "react";
import allProducts from "../../data/products";
import { SearchInput } from "../../components";
import styles from "./Products.style";
import { useGetProductsByCategoryQuery } from "../../services/shopApi";

const Products = ({ navigation, route }) => {
  const [word, setWord] = useState(""); //Palabra o letra que ingresa el usuario
  const { category } = route.params;
  const { data, isLoading} = useGetProductsByCategoryQuery(category)

  useEffect(() => {
    if (data) {
      //Tomamos los productos que incluya lo que el usuario ingrese en el input
      const productFiltered = data.filter((product) =>
        product.title.includes(word)
      );
   
    } 
    //Este use effect se ejecuta cada vez que category o word cambien
  }, []);

  return (
    <View style={styles.container}>
      {/* <Header title={category} /> */}
      <SearchInput onSearch={setWord} />
      <View style={styles.productsContainer}>
        {!isLoading && (
      <FlatList
      data={Object.values(data)}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <TouchableHighlight
            style={styles.touchableItem}
            onPress={() =>
              navigation.navigate("Details", { product: item })
            }
          >
            <Text style={styles.textItem}>{item.title}</Text>
          </TouchableHighlight>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />

        )}
  
      </View>
    </View>
  );
};

export default Products;
