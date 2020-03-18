import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, StatusBar, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import ListSurah from './ListSurah'
import Axios from 'axios';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            dataSeluruhSurah : []
        }
    }

    componentDidMount(){
        this.getDataSurah()
    }

    getDataSurah = () => {
        Axios.get(`https://api.banghasan.com/quran/format/json/surat`)
        .then(result => {
           this.setState({
               dataSeluruhSurah : result.data.hasil
           }, () => {
            // console.log(this.state.dataSeluruhSurah, "new dataSeluruhSurah")
           })
        }).catch (err => console.log(err, "fetch API gagal !!"))
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar 
                    barStyle = "dark-content" 
                    hidden = {false} 
                    backgroundColor = "#EBFEFF" 
                    translucent = {true}
                />
                <TextInput 
                    placeholder= " Cari Surah"
                    style={styles.textInput}
                />
                <ScrollView style={styles.scrollView}>
                    <FlatList 
                        data = {this.state.dataSeluruhSurah}
                        renderItem = {({item, key}) =>{
                            return (
                                <TouchableOpacity key={key} style={styles.content}>
                                    <Text>{item.nama}</Text>
                                    <Text>{item.asma}</Text>
                                    <Text>{item.arti}</Text>
                                    <Text>{item.keterangan}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </ScrollView>
           </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        backgroundColor: '#EBFEFF',
        flex: 1
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 5,
        height: 40,
        width: '100%',
        fontSize: 14,
        backgroundColor: '#FFFFFF',
        marginTop: 20 
    },
    scrollView: {
        flex: 1
    },
    content: {
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
