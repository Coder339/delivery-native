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
import { SearchBar } from 'react-native-elements';
import Colors from '../../constants/colors';

// import MyDrawer from '../../components/DrawerNavigation';

export default function Pickup({navigation}) {
    const pubArray = ['merchent1',
                      'merchent2',
                      'merchent3',
                      'merchent4',
                      'merchent5',
                      'merchent6',
                      'merchent1',
                      'merchent2',
                      'merchent3',
                      'merchent4',
                      'merchent5',
                      'merchent6']  // just layout,delete after

    const conArray = ['merchent1',
                        'merchent2',
                        'merchent3',
                        'merchent4',
                        'merchent5',
                        'merchent6',]
    const images   =  ['../../src/images/images.jpeg',
                       '../../src/images/elon.jpg',
                       '../../src/images/delivery-man.png'] // just layout,delete after

    const [search, setSearch] = useState('')
    const [nowcolor ,setpubColor] = useState('#1C72BD')
    const [schcolor,setconColor] = useState('black')
    const [published, setPublished]  = useState('published')
    const [confirmed,setConfirmed] = useState('confirmed')

    const updateSearch = (text) => {
        setSearch(text)
    }
    
    const publist = pubArray.map((todo,index) => 
                                <TouchableOpacity style={{
                                    flex:1,
                                    flexDirection:'row',
                                    backgroundColor:'#fff',
                                    alignItems:'center',
                                    borderRadius:1,
                                    borderWidth:1.5,
                                    borderColor:'#1C72BD',
                                    height:70,
                                    padding:10,
                                    width:'100%',
                                    marginTop:20,
                                    }}
                                    onPress={()=>{}}> 
                                
                                    <Image
                                        source={require('../../src/images/shop2.jpg')} 
                                        style={{width:50,
                                                height:50,
                                                marginLeft:15,
                                                borderRadius:40,
                                                backgroundColor:'#fff'}}
                                    />
                                    <View style={{alignItems:'flex-end',marginTop:2,}}>
                                        <View style={{flexDirection:'row'}}>
                                            <Ionicons name='md-time' 
                                                      style={{color:'gray',marginRight:2,marginTop:2}}/>
                                            <Text style={{color:'gray',marginRight:55}}>12 min ago</Text>
                                            <Text 
                                                key={index}
                                                style={{color:Colors.bluegray}}>Shop No - Unregistered
                                            </Text>
                                        </View>
                                        <Text style={{marginLeft:157,color:Colors.bluegray}}
                                            key={index}>{todo}
                                        </Text>
                                        <View style={{borderBottomWidth:1,width:250,}}>
                                        </View>
                                        <View style={{marginRight:170}}>
                                            <Text 
                                                key={index}
                                                style={{color:Colors.bluegray,fontSize:12}}>Distance - K km 
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>)

    const [merchent, setMerchent] = useState(publist)

    const conlist = conArray.map((todo,index) => 
                                <TouchableOpacity style={{
                                    flex:1,
                                    flexDirection:'row',
                                    backgroundColor:Colors.bluegray,
                                    alignItems:'center',
                                    borderWidth:1.5,
                                    height:70,
                                    padding:10,
                                    width:'100%',
                                    marginTop:20,
                                    }}
                                    onPress={()=>{navigation.navigate('Order')}}> 
                                
                                    <Image
                                        source={require('../../src/images/shop2.jpg')} 
                                        style={{width:50,
                                                height:50,
                                                marginLeft:15,
                                                borderRadius:40,
                                                backgroundColor:'#fff'}}
                                    />
                                    <View style={{alignItems:'flex-end',marginTop:2,}}>
                                        <View style={{flexDirection:'row'}}>
                                            <Ionicons name='md-time' 
                                                      style={{color:'gray',marginRight:2,marginTop:2}}/>
                                            <Text style={{color:'gray',marginRight:55}}>12 min ago</Text>
                                            <Text 
                                                key={index}
                                                style={{color:'#fff'}}>Shop No - Unregistered
                                            </Text>
                                        </View>
                                        <Text style={{marginLeft:157,color:'#fff'}}
                                            key={index}>{todo}
                                        </Text>
                                        <View style={{borderBottomWidth:1,width:250,borderColor :'#fff'}}>
                                        </View>
                                        <View style={{marginRight:170}}>
                                            <Text 
                                                key={index}
                                                style={{color:'#fff',fontSize:12}}>Distance - K km 
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>)
    
    const PublishedHandler = () => {
        setMerchent(publist)
        setpubColor('#1C72BD')
        setconColor('black')
    }
    const ConfirmedHandler = () => {
        setMerchent(conlist)
        setconColor('#1C72BD')
        setpubColor('black')
    }

    return (
        <ScrollView>

            <View style={{flex:1}}>
                    <View style={{
                        flex:1,
                        height:48,
                        justifyContent:'space-between',
                        // borderWidth:0.3,
                        flexDirection:'row',
                        marginTop:5}}>
                            <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
                                <View style={{
                                    // borderWidth:0.3,
                                    height:40,
                                    width: 30,
                                    justifyContent:'center',
                                    alignItems:'flex-start',
                                    marginLeft:10
                                    }}>
                                    <Ionicons 
                                        name='md-menu' 
                                        size={30}
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={{
                                    height:30,
                                    // width: 250,
                                    marginTop:7,
                                    justifyContent:'center',
                                    alignItems:'flex-start'
                                    }}>
                                    <SearchBar
                                        inputContainerStyle={{backgroundColor:'white',width:250,height:30}}
                                        containerStyle={{
                                            backgroundColor: 'white',
                                            justifyContent:'center',
                                            
                                        }}
                                        placeholder="Search Here..."
                                        onChangeText={updateSearch}
                                        value={search}
                                    />
                            </View>
                            <View style={{
                                //   borderWidth:0.3,
                                height:40,
                                width:40,
                                justifyContent:'center',
                                alignItems:'center'
                                }}>
                                <TouchableOpacity onPress={() => {navigation.navigate('delivery')}}>   
                                    <Ionicons 
                                        name='md-notifications' 
                                        size={30}
                                    />
                                </TouchableOpacity> 
                            </View>

                    </View>
                    <View style={{
                        flex:1,
                        flexDirection:'row',
                        }}>
                            <TouchableOpacity style={{
                                justifyContent:'center',
                                alignItems:'center',
                                height:40,
                                width: '50%',
                                }}
                                onPress={()=>{PublishedHandler()}}>
                                <Text style={{
                                    fontSize:17,
                                    color:nowcolor,
                                        }}>
                                    Published
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                justifyContent:'center',
                                alignItems:'center',
                                height:40,
                                width: '50%',
                                }}
                                onPress={()=>{ConfirmedHandler()}}>
                                <Text style={{
                                    fontSize:17,
                                    color:schcolor,
                                        }}>
                                    Confirmed
                                </Text>
                            </TouchableOpacity>
                    </View>
                    <View style={{
                        // borderWidth:0.3,
                        flex:1,
                        flexDirection:'row',
                        justifyContent:'space-evenly',
                        
                        }}>
                        <View style={{
                                    borderColor:nowcolor,
                                    borderBottomWidth:2,
                                    height:10,
                                    width: 100,
                                    marginRight:20
                                    }}>
                        </View>
                        <View style={{
                                    borderColor:schcolor,
                                    borderBottomWidth:2,
                                    height:10,
                                    width: 100,
                                    marginStart:20
                                    }}>
                        </View>
                    </View>
                    <View style={{padding:10,}}>
                        {merchent}
                    </View>
                    
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})

