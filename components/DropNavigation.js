import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';



import About from '../screens/About';
import Dropoff from '../screens/HomeTabNav/Dropoff'

const Stack = createStackNavigator();

export default function DropNavigation() {
    return (
        <Stack.Navigator initialRouteName="DropList">
            <Stack.Screen name="DropList" component={Dropoff} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator> 
    )
}




const styles = StyleSheet.create({})
