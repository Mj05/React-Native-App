import React, { Component , PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,

} from 'react-native';

import TabView from '../Tabs/TabView';

export default class Login extends Component {

     static propTypes = {
       navigation: PropTypes.object,
     }

    login = () =>{
       
      this.props.navigation.navigate('TabView');  
    }




   render() {


    return (
      

      <KeyboardAvoidingView behavior='position'>
      <Image source={require('./img/LoginBack.jpg')}  style={styles.backgroundImage}>

      <View style={styles.content}>
      <Text style={styles.logo}></Text>
      <View style={styles.inputcontainer}>

      <TextInput secureTextEntry={false}
      underlineColorAndroid='transparent'
      style={styles.input}
      placeholder='User_Name'>
    </TextInput>
      <TextInput secureTextEntry={false}
        underlineColorAndroid='transparent'
        style={styles.input}
        keyboardType="numeric"
        placeholder='User_Contact'>
      </TextInput>
      
    <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>JOIN NOW </Text>
    </TouchableOpacity>

    </View>
      </View>
  
      </Image>

      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex : 2,


  },
backgroundImage:{

  resizeMode: 'cover',
  alignSelf:'stretch',
  width : null,
  justifyContent:'center',
},
content:{
  alignItems: 'center',
  margin:1,
},
logo:{
  marginTop:50,
  color : 'white',
  fontSize:40,
  fontStyle:'italic',
  fontWeight: 'bold',
  textShadowColor:'#252525',
  textShadowOffset:{width:2,height:2},
  textShadowRadius:15,
  marginBottom:30,
},
inputcontainer:{
  margin:10,
  marginTop:60,
  padding:20,
  paddingBottom:10,
  alignSelf:'stretch',
  borderWidth:1,
  borderColor:'#fff',
  backgroundColor:'rgba(2,2,0.2,0.2)',
},
input:{
fontSize:16,
height:40,
padding:10,
marginBottom:10,
backgroundColor:'rgba(255,255,255,1)',
},
buttonContainer:{
  alignSelf:'stretch',
  margin:10,
  padding:10,
  backgroundColor:'blue',
  borderWidth:1,
  borderColor:'#fff',
  backgroundColor:'rgba(255,255,255,0.6)',
},
buttonText:{
  fontSize:16,
  fontWeight:'bold',
  textAlign:'center',
  color:'black',
}
    });

AppRegistry.registerComponent('Login', () => Login);
