import * as React from 'react';
import { createDrawerNavigator,drawerIcon } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CustomDrawerContent from '../utils/CustomDrawer';
import Notifications from '../screens/Notification';
import Help from '../screens/Help';
import Issue from '../screens/Issue';
import About from '../screens/About'

import DelTabs from './DelTab';
import HomeTabs from './HomeTabs';
import ProfileNavigation from './ProfileNavigation';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator 
        drawerContentOptions={{           // not working
          activeTintColor: '#e91e63',
          activeBackgroundColor:'#e91e63'  
        }}
       drawerStyle={{
          backgroundColor: '#fff',
          width: 240,
        }}
       drawerPosition = 'left'
       drawerType='back' 
       initialRouteName="home" 
       drawerContent={props => <CustomDrawerContent {...props} /> } 
       >
          <Drawer.Screen name="Profile" component={ProfileNavigation} />
          <Drawer.Screen name="home" component={HomeTabs} />  
          <Drawer.Screen name="Notifications" component={Notifications} />
          <Drawer.Screen name="Delivery" component={DelTabs} />
          <Drawer.Screen name="Help" component={Help} />
          <Drawer.Screen name="Issue" component={Issue} />
          <Drawer.Screen name="Settings" component={About} />
    </Drawer.Navigator>
  );
}
