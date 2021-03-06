import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Login from '../screens/Login';
import Register from '../screens/Signup';
import Welcome from '../screens/Welcome';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Welcome"
      component={Welcome}
      options={{ title: "W E L C O M E" }}
    />
    <AuthStack.Screen
      name="SignIn"
      component={Login}
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="Create Account"
      component={Register}
      options={{ title: "Create Account" }}
    />
  </AuthStack.Navigator>
);

export default AuthStackScreen;