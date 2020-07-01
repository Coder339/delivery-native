import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// import HomeScreen from '../screens/Welcome';
import DetailsScreen from '../screens/Detail';
import DelTabs from './DelTab';
import Newdelivery from '../screens/HomeTabNav/Newdelivery'
import Pickup from '../screens/HomeTabNav/Pickup'
import Order from '../screens/HomeTabNav/Order';

const Stack = createStackNavigator();

export default function PickNavigation() {
    return (
        <Stack.Navigator initialRouteName="Pickup">
            <Stack.Screen name="Pickup" component={Pickup} />
            <Stack.Screen name="Detail" component={DetailsScreen} />
            <Stack.Screen name="delivery" component={Newdelivery} />
            <Stack.Screen name="Order" component={Order} />
        </Stack.Navigator> 
    )
}




const styles = StyleSheet.create({})
