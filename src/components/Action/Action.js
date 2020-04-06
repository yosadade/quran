import React from 'react'
import { StatusBar, StyleSheet, View, TextInput } from 'react-native'

const ActionStatusBar = () => {
    return (
        <StatusBar 
          barStyle = "dark-content" 
          hidden = {false} 
          backgroundColor = "#00D2B2" 
          translucent = {true}
      />
    )
}

const ActionTextInput = () => {
    return (
       <View style={styles.wrapTextInput}>
           <TextInput 
             placeholder= ' Search Surah ...'
             style={styles.textInput}
             onChangeText={onHandleInput}
           />
      </View>
    )
}

const styles = StyleSheet.create ({
    wrapTextInput: {
        paddingHorizontal: 20,
        backgroundColor: '#00D2B2',
        paddingTop: 5
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 7,
        height: 40,
        width: '100%',
        fontSize: 15,
        backgroundColor: '#F6F6F6',
        marginVertical: 10 ,
        paddingHorizontal: 20,
    }
})

export { ActionStatusBar, ActionTextInput }