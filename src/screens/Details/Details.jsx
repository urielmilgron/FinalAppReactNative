import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Details = () => {
  return (
    <View style={detailsContainer}>
      <View style={imageContainer}><Image/></View>
      <View style={titleContainer}><Text>Articulo</Text></View>
      <View style={descriptionContainer}><Text>Descripción</Text></View>
    </View>
  )
}

export default Details
