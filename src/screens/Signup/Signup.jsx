import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './Signup.style'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const [triggerSignUp, result] = useSignUpMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    triggerSignUp({
      email,
      password,
    }) 
    if(result.isSuccess){
      dispatch(setUser(result))
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Sign up to start</Text>
        <TextInput style={styles.textInput} placeholder='Email' value={email} onChangeText={setEmail}/>
        <TextInput style={styles.textInput} placeholder='New password' value={password} onChangeText={setPassword}/>
        <TextInput style={styles.textInput} placeholder='Confirm password' value={confirmPass} onChangeText={setConfirmPass}/>
        <Pressable style={styles.button} onPress={onSubmit}>
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