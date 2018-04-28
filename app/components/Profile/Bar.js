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
} from 'react-native';


export default class Bar extends Component {



  render() {


    return (
          <View style={styles.bar}>
         <View style={[styles.barItem,styles.barSeprator]}>
         <Text style={styles.barTop}>All Posts</Text> 
         <Text style={styles.barBottom}>100</Text> 
         </View>
         <View style={styles.barItem}>
         <Text style={styles.barTop}>Most Rated Posts</Text> 
         <Text style={styles.barBottom}>13</Text> 
         </View>
         </View>
    );
  }
}

const styles = StyleSheet.create({
    bar:{
        marginTop:0,
        borderTopColor:'#fff',
        borderTopWidth:3,
        backgroundColor:'rgba(0,0,255,3)',
        flexDirection:'row'
    },
    barSeprator:{     
        borderRightWidth:4,
        borderColor:'#fff'
    },
    barTop:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
        fontStyle:'italic',
    },
    barBottom:{
        color:'#fff',
        fontSize:14,
        fontWeight:'bold',
    },
    barItem:{
        flex:1,
        padding:12,
        alignItems:'center',
    }

    });

AppRegistry.registerComponent('Bar', () => Bar);
