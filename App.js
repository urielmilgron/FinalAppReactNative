import { useState } from "react";
import { Home, Products } from "./src/screens";
import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";

export default function App() {
  const [globalFonts] = useFonts(fonts)
  const [categorySelected, setCategorySelected] = useState("");
  //setCategorySelected es pasado por props hasta el componente CategoryItem para setear la categoria y que 
  //switchee entre el home y los products de esa category

  if(!globalFonts){
    return null
  }
  return categorySelected ? (
    <Products category={categorySelected} />
  ) : (
    <Home setCategorySelected={setCategorySelected} /> 
  );
}
