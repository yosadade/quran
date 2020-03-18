import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Content from './Content';
import Header from './Header';

const Stack = createStackNavigator();

class AppNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" headerMode="none">
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Content" component={Content}/>
                    <Stack.Screen name="Header" component={Header}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default AppNavigator