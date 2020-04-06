import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, CardItem, Thumbnail, Left, Body, Content } from 'native-base';

const HomeContent = ({props, navigation}) => {
    const { asma, nama, type, ayat, arti } = props.item
    return (
        <View>
            <TouchableOpacity style={styles.touchable}
                onPress = {() => navigation.push('Content', props)}
            >
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail style={styles.thumbnail}/>
                            <Body>
                                <Text numberOfLines={2} style={styles.nama}>{nama} / {arti}</Text>
                                <Text numberOfLines={1} style={styles.type}>{type}</Text>
                                <Text numberOfLines={1} style={styles.ayat}>{ayat} ayat</Text>
                            </Body>
                        </Left>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        </View>
    )
}

export default HomeContent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    }
})
