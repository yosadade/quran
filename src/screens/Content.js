import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { Button, Icon } from 'native-base'

import { ActionStatusBar } from '../components/Action/Action'

const Content = ({route, navigation }) => {
  const { asma, keterangan, nama } = route.params
  return (
    <View style={styles.container}>
      <ActionStatusBar />
      <View style={styles.header}>
        <Button transparent onPress={()=> navigation.goBack()}>
          <Icon name='ios-arrow-back' style={styles.backButton}/>
          <Text style={styles.headerMidTitle}>{nama}</Text>
        </Button>
      </View>
      <Text></Text>
    </View>
  ) 
}

export default Content

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: {
    flexDirection: 'row', 
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#00D2B2'
  },
  backButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerMidTitle: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    color: '#FFFFFF',
  }
})
