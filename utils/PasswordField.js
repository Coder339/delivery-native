import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons as Icon,Ionicons } from '@expo/vector-icons';

export default function PasswordField({passError,password,setpassError,setpassword}) {
    const [iconName,seticonName] = useState('eye-off')
    const [secureEntry,setsecureEntry] = useState(true)

    const passwordHandler = (text) => {
        setpassword(text)
    }
     
    const passwordValidator = () => {
        if (password === ''){
            setpassError(' < Password field can not be empty >')
        }
        else{
            setpassError('')
        }
    }
    const IconHandler = () =>{
        if (secureEntry){
            seticonName('eye')
        }else{
            seticonName('eye-off')
        }

        setsecureEntry(!secureEntry)
    }
    return (
        <View>
            <View style={{flexDirection:'row',marginTop:0}}>
                <Text style={{marginLeft:1}}>password</Text>
                <Text style={{color:'red',marginLeft:20}}>{passError}</Text>
            </View>
            <View 
                style={{borderBottomWidth:0.4,
                        borderColor: 'dodgerblue',
                        width:260,
                        marginTop:25,
                        flexDirection:'row',
                        justifyContent:'space-between'}}
                >
                <TextInput 
                    secureTextEntry={secureEntry}
                    placeholder='  Enter Your Password...'
                    onChangeText={()=>passwordHandler()}
                    value={password}
                    onBlur={passwordValidator}
                />
                <TouchableOpacity 
                    onPress={()=>IconHandler()}>
                    <Icon 
                      name={iconName} size={20}
                    />
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({})
