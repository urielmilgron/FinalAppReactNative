import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./Profile.style";
import * as ImagePicker from "expo-image-picker";
import { setCameraImage } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePostProfileImageMutation } from "../../services/shopApi";

const Profile = () => {
  const image = useSelector(state => state.auth.imageCamera)
  const {localId} = useSelector(state => state.auth)
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
  const dispatch = useDispatch()

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions()

    if(isCameraOk){
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[9,16],
            base64:true,
            quality:0.3
        })
        if(!result.canceled){
          dispatch(setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`))
            //setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        }
    }
  }

  const confirmImage = () => {
    triggerSaveProfileImage({image, localId})
    console.log(result)
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageAndButton}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:image? image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Pressable style={styles.button} onPress={pickImage}>
          <Text style={{ color: "white" }}>Tomar foto</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={confirmImage}>
          <Text style={{ color: "white" }}>Guardar foto</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;
