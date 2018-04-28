import Tabs from './Tabs';
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image,
  FlatList,
  Alert,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  AppRegistry,
  ActivityIndicator,
  ListView,
  ScrollView
} from 'react-native';
import { Card, CardImage, CardTitle, CardContent, CardAction } from 'react-native-card-view';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';



export default class ReportView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  GetItem(hero_name) {

    Alert.alert(hero_name);

  }




  componentDidMount() {

    return fetch('http://192.168.43.120/HeroesList.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function () {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }






  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 10 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (

      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <View style={styles.cardStyle}>
          <Card>


            <Tabs>
              {/* First tab */}
            
              <View title="GREEN ZONE" onPress={this.componentDidMount} style={styles.contents}>
              
              
                              <FlatList
                                data={[
                                
                                  { key: 'Kolkata, West Bengal' },
                                  { key: 'Chittorgarh, Rajasthan' },  
                                  
                                  { key: 'bangalore, Karnataka' },
                                  { key: 'Hyderabad, Telangana' },
                                  { key: 'Chennai, Tamil Nadu' },
                                  { key: 'Kanpur, Uttar Pradesh' },
                                ]}
                                renderItem={({ item }) => <View style={styles.container2}>
                                  <Image source={require('./Img/Location1.png')} style={styles.image} />
              
                                  <Text style={styles.item}>{item.key}</Text>
              
                                </View>}
                              />
                             
              
                            </View>
              {/* Second tab */}
              <View title="RED ZONE" onPress={this.componentDidMount} style={styles.contents}>


                <FlatList
                  data={[
                    { key: 'Visakhapatnam, Andhra Pradesh' },
                    { key: 'Ahmedabad, Gujarat' },
                    { key: 'Surat, Gujarat' },
                    { key: 'Jodhpur, Rajasthan' },
                    { key: 'Bhilwara, Rajasthan' },
                    { key: 'jaipur, Rajasthan' },
                    { key: 'Mumbai, Maharashtra' },
                    { key: 'Udaipur, Rajasthan' },
                    { key: 'Kolkata, West Bengal' },
                    { key: 'Chittorgarh, Rajasthan' },
                    { key: 'bangalore, Karnataka' },
                    { key: 'Hyderabad, Telangana' },
                    { key: 'Chennai, Tamil Nadu' },
                    { key: 'Kanpur, Uttar Pradesh' },
                  ]}
                  renderItem={({ item }) => <View style={styles.container2}>
                    <Image source={require('./Img/locations.png')} style={styles.image} />

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
    // Take up all screen
    backgroundColor: 'white',         // Background color
    paddingTop: 0
  },
  // Tab content container

  item: {
    padding: 10,
    fontSize:responsiveFontSize(2),
    height: 44,
  },
  
  contents: {
    // Take up all available space
    width: responsiveWidth(100),
    backgroundColor: '#FFFFFF',         // Darker background for content area
    fontSize:12
  },
  // Content header
  header: {
    margin: 10,                         // Add margin
    color: '#000000',                   // White color
    //fontFamily: 'Avenir',               // Change font family
    fontSize:responsiveFontSize(1),                     // Bigger font size
  },
  // Content text
  text: {
    marginHorizontal: 20,               // Add horizontal margin
    color: '#000000', // Semi-transparent text
    textAlign: 'center',                // Center
    //fontFamily: 'Avenir',
    fontSize:responsiveFontSize(2),
  },
  cardStyle: {
    flexDirection: 'row',
    height: 500,
    width: 360,
    backgroundColor: 'white',
  },
  container2: {
    flexDirection: 'row',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginTop: 3,
    marginBottom: 4,
    paddingBottom: 10,
  },
  image: {
    width: 30,
    height: 35,
    marginTop: 5,
    marginLeft: 25,
  },
  rowViewContainer: {
    fontSize:responsiveFontSize(1),
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 30,
  },
  score: {
    fontSize: 15,
    marginRight: 5,
  },
  rank: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
AppRegistry.registerComponent('ReportView', () => ReportView);