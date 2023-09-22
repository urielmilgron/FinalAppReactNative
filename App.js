import { useState } from "react";
import { Home, Products, Details } from "./src/screens";
import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";
import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  const [globalFonts] = useFonts(fonts);

  if (!globalFonts) {
    return null;
  }

  return <StackNavigator />;
}
