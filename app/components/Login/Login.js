import React, { Component , PropTypes} from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,

} from 'react-native';

import TabView from '../Tabs/TabView';

export default class Login extends Component {


  constructor(props) {
    
    super(props)
    
    this.state = {
    
    TextInputName: '',
    TextInputPhoneNumber: ''
    
    }
    
    }
    
     static propTypes = {
       navigation: PropTypes.object,
     }

    Submit = () =>{
       
      const { TextInputName } = this.state;
      const { TextInputPhoneNumber } = this.state;
      
      fetch('http://35.154.199.42/submit_user_info.php', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      
      name: TextInputName,
      
      phone_number: TextInputPhoneNumber
      
      })
      
      }).then((response) => response.json())
      .then((responseJson) => {
      // Showing response message coming from server after inserting records.
      
      Alert.alert(responseJson);
      if (responseJson == 'Thanks for Joining Us !!') {
         
            this.props.navigation.navigate('TabView');
      }
      
      }).catch((error) => {
      console.error(error);
      });  
    }




   render() {


    return (
      

      <KeyboardAvoidingView style={styles.container} behavior='position'>
       <Image source={require('./img/cln.jpg')}  style={styles.Imagebaner}>
      </Image>
      <Image source={require('./img/Shuddham.png')}  style={styles.backgroundImage}>
      </Image>

      <View style={styles.content}>
      <View style={styles.inputcontainer}>

      <TextInput secureTextEntry={false}
      underlineColorAndroid='transparent'
      style={styles.input}
      placeholder='User_Name'
      onChangeText={TextInputName => this.setState({ TextInputName })} >
    </TextInput>
      <TextInput secureTextEntry={false}
        underlineColorAndroid='transparent'
        style={styles.input}
        placeholder='User_Contact'
        onChangeText={TextInputPhoneNumber => this.setState({ TextInputPhoneNumber })}
        maxLength={10} //setting limit of input
        minLength={10} //setting limit of input
        keyboardType='numeric'
        >
      </TextInput>
      <TouchableOpacity onPress={this.Submit} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>JOIN NOW</Text>
      </TouchableOpacity>
    </View>
      </View>
  
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor:'white',

  },
backgroundImage:{
  marginTop:'10%',
  paddingBottom:10,
  resizeMode: 'cover',
  alignSelf:'center',
  height: responsiveHeight(20), // 50% of screen height 
  width: responsiveWidth(60), // 50% of screen width 

 // width :'70%',
  //height:'30%',
  justifyContent:'center',
},
content:{
 
  alignItems: 'center',
  margin:'2%',
},
Imagebaner:{
  height: responsiveHeight(30), // 50% of screen height 
  width: responsiveWidth(100), // 50% of screen width 
  marginTop:'2%',
  resizeMode: 'cover',
  alignSelf:'center',
 // width :'100%',
  //height:180,
  justifyContent:'center',
},
inputcontainer:{
  
  margin:'3%',
  marginTop:'5%',
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
  alignSelf:'center',
  width:'100%',
  margin:10,
  padding:8,
  backgroundColor:'blue',
  borderWidth:1,
  borderColor:'#fff',
  backgroundColor:'#1f1f60',
},
buttonText:{
  fontSize:14,
  fontWeight:'bold',
  textAlign:'center',
  color:'white',
},
    });

AppRegistry.registerComponent('Login', () => Login);
