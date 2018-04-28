import React, { Component } from 'react';
import { View , ScrollView ,Button, Text , Image ,Action ,Icon, TouchableOpacity,StyleSheet,AppRegistry , KeyboardAvoidingView } from 'react-native';
import {Card,CardImage,CardContent,CardAction} from 'react-native-card-view';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import Slider from 'react-native-slider';
import FAB from 'react-native-fab';
export default class HomeCards extends Component {
    constructor(props) {
        super(props)
        this.state = { Rating1: 0 }
        this.state = { Rating2: 0 }
       } 
              
    render() {
        return (
          <View>
          <ScrollView>
           <Card>
               <View style={styles.cardStyle}>
                  <CardContent>
                  <View style={[styles.profilepicwrap,styles.icon]}>
                  <TouchableOpacity style={styles.button} onPress={this.handleProfilePress}> 
                  <Image style={styles.profilepic} source={require('./images/icon.png')} /> 
                  </TouchableOpacity>
                  </View>
                  <Text style={styles.title}>Surbhi Vyas</Text>
                  <Text style={styles.smallTitle}>Bhopalganj Bhilwara, Rajasthan</Text>
                  <Image style={styles.image}
                        source={require('./images/swachh1.jpg')} />
                  <Image style={styles.goggle}
                        source={require('./images/goggle.png')} />                  
                  <Text style={styles.note}>Sanitation Rating</Text>
                  <Text style={styles.sliderValue}>Rating: {this.state.Rating1}</Text>
                  <Slider
                  style={styles.slider}
                  minimumValue={0}
                   maximumValue={10}
                  step={1}
                  value={this.state.Rating1}
                  onValueChange={(Rating1) => this.setState({Rating1})} />
                  </CardContent>
                 </View>
           </Card>
           <Card>
               <View style={styles.cardStyle}>
                  <CardContent>
                  <View style={[styles.profilepicwrap,styles.icon]}>
                  <TouchableOpacity style={styles.button} onPress={this.handleProfilePress}> 
                  <Image style={styles.profilepic} source={require('./images/icon.png')} /> 
                  </TouchableOpacity>
                  </View>
                  <Text style={styles.title}>Heena Parwani</Text>
                  <Text style={styles.smallTitle}>Pathik Nagar Bhilwara, Rajasthan</Text>
                  <Image style={styles.image}
                        source={require('./images/swachh2.jpg')} />
                  <Image style={styles.goggle}
                        source={require('./images/goggle.png')} />                  
                  <Text style={styles.note}>Sanitation Rating</Text>
                  <Text style={styles.sliderValue}>Rating: {this.state.Rating2}</Text>
                  <Slider
                  style={styles.slider}
                  minimumValue={0}
                   maximumValue={10}
                  step={1}
                  value={this.state.Rating2}
                  onValueChange={(Rating2) => this.setState({Rating2})} />
                  </CardContent>
                 </View>
           </Card>
           </ScrollView>
        
           </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    title: {
      fontSize: 17,
      marginLeft: 60,
      backgroundColor: 'transparent' ,
      color: 'black',
      marginTop: -60,
    },
    profilepicwrap:{
      marginTop:0,
      width:50,
      height:50,
      padding:1,
      borderRadius:90,
      borderColor:'red',
      borderWidth:0,
    },
    profilepic:{
      flex:1,
      width:null,
      alignSelf:'stretch',
      borderRadius:90,
      borderColor:'#fff',
      borderWidth:1,
    },
    button:{
      flex:1,
      width:null,
      alignSelf:'stretch',
      borderRadius:90,
      borderColor:'#fff',
      borderWidth:1,
    },
    image: {
        height: 300,
        width: 440,
        marginTop: 14,
        marginBottom: 50,
        marginLeft: -12
      },
      goggle: {
        height: 50,
        width: 80,
        marginLeft: 1,
        marginTop: -45,
      },
      icon: {
        height: 50,
        width: 50,
        marginBottom:15,
      
      },
      note: {
        height: 60,
        width: 200,
        fontSize: responsiveFontSize(2),
        backgroundColor: 'transparent' ,
        color: 'black',
        marginLeft: 90,
        marginTop: -30
      },
    smallTitle: {
      fontSize: responsiveFontSize(2),
        backgroundColor: 'transparent' ,
        color: 'black',
        marginLeft: 60
      },
      slider: {
       
        height: 40,
        width: 90,
        marginLeft: 250,
        marginTop: -10,
      },
      sliderValue: {
        marginLeft: 270,
        marginTop: -70,
      },
    cardStyle: {
      height: responsiveHeight(70), // 50% of screen height 
      width: responsiveWidth(100), // 50% of screen width 
     
       // height: 450,
       // width: 370,
        marginTop: 0,
        backgroundColor: '#F5F5F5'
    }
  });
  
  AppRegistry.registerComponent('HomeCards', () => HomeCards);