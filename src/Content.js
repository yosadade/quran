import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Card, CardItem, Left, Body, Thumbnail } from 'native-base'

class Content extends Component {
  render() {
    return (
      <View key={key}>
        <TouchableOpacity style={{marginTop: 50, marginHorizontal: 12}}>
          <Card style={{borderRadius: 10}}>
            <CardItem >
              <Left>
                <Thumbnail square large source={{uri: '' }} style={{borderRadius: 10}} />
                <Body>
                  <Text numberOfLines={2} style={{fontSize: 14, flex: 1, fontWeight: 'bold', justifyContent: 'center'}}>isi</Text>
                  <Text note numberOfLines={1} style={{fontSize: 12, flex: 1}}>{this.props.asma}</Text>
                  <Text note numberOfLines={1} style={{fontSize: 11, flex: 1, backgroundColor: '#2980b9', textAlign: 'center', justifyContent: 'center', alignItems: 'center', width: 70, color: 'white', fontWeight: 'bold'}}>isi</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </TouchableOpacity> 
      </View> 
    )
  }
}

export default Content

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E3136'
  },
  backgroundHeadline: {
    backgroundColor:'black',
    position:'absolute',
    width:'100%',
    height:'100%',
    opacity: 0.2,
  },
  imageHeadline: {
    height: 240,
    width: null,
    flex: 1,
  },
  judulHeadline: {
    marginHorizontal: 10,
    fontSize: 22 ,
    color: 'white',
    position: 'absolute',
    textAlign: 'left',
    alignSelf: 'center',
    marginTop: 150,
    fontWeight: '700'
  },
  kategoriHeadline: {
    marginHorizontal: 10,
    fontSize: 17 ,
    color: 'white',
    position: 'absolute',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 125,
    fontWeight: '700',
    width: 80,
    backgroundColor: '#2980b9'
  },
  tglHeadline: {
    marginHorizontal: 10,
    fontSize: 14,
    position: 'absolute',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 205,
    fontWeight: '500',
    color: '#dcdede'
  },
})