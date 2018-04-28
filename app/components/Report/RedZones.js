import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ActivityIndicator, ListView, ScrollView, Alert } from 'react-native';


//const image1 = require('../components/m.jpg')
//const image2 = require('../assets/Image2.png')

class RedZones extends Component {


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

    return fetch('http://192.168.43.120/RedZonesList.php')
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
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    handleRankProfilePress = () => {
      console.log('Rank Profile Pressed');
    }


    return (
      <View style={styles.container}>

        <ListView

          dataSource={this.state.dataSource}

          renderSeparator={this.ListViewItemSeparator}

          renderRow={(rowData) => <View><ScrollView><View style={styles.rank}>

            <Image source={require('./Img/locations.png')} style={styles.image} />

            <Text style={styles.rowViewContainer}
              onPress={this.GetItem.bind(this, rowData.zone_name)} >{rowData.zone_name}</Text>
          </View>
          </ScrollView>
          </View>}



        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'white',
  },
  rankprofile: {

    width: 100,
    alignSelf: 'center',
    borderRadius: 90,
    borderColor: '#fff',
    borderWidth: 1,
  },
  list: {
    marginTop: 15,
  },
  item: {
    marginLeft: 5,
    padding: 10,
    fontSize: 18,
    height: 40,
    backgroundColor: 'white',
  },
  image: {
    marginLeft: 15,
    width: 40,
    height: 45,
    backgroundColor: 'white',
  },
  heros: {

    width: 400,
    height: 70,
    marginLeft: 68,
    backgroundColor: 'white',
  },
  herro: {

    marginBottom: 5,
    width: 100,
    height: 45,
    marginLeft: 140,
    backgroundColor: 'white',
  },
  text2: {
    fontSize: 11,
    marginLeft: 140,
    marginTop: 15,
    backgroundColor: 'white',
  },
  container2: {
    flexDirection: 'row',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginTop: 3,
    marginLeft: 10,
    marginBottom: 4,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  rowViewContainer: {
    fontSize: 15,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 25
  },
  score: {
    fontSize: 15,
    marginRight: 5
  },
  rank: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
});



export default RedZones;

