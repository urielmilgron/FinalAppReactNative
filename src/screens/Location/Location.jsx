import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Location.style'
import * as ModuleLocation from 'expo-location'

const Location = () => {
    const [location, setLocation] = useState({latitude: '', longitude: ''})
    const [error, setError] = useState('')

    useEffect(() => {
        (async () => {
            let {status} = await ModuleLocation.requestForegroundPermissionsAsync()
            if(status !== 'garanted'){
                setError('Permissions denied')
                return
            }
            let location = await ModuleLocation.getCurrentPositionAsync({})
            setLocation({
                latitude:location?.coords.latitude,
                longitude:location?.coords.longitude
            })
        })()
    },[])

  return (
    <View style={styles.container}>
      <Text>My Location</Text>
      {location ? <View><Text>Latitude: {location.latitude}, Longitude: {location.longitude}</Text></View> : <View><Text>No hay locación bro</Text></View>}
    </View>
  )
}

export default Location