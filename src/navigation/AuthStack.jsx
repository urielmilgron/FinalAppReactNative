import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup } from "../screens";

const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStackStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
