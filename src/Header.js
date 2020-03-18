import React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput } from 'react-native';
 
const Header = () => {
    return (
        <View>
  
            <View style={styles.container}>
                <View style={styles.wrapJudul}>
                    <Text style={styles.judul}>
                        Q U R A N
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: '#EBFEFF',
        paddingHorizontal: 20
    },
    wrapJudul : {
        justifyContent: 'center',
    },
    judul: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FCA545'
    },
})
