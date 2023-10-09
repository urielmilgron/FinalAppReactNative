import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import styles from './Signup.style'

const Signup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Sign up to start</Text>
        <TextInput style={styles.textInput} placeholder='Email'/>
        <TextInput style={styles.textInput} placeholder='New password'/>
        <TextInput style={styles.textInput} placeholder='Confirm password'/>
        <Pressable style={styles.button}>
            <Text>Sign up</Text>
        </Pressable>
        <Text>Do you have an account?</Text>
        <Pressable style={[styles.button, styles.buttonSign]}>
            <Text>Login</Text>
        </Pressable>
        </View>
    </View>
  )
}

export default Signup