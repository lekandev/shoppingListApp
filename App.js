import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import {uuid} from 'uuidv4';

import Header from './components/Header';
import ListIem from './components/ListItem'

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'bread'},
    {id: uuid(), text: 'Juice'},
  ])

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  // text: {
  //   color: 'darkSlateblue',
  //   fontSize: 30,
  // },
  // img: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 100 / 2
  // }
});

export default App