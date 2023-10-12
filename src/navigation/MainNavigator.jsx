import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import AuthStackNavigator from "./AuthStack";
import BottomTabNavigator from "./BottomTabNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopApi";
import { setCameraImage } from "../features/auth/authSlice";

const MainNavigator = () => {
  const {user, localId} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const {data,error,isLoading} = useGetProfileImageQuery(localId)

  useEffect(() => {
    
    if(data){
      dispatch(setCameraImage(data.image))
      console.log(data.image)
    }
  },[data])

  return user? <BottomTabNavigator/> : <AuthStackNavigator/> 
};

export default MainNavigator;
