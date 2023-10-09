import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import styles from './Login.style'

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Login to start</Text>
        <TextInput style={styles.textInput} placeholder='Email'/>
        <TextInput style={styles.textInput} placeholder='Password'/>
        <Pressable style={styles.button}>
            <Text>Login</Text>
        </Pressable>
        <Text>Not have an account?</Text>
        <Pressable style={[styles.button, styles.buttonSign]}>
            <Text>Sign up</Text>
        </Pressable>
        </View>
    </View>
  )
}

export default Login