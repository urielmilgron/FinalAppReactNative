import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./CartNavigator";
import StackNavigator from "./StackNavigator";
import OrdersNavigator from "./OrdersNavigator";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="ShopNav"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home-outline"
              size={24}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartNav"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="cart-outline"
              size={24}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrderNav"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="document-text-outline" size={24} color={focused ? "blue" : "black"} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
