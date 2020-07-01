import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import Info from '../screens/ProfileTabs/Info';
import Account from '../screens/ProfileTabs/Account';
import Payment from '../screens/ProfileTabs/Payment';
import Vehicle from '../screens/ProfileTabs/Vehicle';

const Stack = createStackNavigator();

export default function ProfileNavigation() {
    return (
        <Stack.Navigator initialRouteName="User Account Info">
            <Stack.Screen name="User Account Info" component={Info} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Vehicle" component={Vehicle} />
            <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator> 
    )
}