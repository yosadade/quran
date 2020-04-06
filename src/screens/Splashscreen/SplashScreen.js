import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { DotIndicator } from 'react-native-indicators'

import { ActionStatusBar } from '../../components/Action/Action'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <ActionStatusBar />
            <ActionTitle />
        </View>
    )
}

const ActionTitle = () => {
    return (
        <View style={styles.wrapTitle}>
            <Text style={styles.title}>Qurana</Text>
            <DotIndicator color="#F6F6F6" size={7} style={styles.indicator}/>
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
    wrapTitle: {
        flex: 1
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
