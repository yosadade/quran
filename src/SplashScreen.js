import React from 'react'
import { Text, StyleSheet, View, ActivityIndicator, StatusBar, Image } from 'react-native'
import { WaveIndicator, DotIndicator } from 'react-native-indicators'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar 
                style={styles.statusbar}
                barStyle = "dark-content" 
                hidden = {true} 
                backgroundColor = "#00D2B2" 
                translucent = {true}
            />
            <View style={{flex: 1}}>
                <Text style={styles.title}>Qurana</Text>
                <DotIndicator color="#F6F6F6" size={7} style={styles.indicator}/>
            </View>
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
        fontSize: 70,
        fontWeight: 'bold',
        color: '#FFFFFF',
        top: 320
    },
    indicator: {
    }
})
