import React,{ useState,useEffect,useContext } from 'react';
import { Image,Button, View, Text,StyleSheet,ScrollView,ActivityIndicator } from 'react-native';
import axios from 'axios';
import {AuthContext} from "../utils/Context";


function DetailsScreen({navigation }) {
  
  const [movies, setmovies] = useState([])
  const [loading,  setloading] = useState(true)
  const { signOut } = useContext(AuthContext);


  useEffect(() => {
    setTimeout(() => {
      setloading(false);
  }, 1000);

    getMovieApi();
  },[])

  function getMovieApi(){
    console.log('test')
    console.log('test1')
    axios.get('https://vatch.herokuapp.com/movies/movie/')
    .then((result) => {setmovies(result.data);
      console.log(movies)
      console.log('test2')
    }).catch((error)=>{console.log(error)})
    
  }
  if (loading) {
    return <View style={styles.container}>
              <ActivityIndicator size="large" color="#0000ff" />
           </View>;
  }
  else {
    return (
      <ScrollView>
          <View style={styles.screen}>
            <View>
              {movies.map((todo,index) => 
                           <View>
                             <Text key={index}>{todo.name}</Text>
                             
                             {/* <Image source={require(todo.profile_image)}/> */}
                            </View>)}
            </View>
            <View style={{flex:2,marginVertical:40}}>
                <Text>Details Screen</Text>
            </View>
            <View style={{flex:1,justifyContent:'space-evenly',marginBottom:20}}>
                <View>
                  <Button
                    title="Refresh..."
                    onPress={() => {navigation.push('Detail',)}}
                  />
                </View>
                <View>
                  <Button
                    title="signout"
                    onPress={() => signOut()} 
                  />
                </View>
            </View>
            
          </View>
      </ScrollView>
    );
  }
}
const styles=StyleSheet.create({
    screen:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#fff'
    },
    container:{
      flex:1,
      justifyContent:'center'
    }
})
export default DetailsScreen;






