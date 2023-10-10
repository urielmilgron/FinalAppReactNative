import { View, FlatList, Text } from "react-native";
import React from "react";
import CategoryItem from "./components/CategoryItem/CategoryItem";
import styles from "./Home.style";
import { useGetCategoriesQuery } from "../../services/shopApi";

const Home = ({ navigation }) => {
  const { data, isLoading, isError } = useGetCategoriesQuery();

  if(isLoading){
    return (
      <>
        <View style={styles.container}>
          <Text>Estoy cargando amigo</Text>
        </View>
      </>
    );
  }
  if(isError){
    return (
      <>
        <View style={styles.container}>
          <Text>Alto ahí, surgio un error re básico</Text>
        </View>
      </>
    );
  }

  return (
    <>
      <View style={styles.container}>
      
          <FlatList
            data={data}
            keyExtractor={(category) => category}
            renderItem={({ item }) => (
              <CategoryItem navigation={navigation} category={item} />
            )}
          />
        
      </View>
    </>
  );
};

export default Home;
