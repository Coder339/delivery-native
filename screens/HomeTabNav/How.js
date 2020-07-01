import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'


export default function How({navigation}) {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>How to use this app</Text>
            <Button title='open'
                    onPress={()=> navigation.toggleDrawer('Delivery')}/>
        </View>
    )
}

const styles = StyleSheet.create({})
