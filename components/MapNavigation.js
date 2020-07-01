import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';


import Map from '../screens/HomeTabNav/Map'
import How from '../screens/HomeTabNav/How';

const Stack = createStackNavigator();

export default function MapNavigation() {
    return (
        <Stack.Navigator initialRouteName="Track">
            <Stack.Screen name="Track" component={Map} />
            <Stack.Screen name="How" component={How} />
        </Stack.Navigator> 
    )
}




const styles = StyleSheet.create({})
