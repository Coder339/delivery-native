import React from 'react'
import { 
    View, 
    Text, 
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight } from 'react-native'
import Colors from '../constants/colors';

export default function Welcome({navigation}) {
    // const {navigation} = props.navigation;
    
    return (
        <View style={{flex:1,alignItems:'center',backgroundColor: Colors.fav2}}>
            
            <View 
                style={{flex:0.5,
                        marginBottom:10,
                        marginVertical:40,
                        justifyContent:'space-around',
                        alignItems:'center',}}
                >
                <Image 
                source={require('../src/images/delivery-man.png')} 
                style={{width:70,height:70}}/>
                <Text 
                style={{color:'#fff',fontSize:22,marginTop:30}}>24 x 7 delivery service
                </Text>
            </View>
            {/* <View style={{flex:2.2,marginBottom:5}}>
                <Image source={require('../src/images/movie.jpg')} style={{width:400,height:220}}/>
            </View> */}
            <View 
                style={{flex:1.5,
                        flexDirection:'row',
                        marginBottom:20,
                        alignItems:'center'}}
                >
                <TouchableOpacity 
                        style={styles.fullWidthButton}
                        activeOpacity={.9}
                        onPress={()=>navigation.navigate('SignIn')}>
                        <View style={{flexDirection:"row",justifyContent:'space-between',padding:10}}>
                             <Image 
                              source={require('../src/images/send.png')} 
                              style={{width:30,height:30}}
                              />
                              <Text 
                              style={{color:'#fff',fontSize:22}}>Let's Deliver
                              </Text>
                        </View>
                        
                        
                </TouchableOpacity>
            </View>
            <View style={{flex:.3,
                          borderTopWidth:1,
                          width:250,
                          borderColor:'#fff',
                          marginBottom:60}}></View>
             
        </View>
    )
}

const styles=StyleSheet.create({
    button:{
        flex:1,
        width:200,
        justifyContent:'space-evenly',
        marginVertical:10,
    },
    fullWidthButton: {
        // backgroundColor: 'blue',
        height:42,
        width:400,
        opacity:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:200
      },
})