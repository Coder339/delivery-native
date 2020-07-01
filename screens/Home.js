import React from 'react'
import { View, Text,Button } from 'react-native'
// import Navigation from '../components/Navigation';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Droplist</Text>
        <Button
          title="Go to About Page"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    );
  }

export default HomeScreen;