import React, { PureComponent } from 'react'
import { Image, Text, StyleSheet, View, TextInput, StatusBar, ScrollView, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import Axios from 'axios';
import { Card, CardItem, Thumbnail, Left, Body, Content } from 'native-base';

import SplashScreen from './SplashScreen'



class Home extends PureComponent {
    constructor(){
        super();
        this.state = {
            dataSeluruhSurah : [],
            searchValue : "",
            newDataSeluruhSurah: [] 
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
            // console.log("new dataSeluruhSurah")
           })
        }).catch (err => console.log(err, "fetch API gagal !!"))
    }

    onHandleInput = (e) => {
        // console.log(e, "target")
        this.setState({
            searchValue: e
        }, () => {
            if(this.state.dataSeluruhSurah){
                const searchedSurah = this.state.dataSeluruhSurah.filter(item => (
                    item.nama.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1
                ))
                this.setState({
                    newDataSeluruhSurah : searchedSurah
                })
            }
        })
    }




    render() {
        const tampilanSurah = () => { return (

            this.state.newDataSeluruhSurah && this.state.searchValue 
                   ? this.state.newDataSeluruhSurah
                   : this.state.dataSeluruhSurah
       )
        }
        const DATA = this.state.dataSeluruhSurah
        if (DATA.length===0){
          // return  <ActivityIndicator size='large' color='grey' style={{marginTop: 300}}></ActivityIndicator>
          return <SplashScreen />
        }
        return (
            <View style={styles.container}>
                <StatusBar 
                    style={styles.statusbar}
                    barStyle = "dark-content" 
                    hidden = {false} 
                    backgroundColor = "#00D2B2" 
                    translucent = {true}
                />
                <View style={styles.wrapTextInput}>
                    <TextInput 
                        placeholder= " Search Surah ..."
                        style={styles.textInput}
                        onChangeText={this.onHandleInput}
                    />
                </View>
                {/* <View>
                    <Image 
                        source={{uri: 'https://cdn.dribbble.com/users/1961582/screenshots/10787461/media/782043814b94984cf85baea4e255dff9.jpg'}}
                        style={styles.image}
                    />
                </View> */}
                <SafeAreaView style={styles.scrollView}>
                    <FlatList 
                        data = {tampilanSurah()}
                        renderItem = {({item, index}) =>{
                            return (
                                <View key={index}>
                                    <TouchableOpacity style={styles.touchable}
                                        onPress = {() => this.props.navigation.navigate('Content', {asma: item.asma, keterangan: item.keterangan})}
                                    >
                                        <Card style={{borderRadius: 10, marginBottom: 10}}>
                                            <CardItem style={{borderRadius: 10}}>
                                                <Left>
                                                    <Text style={styles.nomor}>{item.nomor}</Text>
                                                    <Body>
                                                        <Text numberOfLines={2} style={styles.nama}>{item.nama} | {item.arti} {item.asma}</Text>
                                                        <Text numberOfLines={1} style={styles.type}>{item.type}</Text>
                                                        <Text style={styles.type}>{item.ayat} Ayat</Text>
                                                    </Body>
                                                </Left>
                                            </CardItem>
                                        </Card>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                      keyExtractor = {(item, index) => index.toString()}
                    />
                </SafeAreaView>
           </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 20,
        marginTop: 10,
        backgroundColor: '#F6F6F6',
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
    },
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
    },
    scrollView: {
        paddingHorizontal: 20,
        paddingTop: 10
    },
    content: {
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    touchable: {
        borderRadius: 10
    },
    nomor: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingHorizontal: 5
    },
    nama: {
        fontSize: 17,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    type: {
        fontSize: 14,
    },
    ayat: {
        fontSize: 11,
        flex: 1,
    }
})
