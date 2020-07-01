import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import Colors from '../../constants/colors';
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';

export default function Map({navigation}) {
    return (
        <View style={{flex:1}}>
            <TouchableOpacity style={{
                flex:.16,
                backgroundColor:Colors.bluegray,
                flexDirection:'row',
                alignItems:'center',
                borderWidth:0,
                height:70,
                width:'100%',
                }}
                onPress={()=> navigation.toggleDrawer('Delivery')}>
                <Image
                    source={require('../../src/images/elon.jpg')} 
                    style={{width:50,
                            height:50,
                            marginLeft:15,
                            borderRadius:40,
                            backgroundColor:'#fff'}}
                />
                <View style={{alignItems:'flex-start',marginTop:10}}>
                    
                    <View style={{marginRight:170}}>
                        <Text 
                            style={{color:'#fff',fontSize:12}}>VIKAS SINGH KASHYAP
                        </Text>
                    </View>
                    <View style={{alignItems:'flex-end'}}>
                        <View style={{borderBottomWidth:1,width:250,borderColor:'#fff'}}>
                        </View>
                        <View style={{}}>
                            <Text 
                                style={{color:'#fff'}}>ID - Unregistered
                            </Text>
                            <Text 
                                style={{color:'#fff'}}>vehicle - Tesla
                            </Text>
                            
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{
                  flex:1,
                  borderWidth:0}}>
                  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
