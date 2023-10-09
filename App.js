import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { Provider } from "react-redux";
import store from "./src/store";
import { Login } from "./src/screens";
import { Signup } from "./src/screens";

export default function App() {
  const [globalFonts] = useFonts(fonts);

  if (!globalFonts) {
    return null;
  }

  return (
    // <Provider store={store}>
    //   <NavigationContainer>
    //     <BottomTabNavigator />
    //   </NavigationContainer>
    // </Provider>
    <Signup/>
  );
}
