import React from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import ListSurah from './ListSurah'

const Content = (props) => {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder= "Cari Surah"
                style={styles.textInput}
            />
            <ListSurah 
                dataSeluruhSurah= {props.data}
            />
        </View>
    )
}

export default Content

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        backgroundColor: '#EBFEFF',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 5,
        height: 40,
        width: '100%',
        fontSize: 14,
        backgroundColor: '#FFFFFF', 
    }
})
