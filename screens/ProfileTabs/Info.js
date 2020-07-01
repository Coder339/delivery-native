import React,{useContext,useState} from 'react';
import { View, Text, Button, Image,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import {AuthContext} from "../../utils/Context";

export default function Info({ navigation }) {
    
  const { signOut } = useContext(AuthContext);
  const [name,setName] = useState('VIKAS SINGH KASHYAP')
  const [vehicle,setVehicle] = useState('8055')

    return (
      <View style={Style.screen}>
        <View style={{ 
              flex: 1.2,
              flexDirection:'row',
              // justifyContent:'space-between',
              borderBottomWidth:0.3,
              width:'100%',
              height:80,
              alignItems:'center'}}>
            <Image
                source={require('../../src/images/elon.jpg')} 
                style={{width:70,
                        height:70,
                        marginLeft:30,
                        borderRadius:40}}
            />
            <View style={{alignItems:'flex-start',marginTop:10}}>
                    
                    <View style={{marginLeft:5}}>
                        <Text 
                            style={{fontSize:12}}>{name}
                        </Text>
                    </View>
                    <View style={{alignItems:'flex-end'}}>
                        <View style={{borderBottomWidth:1,width:250,}}>
                        </View>
                        <View style={{}}>
                            <Text 
                                style={{}}>Vehicle - Tesla S Modal
                            </Text>
                            <Text 
                                style={{}}>vehicle No - {vehicle}
                            </Text>
                            
                        </View>
                    </View>
                </View>
            
        </View>
        <View style={{ flex: 5,alignItems:'center',backgroundColor:'#030817'}}> 
              <TouchableOpacity style={Style.info}
                    onPress={() => {navigation.navigate('Account',)}}>
                  <Ionicons 
                    name='md-person' 
                    size={20}
                    color='#fff'
                  />
                  <Text style={{color:'#fff'}}>Profile Info</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.info}
                    onPress={() => {navigation.navigate('Vehicle',)}}>
                    <Ionicons 
                      name='md-car' 
                      size={20}
                      color='#fff'
                    />
                    <Text style={{color:'#fff'}}>Vehicle Info</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.info}
                    onPress={() => {navigation.navigate('Payment',)}}>
                    <Ionicons 
                      name='md-cash' 
                      size={20}
                      color='#fff'
                    />
                    <Text style={{color:'#fff'}}>Payment Info</Text>
              </TouchableOpacity>
              
        </View>
        <View style={Style.bottom}
              onTouchStart={() => signOut()}>
           <Text style={{color:'#fff',fontSize:17}}>Sign Out</Text>
        </View>
      </View>
    );
  }


const Style = StyleSheet.create({
  screen:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  info:{
    flexDirection:'row',
    backgroundColor:'#030817',
    height:60,
    width:400,
    justifyContent:'space-around',
    alignItems:'center',
    borderColor:'#fff',
    borderBottomWidth:0.3,
  },
  bottom:{
    flex:1,
    backgroundColor:'gray',
    borderColor:'#fff',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderTopWidth:0.3,
    height:70,
    // marginTop:20,
    }
})