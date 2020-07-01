import React,{useContext} from 'react';
import { View, Text, Button } from 'react-native';
import {AuthContext} from "../utils/Context";

export default function Help({ navigation }) {
  const { signOut } = useContext(AuthContext);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Help Screen</Text>
      </View>
    );
  }