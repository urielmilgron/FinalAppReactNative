import { View, Text } from "react-native";
import React, { useState } from "react";
import AuthStackNavigator from "./AuthStack";
import BottomTabNavigator from "./BottomTabNavigator";

const MainNavigator = () => {
    const [user, setUser] = useState()

  return user? <BottomTabNavigator/> : <AuthStackNavigator/> 
};

export default MainNavigator;
