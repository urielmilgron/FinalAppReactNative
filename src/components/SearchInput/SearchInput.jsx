import { Pressable, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./SearchInput.style";

const SearchInput = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    //Uso el useEffect para que vea que es lo que escribe en tiempo real y aparezcan
    //similitudes en el momento cuando inputValue cambie
    if (inputValue) {
      onSearch(inputValue);
    } else {
      setInputValue("");
      onSearch("");
    }
  }, [inputValue]);

  const search = () => {
    onSearch(inputValue);
  };
  const clearInput = () => {
    setInputValue("");
    onSearch("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        placeholder="Buscar producto"
        onChangeText={setInputValue}
      />
      <Pressable onPress={clearInput} style={styles.clearIcon}>
        <Ionicons name="close-circle-outline" size={24} color="black" />
      </Pressable>
      <Pressable onPress={search} style={styles.searchIcon}>
        <Ionicons name="search-outline" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default SearchInput;
