import { View, FlatList } from "react-native";
import React from "react";
import CategoryItem from "./components/CategoryItem/CategoryItem";
import styles from "./Home.style";
import { useGetCategoriesQuery } from "../../services/shopApi";

const Home = ({ navigation }) => {
  const { data, isLoading } = useGetCategoriesQuery();

  return (
    <>
      {/* <Header title={"Home"} /> */}
      <View style={styles.container}>
        {!isLoading && (
          <FlatList
            data={data}
            keyExtractor={(category) => category}
            renderItem={({ item }) => (
              <CategoryItem navigation={navigation} category={item} />
            )}
          />
        )}
      </View>
    </>
  );
};

export default Home;
