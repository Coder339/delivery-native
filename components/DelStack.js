import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import HomeScreen from '../screens/Home'

const DelStack = createStackNavigator();

export default function DelStackNavigation() {
    return (
        <DelStack.Navigator initialRouteName="Home">
            <DelStack.Screen name="delivery" component={About} />
            <DelStack.Screen name="Home" component={HomeScreen} />
        </DelStack.Navigator> 
    )
}

const styles = StyleSheet.create({})

