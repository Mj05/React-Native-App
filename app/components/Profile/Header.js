import React, { Component } from 'react';
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


export default class Header extends Component {


   render() {


    return (
                <View style={styles.container}>
               
                <Image style={styles.headerbackground} source={require('./img/ProfileBack.jpg')} >
                <View style={styles.header}>
                <View style={styles.profilepicwrap}>
               
                <Image style={styles.profilepic} source={require('./img/Profileicon.png')} />
                </View>
                <Text style={styles.name}>Mukesh Jangid</Text>
                <Text style={styles.pos}>Pratap Nagar,Bhilwara</Text>
                </View>
                </Image>
               
                </View>

    );
  }
}

const styles = StyleSheet.create({
 headerbackground:{
   flex:2,
   width : null,
   alignSelf:'stretch',
 },
 container:{
   flex:1,
   width : null,
   alignSelf:'stretch',
 },
 header:{
   flex:1,
   alignItems: 'center',
   justifyContent:'center',
   paddingBottom:10,
   backgroundColor:'rgba(0,0,0,0.5)',
 },
 profilepicwrap:{
   marginTop:10,
   width:100,
   height:100,
   padding:1,
   borderRadius:90,
   borderColor:'#2980b9',
   borderWidth:1,
 },
 profilepic:{
   flex:1,
   width:null,
   alignSelf:'stretch',
   borderRadius:90,
   borderColor:'#fff',
   borderWidth:1,
 },
 name:{
   marginTop:5,
   fontSize:15,
   color:'#fff',
   alignItems:'center',
   alignSelf:'center',
   justifyContent:'center',
   fontWeight:'bold',
 },
 pos:{
   alignItems:'center',
   fontSize:11.5,
   color:'#fff',
   fontStyle:'italic',

 }


    });

AppRegistry.registerComponent('Header', () => Header);
