import React, { Component } from 'react';
import { View , ScrollView , TouchableOpacity,Text ,AppRegistry, Image ,Action , StyleSheet , KeyboardAvoidingView } from 'react-native';
import {Card,CardImage,CardContent,CardAction} from 'react-native-card-view';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default class ProfileCards extends Component {
       render() {
          return (
              <View style={styles.container}>
                  <ScrollView style={styles.scrollStyle}>
                    <Card>
                      <View style={styles.cardStyle}>
                      <CardContent>
                      <View style={[styles.profilepicwrap,styles.icon]}>
                      <TouchableOpacity style={styles.button} onPress={this.handleProfilePress}> 
                      <Image style={styles.profilepic} source={require('./images/icon.png')} /> 
                      </TouchableOpacity>
                      </View>
                        <Text style={styles.title}>Heena Parwani</Text>
                        <Text style={styles.smallTitle}>Bhopalganj Bhilwara, Rajasthan</Text>
                        <Image style={styles.image}
                               source={require('./images/swachh1.jpg')} />
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
                        <Text style={styles.title}>Surbhi Vyas</Text>
                        <Text style={styles.smallTitle}>Bhopalganj Bhilwara, Rajasthan</Text>
                        <Image style={styles.image}
                               source={require('./images/swachh3.jpg')} />
                      </CardContent>
                     </View>
                    </Card>
                  </ScrollView>
                  <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                    Delete Account
                    </Text>
                    <Image style={styles.deleteimage}
                               source={require('./images/delete.png')} />
                  </TouchableOpacity>
                </View>
          );
        }
    }const styles = StyleSheet.create({
        container: {
          
          width: responsiveWidth(100), // 50% of screen width 
            flex: 1,
        },
        scrollStyle: {
     
          width: responsiveWidth(100), // 50% of screen width 
           // height: 30,
           // width: 400,
            paddingLeft:0,
        },
        profilepicwrap:{
          marginTop:0,
          width:100,
          height:100,
          padding:0,
          borderRadius:90,
          borderColor:'red',
          borderWidth:0,
        },
        profilepic:{
          flex:1,
          width:null,
          alignSelf:'stretch',
          borderRadius:100,
          borderColor:'#fff',
          borderWidth:1,
          paddingBottom:20,
        },
        button:{
          flex:1,
          width:null,
          alignSelf:'stretch',
          borderRadius:90,
          borderColor:'#fff',
          borderWidth:1,
        },
        buttonContainer: {
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: '#2980b9',
            width: 415,
            marginTop: 0,
            marginLeft: 0,
            height:40,
        },
           buttonText: {
            fontSize: 15,
            marginTop:8,
            fontWeight: '700',
            color: '#FFFFFF',
            justifyContent:'center',
            alignSelf:'center',
           },
        title: {
          fontSize: 11,
          marginLeft: 55,
          backgroundColor: 'transparent' ,
          color: 'black',
          marginTop: -60,
        },
        image: {
          //  height: 200,
           // width: 320,
            
           height: responsiveHeight(70), // 50% of screen height 
           width: responsiveWidth(100), // 50% of screen width 
          marginTop: 15,
            marginBottom: 30,
            marginLeft: -12
          },
          icon: {
            height: 45,
            width: 45,
            marginLeft:0,
            marginBottom:25,
          
          },
        smallTitle: {
            fontSize: 9,
            backgroundColor: 'transparent' ,
            color: 'black',
            marginLeft: 55,
          },
        cardStyle: {
          height: responsiveHeight(50), // 50% of screen height 
         width: responsiveWidth(100), // 50% of screen width 
           // height: 230,
            //width: 330,
            marginTop: 0,
            marginRight:0,
            backgroundColor: '#F5F5F5'
        },  
        deleteimage:{
            marginTop:10,
            marginLeft:7,
            height: 20,
            width: 20,
        }
      });
      AppRegistry.registerComponent('ProfileCards', () => ProfileCards);