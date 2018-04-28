/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';


export default class Photogrid extends Component {



  render() {


    return (
        <ScrollView>
          <View style={styles.photogrid}>
          <View style={styles.photoWrap}>
              <Image style={styles.photo} source={require('./img/bck.jpg')} />
             
          </View>
          <View style={styles.photoWrap}>
              <Image style={styles.photo} source={require('./img/bck.jpg')} />
         
          </View>
          <View style={styles.photoWrap}>
              <Image style={styles.photo} source={require('./img/bck.jpg')} />
        
          </View>
          <View style={styles.photoWrap}>
              <Image style={styles.photo} source={require('./img/background.jpg')} />
              
          </View>
          <View style={styles.photoWrap}>
              <Image style={styles.photo} source={require('./img/background.jpg')} />
             
          </View>
          <View style={styles.photoWrap}>
              <Image style={styles.photo} source={require('./img/bck.jpg')} />
              
          </View>

          </View>
          </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    photogrid:{
       flexDirection:'row',
       flexWrap:'wrap',
    },
    photoWrap:{
       margin:2,
       height:150,
       width:(Dimensions.get('window').width/2)-4,
    },
    photo:{
     flex:1,
     width:null,
     alignSelf:'stretch'
    },
    });

AppRegistry.registerComponent('Photogrid', () => Photogrid);
