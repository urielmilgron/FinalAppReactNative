import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../screens";
const Stack = createNativeStackNavigator();

function CartNavigator() {
  return (
      <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={({}) => ({
        })}
      >
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
  );
}

export default CartNavigator;
 //Hay que crear el bottom tab, pero fijate que falta, ya sacaste el navigationcontainer y lo pusiste en app.js