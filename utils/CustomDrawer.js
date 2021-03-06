import * as React from 'react';
import { Icon,View,StyleSheet } from 'react-native'
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
  } from 'react-native-paper';
import { Animated } from 'react-native-reanimated';

export default function CustomDrawerContent(props) {

  
    return (
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
          <DrawerItem
              icon={({ color, size }) => (
                  <Ionicons 
                  name='md-person' 
                  size={size} 
                  color={color='#030817'} 
                  />
              )}
              label="Profile"
              onPress={() => props.navigation.navigate('Profile')}
            />
            <DrawerItem
              icon={({ color, size }) => (
                    <MaterialCommunityIcons
                    name="home-outline"
                    color={color='#030817'} 
                    size={size}
                    />
              )}
              label="Home"
              onPress={() => props.navigation.navigate('home')}
            />
            
          <Drawer.Section title="Actions">
            <DrawerItem
              icon={({ color, size }) => (
                    <MaterialCommunityIcons
                    name="help-circle"
                    color={color='#127FDF'}
                    size={size}
                    />
              )}
              label="Help"
              
              onPress={() => props.navigation.navigate('Help')}
            />
          </Drawer.Section>
          <DrawerItem
              icon={({ color, size }) => (
                    <MaterialCommunityIcons
                    name="bookmark-outline"
                    color={color='#030817'}
                    size={size}
                    />
              )}
              label="About App"
              onPress={() => props.navigation.navigate('Settings')}
            />
      </DrawerContentScrollView>
    );
  }

  const styles = StyleSheet.create({
    drawerSection: {
      marginTop: 15,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  })