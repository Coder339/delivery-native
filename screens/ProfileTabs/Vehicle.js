// import React,{useContext} from 'react';
// import { View, Text, Button } from 'react-native';


// export default function Vehicle({ navigation }) {

//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Vehicle Screen</Text>
//       </View>
//     );
//   }

import React, {useState} from 'react';
import { 
    View,
    TextInput,
    StyleSheet, 
    Button,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Alert} from 'react-native';

import { CheckBox } from 'react-native-elements'
import axios from 'axios';
import Colors from '../../constants/colors'; 


const Vehicle=({navigation})=>{

    const [vehiclename, setVehiclename]          = useState('')
    const [vehiclenameError,setVehiclenameError] = useState('')

    const [vehicletype, setVehicletype]          = useState('')
    const [vehicletypeError,setVehicletypeError] = useState('')

    const [vehicleNo, setVehicleNo]  = useState('')
    const [vehicleNoError,setVehicleNoError] = useState('')

    const [isverified, setIsverified]  = useState(false)
    const [isverifiedError,setisverifiedError] = useState('')

    
    const vehiclenameHandler = (text) => {
        setVehiclename(text)
    }
    
    const vehiclenameValidator = () => {
        if (vehiclename === ''){
          setVehiclenameError(' < field can not be empty >')
        }
        else{
          setVehiclenameError('')
        }
    }

    const vehicletypeHandler = (text) => {
      setVehicletype(text)
    }
    
    const vehicletypeValidator = () => {
        if (vehicletype === ''){
          setVehicletypeError(' < field can not be empty >')
        }
        else{
          setVehicletypeError('')
        }
    }

    const vehicleNoHandler = (text) => {
      setVehicleNo(text)
    }
    
    const vehicleNoValidator = () => {
        if (vehicleNo === ''){
          setVehicleNoError(' < field can not be empty >')
        }
        else{
          setVehicleNoError('')
        }
    }
    
    const verifiedHandler = (text) => {
      setIsverified(!isverified)
    }
    
    
    const accountHandler = () => {
        if (isverified){
            Alert.alert('Successfully Submitted','You are good to go',
            [{ text: 'OKAY',style: 'destructive',onPress: navigation.navigate('User Account Info')}])
            return
            
        }
        else {
            Alert.alert('Not verified','terms and policies is not chekced',
            [{ text: 'okay',style: 'destructive',onPress: resetHandler()}])
            return
        }
    }

    const resetHandler = () => {
        setVehiclename('')
        setVehiclenameError('')
        setVehicletype('')
        setVehicletypeError('')
        setVehicleNo('')
        setVehicleNoError('')
        setIsverified('')

    }
    // const submit = () => {
    //     console.log('post')
    //     console.log(username)
    //     console.log(email)
    //     console.log(password1)
    //     console.log(password2)

    //     return axios.post('http://shop121.herokuapp.com/auth/register/',{

    //         username: username,
    //         email: email,
    //         password: password1,
    //         confirm_password: password2

    //     }).then(res => res.data)
        
    // }
    

    return (
        <ScrollView style={{}}>
                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:Colors.bluegray}}>
                    <View style={styles.icon}>
                        <View style={styles.iconline}></View>
                        <Image source={require('../../src/images/vehicle2.png')} style={styles.image}/>
                        <View style={styles.iconline}></View>
                        <Image source={require('../../src/images/vehicleuser.png')} style={styles.image}/>
                        <View style={styles.iconline}></View>
                        <Image source={require('../../src/images/vehicle1.png')} style={styles.image}/>
                        <View style={styles.iconline}></View>
                    </View>
                    <View style={styles.container}>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.text}>Vehicle</Text>
                                <Text style={{color:'red',marginLeft:78}}>{vehiclenameError}</Text>
                            </View>
                            <TextInput 
                                style={styles.input} 
                                placeholder='  Enter your vehicle name'
                                onChangeText={vehiclenameHandler}
                                value={vehiclename}
                                onBlur={()=>{vehiclenameValidator()}}
                                />
                        </View>
                        
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.text}>Type</Text>
                                <Text style={{color:'red',marginLeft:93}}>{vehicletypeError}</Text>
                            </View>
                            <TextInput 
                                style={styles.input} 
                                placeholder='  Enter your vehicle Type'
                                onChangeText={vehicletypeHandler}
                                value={vehicletype}
                                onBlur={()=>{vehicletypeValidator()}}
                                />
                        </View>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.text}>Vehicle No</Text>
                                <Text style={{color:'red',marginLeft:60}}>{vehicleNoError}</Text>
                            </View>
                            <TextInput 
                                style={styles.input} 
                                placeholder='  Enter your vehicle Number'
                                onChangeText={vehicleNoHandler}
                                value={vehicleNo}
                                onBlur={()=>{vehicleNoValidator()}}
                                />
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                          <CheckBox
                            center
                            title='verified'
                            // iconRight
                            // iconType='material'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            uncheckedColor='red'
                            checkedColor='green'
                            checked={isverified}
                            onPress={()=>verifiedHandler()}
                          />
                          <TouchableOpacity>
                            <Text style={{color:'#fff'}}>Terms and Policies </Text>
                            <View style={{borderColor:'red',borderWidth:1,width:100}}></View>
                          </TouchableOpacity>
                        </View>
                        
                        <TouchableOpacity 
                           style={styles.button_1}
                           onPress={()=>accountHandler()}
                           >
                           <Text style={{color:'#fff'}}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button_2}>
      
                    </View>
                  </View>
        </ScrollView>
    )
  
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
        justifyContent:'center',
        alignItems: 'flex-start',
    },
    text: {
      marginLeft:12,
      color:'#fff'
    },
    input: {
        borderColor: '#fff',
        // borderWidth: 1,
        width:260,
        borderBottomWidth:0.4,
        height:37,
        margin: 10,
        // backgroundColor: '#fff',
        borderRadius: 5,
    },
    button_1: {
        backgroundColor:'#5EA3A7',
        borderRadius: 2,
        borderWidth:0.1,
        padding:10,
        width:200,
        alignItems:'center',
        margin:20,
        shadowColor:'#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity:0.26,
        shadowRadius:2,
        elevation:5,
    },
    button_2: {
        flex:0.5,
        flexDirection:'row',
        width:200,
        justifyContent:'center',
        // borderRadius:,
        marginVertical:55,  
    },
    image: {
      width:40,
      height:40
    },
    icon: {
      flex:0.5,
      marginVertical:40,
      flexDirection:"row",
      alignItems:'center'
    },
    iconline:{
      // padding:5,
      marginHorizontal:8,
      borderBottomWidth:1,
      width:60,
      borderColor:'#fff'
    }
})

export default Vehicle;