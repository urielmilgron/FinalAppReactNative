import { useState } from "react";
import { Home, Products, Details } from "./src/screens";
import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";
import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  const [globalFonts] = useFonts(fonts)
  // const [categorySelected, setCategorySelected] = useState("");
  // //setCategorySelected es pasado por props hasta el componente CategoryItem para setear la categoria y que 
  // //switchee entre el home y los products de esa category
  // const [productSelected, setProductSelected] = useState()

  if(!globalFonts){
    return null
  }

  return <StackNavigator/>


//   return productSelected ? (
//     <Details product={productSelected} />
//   ) :  categorySelected ? (
//     <Products category={categorySelected} setProductSelected={setProductSelected}/>
//   ) : (  
//     <Home setCategorySelected={setCategorySelected} /> 
//   );
}
