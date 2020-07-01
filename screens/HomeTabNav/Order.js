import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';

import Card from '../../utils/Card';
import Colors from '../../constants/colors';

export default function Order({navigation}) {
    const [address,setAddress] = useState('street No-224,ward No-4,zirkpur,amabala-chandigarh highway')
    const [shopkeeper,setShopkeeper] = useState('Jeff Bezzo')
    const [shopkeeperId,setShopkeeperId] = useState('JB897456')
    const [merchant,setMerchant] = useState('Starbucks')
    const [merchantId,setMerchantId] = useState('SB54321')

    const [custaddress,setcustAddress] = useState('street No-224,ward No-4,zirkpur,amabala-chandigarh highway')
    const [customer,setCustomer] = useState('Leonardo Dicapario')
    const [custId,setcustId] = useState('LD12345')

    return (
        <View style={{
            flex:1,
            alignItems:'center',
            backgroundColor:Colors.bluegray}}>
            <View>
                <Card style={styles.summaryContainer}>
                    <Text style={{
                        fontStyle:'italic',
                        fontWeight:'bold',
                        borderBottomWidth:1,
                        width:54,}}>Pick From</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Ionicons name='md-pin' 
                        size={24}
                        style={{color:'red',marginTop:3}}/>
                        <Text style={{marginLeft:3}}>{address}</Text>
                    </View>
                    <View style={{
                        borderBottomWidth:0.5,
                        width:250,}}>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center'}}>
                        <Ionicons name='md-home' 
                        size={24}
                        style={{
                            color:'green',
                            marginTop:3}}/>
                        <Text style={{marginLeft:3}}>{merchant} |</Text>
                        <Text style={{marginLeft:3}}>Id - {shopkeeperId}</Text>
                    </View>
                    <View style={{
                        borderBottomWidth:0.5,
                        width:250,}}>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center'}}>
                        <Ionicons name='md-person' 
                        size={24}
                        style={{color:'blue',marginTop:3}}/>
                        <Text style={{marginLeft:3}}>{shopkeeper} |</Text>
                        <Text style={{marginLeft:3}}>Id - {custId}</Text>
                    </View>
                    <View style={{
                        borderBottomWidth:0.5,
                        width:250,}}>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        marginTop:20}}>
                       <View style={{
                           flexDirection:'row',
                           alignItems:'center',}}>
                           <Ionicons name='md-call' size={30} style={{color:'#3BBD35',marginTop:3}}/>
                           <Text style={{
                               marginLeft:10,
                               fontWeight:'bold'}}>9417652356</Text>
                       </View>
                       <View style={{
                           borderWidth:1,
                           width:40,
                           height:40,
                           alignItems:'center',
                           borderRadius:30,
                           borderColor:'#3BBD35'}}>
                           <Ionicons name='md-send' size={30} style={{color:'#3BBD35',marginTop:3,marginLeft:3}}/>
                       </View>
                    </View>
                    
                </Card>
            </View>
            <View>
            <Card style={styles.summaryContainer}>
                    <Text style={{
                        fontStyle:'italic',
                        fontWeight:'bold',
                        borderBottomWidth:1,
                        width:44,}}>Drop To</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Ionicons name='md-pin' 
                        size={24}
                        style={{color:'red',marginTop:3}}/>
                        <Text style={{marginLeft:3}}>{custaddress}</Text>
                    </View>
                    <View style={{
                        borderBottomWidth:0.5,
                        width:250,}}>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center'}}
                        > 
                        <Ionicons name='md-person' 
                        size={24}
                        style={{color:'blue',marginTop:3}}/>
                        <Text style={{marginLeft:3}}>{customer} |</Text>
                        <Text style={{marginLeft:3}}>Id - {custId}</Text>
                    </View>
                    <View style={{
                        borderBottomWidth:0.5,
                        width:250,}}>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        marginTop:20}}>
                       <View style={{
                           flexDirection:'row',
                           alignItems:'center',}}>
                           <Ionicons name='md-call' size={30} style={{color:'#3BBD35',marginTop:3}}/>
                           <Text style={{
                               marginLeft:10,
                               fontWeight:'bold'}}>9988595603</Text>
                       </View>
                       <View style={{
                           borderWidth:1,
                           width:40,
                           height:40,
                           alignItems:'center',
                           borderRadius:30,
                           borderColor:'#3BBD35'}}>
                           <Ionicons name='md-send' size={30} style={{color:'#3BBD35',marginTop:3,marginLeft:3}}/>
                       </View>
                    </View>
                    
                </Card>
            </View>
            <View style={{flex:0.5}}>
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    summaryContainer: {
        width:300,
        height:200,
        marginTop: 10,
    },
})
