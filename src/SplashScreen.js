import React from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'


const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Qurana</Text>
            <ActivityIndicator size="large" color="#F6F6F6" />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00D2B2'
    },
    title: {
        fontSize: 55,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 5
    }
})
