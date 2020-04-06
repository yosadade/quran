import React, { PureComponent } from 'react'
import Axios from 'axios'
import { 
    Text, 
    StyleSheet, 
    View, 
    FlatList, 
    TouchableOpacity, 
    SafeAreaView ,
    TextInput
} from 'react-native'
import { 
    Card, 
    CardItem, 
    Left, 
    Body } from 'native-base'

import { 
    ActionStatusBar
} from '../../components/Action/Action'

import SplashScreen from '../Splashscreen/SplashScreen'

class Home extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            dataSeluruhSurah : [],
            searchValue : '',
            newDataSeluruhSurah: [],
            dataIsiSurah: []
        }
    }

    componentDidMount(){
        this.getDataSurah()
        this.getDataIsiSurah()
    }

    getDataSurah = () => {
        Axios.get(`https://api.banghasan.com/quran/format/json/surat`)
        .then(result => {
           this.setState({
               dataSeluruhSurah : result.data.hasil
           }, () => {
            // console.log('new dataSeluruhSurah')
           })
        }).catch (err => console.log(err, 'fetch API gagal !!'))
    }

    getDataIsiSurah = () => {
        Axios.get(`https://api.banghasan.com/quran/format/json/surat`)
        .then(result => {
            // console.log(result.data.ayat.data.ar)
            this.setState({
                dataIsiSurah: result.daya.ayat.data.ar
            }, () => {
                console.log(dataIsiSurah)
            })
        }).catch (err => (err, 'fetch API gagal !!'))
    }

    onHandleInput = (e) => {
        // console.log(e, 'target')
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
        const DATA = this.state.dataSeluruhSurah
        if (DATA.length===0){
          // return  <ActivityIndicator size='large' color='grey' style={{marginTop: 300}}></ActivityIndicator>
          return <SplashScreen />
        }
        return (
            <View style={styles.container}>
                <ActionStatusBar />
                {this.ActionTextInput()}
                {this.ActionFlatlist()}
           </View>
        )
    }

    ActionTextInput = () => {
        return (
            <View style={styles.wrapTextInput}>
                <TextInput 
                placeholder= ' Search Surah ...'
                style={styles.textInput}
                onChangeText={this.onHandleInput}
                />
            </View>
        )
    }

    ActionFlatlist = () => {
        const tampilanSurah = () => { 
            return (
            this.state.newDataSeluruhSurah && this.state.searchValue 
                ? this.state.newDataSeluruhSurah
                : this.state.dataSeluruhSurah
        )}
        return (
            <SafeAreaView style={styles.scrollView}>
                <FlatList 
                    data = {tampilanSurah()}
                    renderItem = {({item, index}) =>{
                        return (
                            <View key={index} dataIsiSurah={this.props.dataIsiSurah}>
                                <TouchableOpacity style={styles.touchable}
                                    onPress = {() => this.props.navigation.navigate('Content', {asma: item.asma, keterangan: item.keterangan, nama: item.nama, teks: item.teks})}
                                >
                                    <Card style={styles.card}>
                                        <CardItem style={styles.cardItem}>
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
                                    {/* <HomeContent /> */}
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    keyExtractor = {(item, index) => index.toString()}
                />
           </SafeAreaView>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
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
        paddingHorizontal: 5,
        color: '#00D2B2'
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
    },
    card: {
        borderRadius: 10, 
        marginBottom: 10
    },
    cardItem: {
        borderRadius: 10
    }
})
