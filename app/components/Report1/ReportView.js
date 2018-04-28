import Tabs from './Tabs';
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, 
  FlatList, 
  Alert,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  AppRegistry
  } from 'react-native';
  import {Card,CardImage,CardTitle,CardContent,CardAction} from 'react-native-card-view';
  import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
  

export default class ReportView extends Component {
    
 
  render() {
    return (

      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      
      <View style={styles.cardStyle}>
                   <Card>

        
        <Tabs>
          {/* First tab */}
          <View title="GREEN ZONES" style={styles.content}>

            <FlatList
          data={[
            {key: 'Bhilwara, Rajasthan'},
            {key: 'jaipur, Rajasthan'},
            {key: 'Mumbai, Maharashtra'},
            {key: 'Udaipur, Rajasthan'},
            {key: 'Kolkata, West Bengal'},
            {key: 'Chittorgarh, Rajasthan'},
            {key: 'bangalore, Karnataka'},
            {key: 'Hyderabad, Telangana'},
            {key: 'Chennai, Tamil Nadu'},
            {key: 'Kanpur, Uttar Pradesh'},
            {key: 'Visakhapatnam, Andhra Pradesh'},
            {key: 'Ahmedabad, Gujarat'},
            {key: 'Surat, Gujarat'},
            {key: 'Jodhpur, Rajasthan'},
           
          ]}
          onPress={this.InsertList}
          renderItem={({item}) => <View style={styles.container2}>

          <Image source ={require('./Img/location.png')} style={styles.image}/>

          <Text style={styles.item}>{item.key}</Text>
          

          </View>}
        />




          </View>
          
          {/* Second tab */}
          <View title="RED ZONES" style={styles.contents}>
       

            <FlatList
          data={[
            {key: 'Visakhapatnam, Andhra Pradesh'},
            {key: 'Ahmedabad, Gujarat'},
            {key: 'Surat, Gujarat'},
            {key: 'Jodhpur, Rajasthan'},
            {key: 'Bhilwara, Rajasthan'},
            {key: 'jaipur, Rajasthan'},
            {key: 'Mumbai, Maharashtra'},
            {key: 'Udaipur, Rajasthan'},
            {key: 'Kolkata, West Bengal'},
            {key: 'Chittorgarh, Rajasthan'},
            {key: 'bangalore, Karnataka'},
            {key: 'Hyderabad, Telangana'},
            {key: 'Chennai, Tamil Nadu'},
            {key: 'Kanpur, Uttar Pradesh'},
          ]}
          renderItem={({item}) => <View style={styles.container2}>
          <Image source ={require('./Img/locations.png')} style={styles.image}/>

          <Text style={styles.item}>{item.key}</Text>
          
          </View>}
        />

       </View>
          

        </Tabs>
        </Card>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    // App container
    container: {
      
      width: responsiveWidth(100), // 50% of screen width 
      flex: 1,                            // Take up all screen
      backgroundColor: 'white',         // Background color
      paddingTop:0
    },
    // Tab content container
    
     item: {
       padding: 10,
       fontSize: 18,
       height: 44,
     },
    content: {
                                 // Take up all available space
      backgroundColor: '#FFFFFF', 
      width: 370        
    },
    contents: {
                                  // Take up all available space
      
      backgroundColor: '#FFFFFF',         // Darker background for content area
      width: 370   
    },
    // Content header
    header: {
      margin: 10,                         // Add margin
      color: '#000000',                   // White color
      //fontFamily: 'Avenir',               // Change font family
      fontSize: 26,                       // Bigger font size
    },
    // Content text
    text: {
      marginHorizontal: 20,               // Add horizontal margin
      color: '#000000', // Semi-transparent text
      textAlign: 'center',                // Center
     // fontFamily: 'Avenir',
      fontSize: 18,
    },
    cardStyle: {
        flexDirection: 'row',
        height: responsiveHeight(100), // 50% of screen height 
        width: responsiveWidth(100), // 50% of screen width 
      //  height: 660,
       // width: 360,
        backgroundColor: 'white',
        marginLeft:0,
        marginTop:0
    },
    container2:{
      flexDirection: 'row',
       borderBottomColor: 'lightgrey',
       borderBottomWidth: 1, 
       marginTop:3,
       marginBottom: 4,
       paddingBottom: 10,
    },
    image:{
      width: 30,
      height :35, 
      marginTop: 5,
      marginLeft: 15
      
    },
  
  });
  AppRegistry.registerComponent('ReportView', () => ReportView);

  