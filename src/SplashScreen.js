import React from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'


const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#EBFEFF'
    }
})
