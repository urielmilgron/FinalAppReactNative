import { View, FlatList } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import CategoryItem from './components/CategoryItem/CategoryItem'
import categories from '../../data/categories'
import styles from './Home.style'

const Home = () => {
  return (
   <>
   <Header title={"Home"}/>
   <View style={styles.container}>
    <FlatList
    data={categories}
    keyExtractor={category => category}
    renderItem={({item}) => <CategoryItem category={item}/>
    }/>
    </View>
   </>
  )
}

export default Home

