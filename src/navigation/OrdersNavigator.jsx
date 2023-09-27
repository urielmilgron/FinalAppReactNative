import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Orders} from "../screens";
const Stack = createNativeStackNavigator();

function OrdersNavigator() {
  return (
      <Stack.Navigator
        initialRouteName="Orders"
        screenOptions={({}) => ({
          headerTitleAlign: "center",
        })}
      >
        <Stack.Screen name="Orders" component={Orders} />
      </Stack.Navigator>
  );
}

export default OrdersNavigator;
 //Hay que crear el bottom tab, pero fijate que falta, ya sacaste el navigationcontainer y lo pusiste en app.js