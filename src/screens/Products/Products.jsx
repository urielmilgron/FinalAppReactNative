import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useState, useEffect } from "react";
import allProducts from "../../data/products";
import { Header, SearchInput } from "../../components";
import styles from "./Products.style";

const Products = ({ navigation, route }) => {
  const [arrayProducts, setArrayProducts] = useState([]); //Array de productos que vienen si selecciona categoría
  const [word, setWord] = useState(""); //Palabra o letra que ingresa el usuario
  const { category } = route.params;

  useEffect(() => {
    if (category) {
      //Guardamos en products, todos los productos de allProducts que tengan la misma categoria que viene por props
      const products = allProducts.filter(
        (product) => product.category === category
      );
      //Tomamos los productos que incluya lo que el usuario ingrese en el input
      const productFiltered = products.filter((product) =>
        product.title.includes(word)
      );
      //Seteamos los productos para mostrarlos por pantalla
      setArrayProducts(productFiltered);
    } else {
      //Hace lo mismo que el de arriba solo que ahora si no hay categoria, filtra a partir de todos los productos
      const productFiltered = allProducts.filter((product) =>
        product.title.includes(word)
      );
      setArrayProducts(productFiltered);
    }
    //Este use effect se ejecuta cada vez que category o word cambien
  }, [category, word]);

  return (
    <View style={styles.container}>
      {/* <Header title={category} /> */}
      <SearchInput onSearch={setWord} />
      <View style={styles.productsContainer}>
        <FlatList
          data={arrayProducts}
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
      </View>
    </View>
  );
};

export default Products;
