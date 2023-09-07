import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../components/Header/Header'
import { styles } from './CategoriesList.style'

const CategoriesList = ({category}) => {
  return (
    <>
    {/* La categoría es dada ya que al presionar una, tendría que cambiar la misma */}
    <Header title={category}/>
    <View style={styles.container}>
        <Text>Categories List</Text>
    </View>
    </>
  )
}

export default CategoriesList

const styles = StyleSheet.create({})