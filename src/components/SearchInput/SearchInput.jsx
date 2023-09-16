import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const SearchInput = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('')

    const search = () => {
        onSearch(inputValue)
    }
    const clearInput = () => {
        setInputValue('')
        onSearch('')
    }
  return (
    <View>
    <TextInput
        style={styles.input}
        value={inputValue}
        placeholder='Buscar producto'
        onChangeText={setInputValue}
    />
    <Pressable onPress={clearInput}>
      <Ionicons name='close-circle-outline' size={24} color='black'/>
    </Pressable>
    <Pressable onPress={search}>
      <Ionicons name='search' size={24} color='black'/>
    </Pressable>
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({})