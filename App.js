import 'react-native-gesture-handler';
import React, { useMemo, useState, useEffect } from 'react';
import { 
  Button, 
  View,
  StyleSheet, 
  Text,
  ActivityIndicator } from 'react-native';
  import { 
    Appearance, 
    AppearanceProvider, 
    useColorScheme } from 'react-native-appearance';

import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer,DarkTheme,DefaultTheme } from '@react-navigation/native';

import MyDrawer from './components/DrawerNavigation';
// import AuthStackScreen from './components/AuthStack';
import { AuthContext } from './utils/Context';


import Splash from './screens/Splash'
import Login from './screens/Login';
import Register from './screens/Signup';
import Welcome from './screens/Welcome';

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

const RootStack = createStackNavigator();

const RootStackScreen = ({ userToken,isLoading }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={MyDrawer}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        // initialParams={{ Loading: isLoading }}
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);



export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const colorScheme = useColorScheme()

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: '#DCDCDC',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
    },
  };

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
  
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <View style={styles.container}>
              <ActivityIndicator size="large" color="#0000ff" />
           </View>;
  }
  else {

    return (
      
      
         <AppearanceProvider>
            <AuthContext.Provider value={authContext}>
              <NavigationContainer theme={colorScheme === 'dark'? DarkTheme : MyTheme}>
                <RootStackScreen userToken = {userToken}/>
                {/* <Login isLoading={isLoading}/> */}
              </NavigationContainer>
            </AuthContext.Provider>
          </AppearanceProvider>
  

    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 650,
    // resizeMode: 'contain',

  }
});


