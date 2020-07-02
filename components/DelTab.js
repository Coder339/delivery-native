import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import DelStackNavigation from './DelStack';

import About from '../screens/About';
import Alert from '../screens/Alert';

const Tab = createBottomTabNavigator();

export default function DelTabs() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
         let iconName;
         if (route.name === 'Deliveries') {
            iconName = focused
            ? 'md-jet'
            : 'md-jet';
          } else if (route.name === 'Alerts') {
            iconName = focused
            ? 'md-notifications'
            : 'md-notifications';
          }
    return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            keyboardHidesTabBar: true,
              style: {
                position: 'absolute',
              },
          activeTintColor: 'skyblue',
          inactiveTintColor: 'gray',
          }}
        >

        <Tab.Screen name="Deliveries" component={About} />
        {/* <Tab.Screen name="Deliveries" component={DelStackNavigation} /> */}
        <Tab.Screen name="Alerts" component={Alert} />
      </Tab.Navigator>
    );
  }
