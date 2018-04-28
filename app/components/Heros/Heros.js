import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ActivityIndicator, ListView, ScrollView } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


//const image1 = require('../components/m.jpg')
//const image2 = require('../assets/Image2.png')

class Heros extends Component {


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

    return fetch('http://35.154.199.42/HeroesList.php')
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
        <Image source={require('./Hero1.jpg')} style={styles.heros} />

        <ListView

          dataSource={this.state.dataSource}

          renderSeparator={this.ListViewItemSeparator}

          renderRow={(rowData) => <View><ScrollView><View style={styles.rank}>

            <Image source={require('./profile.png')} style={styles.image} />

            <Text style={styles.rowViewContainer}
              onPress={this.GetItem.bind(this, rowData.hero_name)} >{rowData.hero_name}</Text><Text style={styles.score}>{rowData.hero_score}..Pts.</Text>
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
    width: responsiveWidth(100), // 50% of screen width 
  },
  item: {
    marginLeft: 5,
    padding: 10,
    fontSize: 18,
    height: 40,
    backgroundColor: 'white',
  },
  image: {
    marginLeft: 5,
    width: 50,
    height: 50,
    backgroundColor: 'white',
  },
  heros: {

    height: responsiveHeight(11), // 50% of screen height 
    width: responsiveWidth(70), // 50% of screen width 
   
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
    width: responsiveWidth(100), // 50% of screen width 
    
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
  },
  score: {
    fontSize: 15,
    marginRight: 5
  },
  rank: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});



export default Heros;

