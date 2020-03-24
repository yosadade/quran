import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Card, CardItem, Left, Body, Thumbnail, Item } from 'native-base'

const Content = ({route}) => {
  const { asma, keterangan } = route.params
  console.log("ini adalah asma")
  console.table(asma)
  return (
    <View style={styles.container}>
      <Text>{asma}</Text>
      <Text>{keterangan}</Text>
    </View>
  ) 
}

export default Content

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBFEFF'
  }
})
