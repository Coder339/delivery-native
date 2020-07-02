import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native'

import PickNavigation from './PickNavigation';
import DropNavigation from './DropNavigation';
import MapNavigation from './MapNavigation';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
    return (
          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Map') {
              iconName = focused
              ? 'md-pin'
              : 'md-pin';
            } else if (route.name === 'Orders') {
              iconName = focused
              ? 'md-arrow-dropup'
              : 'md-arrow-dropup';
            } else if (route.name === 'Deliveries') {
              iconName = focused
              ? 'md-arrow-dropdown'
              : 'md-arrow-dropdown';
            }
      return <Ionicons name={iconName} size={size=30} color={color} />;
              },
            })}
            tabBarOptions={{
              keyboardHidesTabBar: true,
              style: {
                position: 'absolute',
              },
            activeTintColor: '#1C72BD',
            inactiveTintColor: 'gray',
            }}
          >
          <Tab.Screen name="Map" component={MapNavigation} />
          <Tab.Screen name="Orders" component={PickNavigation} />
          <Tab.Screen name="Deliveries" component={DropNavigation} />
        </Tab.Navigator>
    );
  }
