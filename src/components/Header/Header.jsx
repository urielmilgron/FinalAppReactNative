import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './Header.style'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader}>{title}</Text>
    </View>
  )
}

export default Header

