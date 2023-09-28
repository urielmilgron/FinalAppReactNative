import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByInputValue } from '../../slice/counter/counterSlice'
import styles from './Counter.style'

const Counter = () => {
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => dispatch(decrement())}><Text>-</Text></Pressable>
      <Text style={styles.text}>{counter}</Text>
      <Pressable style={styles.button} onPress={() => dispatch(increment())}><Text>+</Text></Pressable>
    </View>
  )
}

export default Counter