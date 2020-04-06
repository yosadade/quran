import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Homescreen/Home';
import Content from '../screens/Content';
import SplashScreen from '../screens/Splashscreen/SplashScreen'

const Stack = createStackNavigator();

class AppNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" headerMode="none">
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Content" component={Content}/>
                    <Stack.Screen name="SplashScreen" component={SplashScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default AppNavigator