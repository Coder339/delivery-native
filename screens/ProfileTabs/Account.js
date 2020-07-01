// import React,{useContext} from 'react';
// import { View, Text, Button } from 'react-native';


// export default function Account({ navigation }) {
  
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Account Screen</Text>
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


const Account=({navigation})=>{

    const [firstname, setfirstname]            = useState('')
    const [firstnameError,setfirstnameError]   = useState('')

    const [lastname, setlastname]              = useState('')
    const [lastnameError,setlastnameError]     = useState('')

    const [address, setaddress]                = useState('')
    const [addressError,setaddressError]       = useState('')

    const [city,setcity]                       = useState('')
    const [cityError,setcityError]             = useState('')

    const [state,setstate]                     = useState('')
    const [stateError,setstateError]           = useState('')

    const [country,setcountry]                 = useState('')
    const [countryError,setcountryError]       = useState('')

    const [zipcode,setzipcode]                 = useState('')
    const [zipcodeError,setzipcodeError]       = useState('')

    const [contact,setcontact]                 = useState('')
    const [contactError,setcontactError]       = useState('')

    const [isverified, setIsverified]          = useState(false)
    const [isverifiedError,setisverifiedError] = useState('')

    
    const firstnameHandler = (text) => {
        setfirstname(text)
    }
    
    const firstnameValidator = () => {
        if (firstname === ''){
          setfirstnameError(' < field can not be empty >')
        }
        else{
          setfirstnameError('')
        }
    }

    const lastnameHandler = (text) => {
      setlastname(text)
    }
    
    const lastnameValidator = () => {
        if (lastname === ''){
          setlastnameError(' < field can not be empty >')
        }
        else{
          setlastnameError('')
        }
    }

    const addressHandler = (text) => {
      setaddress(text)
    }
    
    const addressValidator = () => {
        if (address === ''){
          setaddressError(' < field can not be empty >')
        }
        else{
          setaddressError('')
        }
    }

    const cityHandler = (text) => {
      setcity(text)
    }
    
    const cityValidator = () => {
        if (city === ''){
          setcityError(' < field can not be empty >')
        }
        else{
          setcityError('')
        }
    }

    const stateHandler = (text) => {
      setstate(text)
    }
    
    const stateValidator = () => {
        if (state === ''){
          setstateError(' < field can not be empty >')
        }
        else{
          setstateError('')
        }
    }

    const countryHandler = (text) => {
      setaddress(text)
    }
    
    const countryValidator = () => {
        if (country === ''){
          setcountryError(' < field can not be empty >')
        }
        else{
          setcountryError('')
        }
    }

    const zipcodeHandler = (text) => {
      setzipcode(text)
    }
    
    const zipcodeValidator = () => {
        if (zipcode === ''){
          setzipcodeError(' < field can not be empty >')
        }
        else{
          setzipcodeError('')
        }
    }

    const contactHandler = (text) => {
      setcontact(text)
    }
    
    const contactValidator = () => {
        if (contact === ''){
          setcontactError(' < field can not be empty >')
        }
        else{
          setcontactError('')
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
            Alert.alert('Not checked','please confirm the Info first',
            [{ text: 'okay',style: 'destructive',onPress: resetHandler()}])
            return
        }
    }

    const resetHandler = () => {
        setfirstname('')
        setfirstnameError('')
        setlastname('')
        setlastnameError('')
        setaddress('')
        setaddressError('')
        setcity('')
        setcityError('')
        setstate('')
        setstateError('')
        setcountry('')
        setcountryError('')
        setcountry('')
        setcountryError('')
        setcontact('')
        setcontactError('')
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
                <View style={styles.screen}>
                    <View style={{flex:0.5,marginVertical:20}}>
                        <Image source={require('../../src/images/vehicleuser.png')} style={{width:70,height:70}}/>
                    </View>
                    <View style={styles.container}>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.text}>First Name</Text>
                                <Text style={{color:'red',marginLeft:78}}>{firstnameError}</Text>
                            </View>
                            <TextInput 
                                style={styles.input} 
                                placeholder='  Enter your frist name...'
                                onChangeText={firstnameHandler}
                                value={firstname}
                                onBlur={()=>{firstnameValidator()}}
                                />
                        </View>
                        
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.text}>Last Name</Text>
                                <Text style={{color:'red',marginLeft:93}}>{lastnameError}</Text>
                            </View>
                            <TextInput 
                                style={styles.input} 
                                placeholder='  Enter your last name...'
                                onChangeText={lastnameHandler}
                                value={lastname}
                                onBlur={()=>{lastnameValidator()}}
                                />
                        </View>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.text}>Address</Text>
                                <Text style={{color:'red',marginLeft:60}}>{addressError}</Text>
                            </View>
                            <TextInput 
                                style={styles.input} 
                                placeholder='  Enter your address...'
                                onChangeText={addressHandler}
                                value={address}
                                onBlur={()=>{addressValidator()}}
                                />
                        </View>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.text}>City</Text>
                                <Text style={{color:'red',marginLeft:60}}>{cityError}</Text>
                            </View>
                            <TextInput 
                                style={styles.input} 
                                placeholder='  Enter your city...'
                                onChangeText={cityHandler}
                                value={city}
                                onBlur={()=>{cityValidator()}}
                                />
                        </View>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.text}>State</Text>
                                <Text style={{color:'red',marginLeft:60}}>{stateError}</Text>
                            </View>
                            <TextInput 
                                style={styles.input} 
                                placeholder='  Enter your state...'
                                onChangeText={stateHandler}
                                value={state}
                                onBlur={()=>{stateValidator()}}
                                />
                        </View>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.text}>Country</Text>
                                <Text style={{color:'red',marginLeft:60}}>{countryError}</Text>
                            </View>
                            <TextInput 
                                style={styles.input} 
                                placeholder='  Enter your country...'
                                onChangeText={countryHandler}
                                value={country}
                                onBlur={()=>{countryValidator()}}
                                />
                        </View>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.text}>Zipcode</Text>
                                <Text style={{color:'red',marginLeft:60}}>{zipcodeError}</Text>
                            </View>
                            <TextInput 
                                style={styles.input} 
                                placeholder='  Enter your ...'
                                onChangeText={zipcodeHandler}
                                value={zipcode}
                                onBlur={()=>{zipcodeValidator()}}
                                />
                        </View>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.text}>Contact</Text>
                                <Text style={{color:'red',marginLeft:60}}>{contactError}</Text>
                            </View>
                            <TextInput 
                                style={styles.input} 
                                placeholder='  Enter your contact...'
                                onChangeText={contactHandler}
                                value={contact}
                                onBlur={()=>{contactValidator()}}
                                />
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                          <CheckBox
                            center
                            title='Given the info is correct'
                            // iconRight
                            // iconType='material'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            uncheckedColor='red'
                            checkedColor='green'
                            checked={isverified}
                            onPress={()=>verifiedHandler()}
                          />
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
    screen:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:Colors.bluegray
    },
    container: {
        flex: 1,
        marginVertical: 10,
        justifyContent:'center',
        alignItems: 'flex-start',
    },
    text: {
      marginLeft:12,
      color:'#fff'
    },
    input: {
        borderColor: '#fff',
        color:"#fff",
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
        
    }
})

export default Account;
