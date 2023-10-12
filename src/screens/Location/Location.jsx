import { View, Text } from 'react-native'
import React from 'react'
import styles from './Location.style'

const Location = () => {
    const [location, setLocation] = useState({latitude: '', longitude: ''})
  return (
    <View style={styles.container}>
      <Text>My Location</Text>
      {location ? <View><Text>Latitude: {location.latitude}, Longitude: {location.longitude}</Text></View> : <View><Text>No hay locación bro</Text></View>}
    </View>
  )
}

export default Location