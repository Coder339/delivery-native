// import React from 'react'
// import { StyleSheet, Text, View,Button } from 'react-native'

// export default function Dropoff({navigation}) {
//     return (
//         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//             <Text>Dropoff</Text>
//             <Button
//                 title="Go to About Page"
//                 onPress={() => navigation.navigate('About')}
//             />
//         </View>
//     )
// }

// const styles = StyleSheet.create({})

import React,{useState} from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Image,
    ScrollView
     } from 'react-native'
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';

// import MyDrawer from '../../components/DrawerNavigation';

export default function Dropoff({navigation}) {

    const [merchent, setMerchent] = useState('DELIVERED')
    const [nowcolor ,setnowColor] = useState('#1C72BD')
    const [schcolor,setschColor] = useState('black')
    const [now, setNow]  = useState('DELIVERED')
    const [scheduled,setScheduled] = useState('CANCELLED')

    
    const NowHandler = () => {
        setMerchent('DELIVERED')
        setnowColor('#1C72BD')
        setschColor('black')
    }
    const ScheduledHandler = () => {
        setMerchent('CANCELLED')
        setschColor('#1C72BD')
        setnowColor('black')
    }
    
    return (
        <ScrollView>

            <View style={{flex:1}}>
                    <View style={{
                        flex:1,
                        flexDirection:'row',
                        }}>
                            <View style={{
                                justifyContent:'center',
                                alignItems:'center',
                                //   borderWidth:0.3,
                                // backgroundColor:'#fff',
                                height:40,
                                width: '50%',
                                }}>
                                <TouchableOpacity onPress={()=>{NowHandler()}}>
                                    <Text style={{
                                        fontSize:22,
                                        color:nowcolor,
                                            }}>
                                        Delivered
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                justifyContent:'center',
                                alignItems:'center',
                                // backgroundColor:'#fff',
                                //   borderWidth:0.3,
                                height:40,
                                width: '50%',
                                }}>
                                <TouchableOpacity onPress={()=>{ScheduledHandler()}}>
                                    <Text style={{
                                        fontSize:22,
                                        color:schcolor,
                                            }}>
                                        Cancelled
                                    </Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={{
                        // borderWidth:0.3,
                        flex:1,
                        flexDirection:'row',
                        justifyContent:'space-evenly',
                        
                        }}>
                        <View style={{
                                    borderColor:nowcolor,
                                    borderBottomWidth:3,
                                    height:10,
                                    width: 100,
                                    marginRight:20
                                    }}>
                        </View>
                        <View style={{
                                    borderColor:schcolor,
                                    borderBottomWidth:3,
                                    height:10,
                                    width: 100,
                                    marginStart:20
                                    }}>
                        </View>
                    </View>

                    <View style={{
                                flex:1,
                                justifyContent:'center',
                                alignItems:'center',
                                borderWidth:0.3,
                                height:70,
                                marginTop:20,
                                }}>
                        <Text>{merchent}</Text>
                    </View>
                    
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})

