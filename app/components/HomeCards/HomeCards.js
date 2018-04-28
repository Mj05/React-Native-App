import React, { Component } from 'react';
import { View, ScrollView, Text, Image, Action, Alert, Icon, TouchableOpacity, StyleSheet, AppRegistry, KeyboardAvoidingView } from 'react-native';
import { Card, CardImage, CardContent, CardAction } from 'react-native-card-view';
import Slider from 'react-native-slider';
import FAB from 'react-native-fab';

import Stars from 'react-native-stars';
export default class HomeCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stars: 0,

    };
  }

  RankSubmit = (ratingvalue) => {


    // fetch user id from user database 



    // save ratings user-id location in rating table

    fetch('http://35.154.199.42/submit_rating.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        ratings: ratingvalue,
        location: "Bhilwara",
        user_id: 1,

      })

    }).then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
      }).catch((error) => {
        console.error(error);
      });
  }


  render() {
    return (
      <View>
        <ScrollView>
          <Card>
            <View style={styles.cardStyle}>
              <CardContent>
                <View style={[styles.profilepicwrap, styles.icon]}>
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
                <Text style={styles.note}></Text>
                <Text style={styles.sliderValue}> {this.state.Rating1}</Text>
                <View style={styles.slider}>

                  <Stars
                    half={true}
                    rating={2.5}
                    update={(val) => { this.setState({ stars: val }) }}
                    spacing={4}
                    starSize={25}
                    count={5}
                    fullStar={require('./images/starFilled.png')}
                    emptyStar={require('./images/starEmpty.png')}
                    halfStar={require('./images/starHalf.png')} />
                  <View style={[styles.submitwrap, styles.icon, styles.submit]}>
                    <TouchableOpacity style={styles.button} onPress={() => this.RankSubmit(this.state.stars)}>
                      <Image style={styles.profilepic} source={require('./images/check.png')} />
                    </TouchableOpacity>
                  </View>
                </View>
              </CardContent>
            </View>
          </Card>

          <Card>
            <View style={styles.cardStyle}>
              <CardContent>
                <View style={[styles.profilepicwrap, styles.icon]}>
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
                <Text style={styles.note}></Text>
                <Text style={styles.sliderValue}> {this.state.Rating1}</Text>
                <View style={styles.slider}>

                  <Stars
                    half={true}
                    rating={2.5}
                    update={(val) => { this.setState({ stars: val }) }}
                    spacing={4}
                    starSize={25}
                    count={5}
                    fullStar={require('./images/starFilled.png')}
                    emptyStar={require('./images/starEmpty.png')}
                    halfStar={require('./images/starHalf.png')} />
                  <View style={[styles.submitwrap, styles.icon, styles.submit]}>
                    <TouchableOpacity style={styles.button} onPress={() => this.RankSubmit(this.state.stars)}>
                      <Image style={styles.profilepic} source={require('./images/check.png')} />
                    </TouchableOpacity>
                  </View>
                </View>
              </CardContent>
            </View>
          </Card>

          <Card>
            <View style={styles.cardStyle}>
              <CardContent>
                <View style={[styles.profilepicwrap, styles.icon]}>
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
                <Text style={styles.note}></Text>
                <Text style={styles.sliderValue}> {this.state.Rating1}</Text>
                <View style={styles.slider}>

                  <Stars
                    half={true}
                    rating={2.5}
                    update={(val) => { this.setState({ stars: val }) }}
                    spacing={4}
                    starSize={25}
                    count={5}
                    fullStar={require('./images/starFilled.png')}
                    emptyStar={require('./images/starEmpty.png')}
                    halfStar={require('./images/starHalf.png')} />
                  <View style={[styles.submitwrap, styles.icon, styles.submit]}>
                    <TouchableOpacity style={styles.button} onPress={() => this.RankSubmit(this.state.stars)}>
                      <Image style={styles.profilepic} source={require('./images/check.png')} />
                    </TouchableOpacity>
                  </View>
                </View>
              </CardContent>
            </View>
          </Card>

          <Card>
            <View style={styles.cardStyle}>
              <CardContent>
                <View style={[styles.profilepicwrap, styles.icon]}>
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
                <Text style={styles.note}></Text>
                <Text style={styles.sliderValue}> {this.state.Rating1}</Text>
                <View style={styles.slider}>

                  <Stars
                    half={true}
                    rating={2.5}
                    update={(val) => { this.setState({ stars: val }) }}
                    spacing={4}
                    starSize={25}
                    count={5}
                    fullStar={require('./images/starFilled.png')}
                    emptyStar={require('./images/starEmpty.png')}
                    halfStar={require('./images/starHalf.png')} />
                  <View style={[styles.submitwrap, styles.icon, styles.submit]}>
                    <TouchableOpacity style={styles.button} onPress={() => this.RankSubmit(this.state.stars)}>
                      <Image style={styles.profilepic} source={require('./images/check.png')} />
                    </TouchableOpacity>
                  </View>
                </View>
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
    backgroundColor: 'transparent',
    color: 'black',
    marginTop: -60,
  },
  profilepicwrap: {
    marginTop: 0,
    width: 50,
    height: 50,
    padding: 1,
    borderRadius: 90,
    borderColor: 'red',
    borderWidth: 0,
  }, 
   submitwrap: {
    marginTop: 0,
    width: 50,
    height: 50,
    padding: 1,
    borderRadius: 90,
    borderColor: 'red',
    borderWidth: 0,
  },
  profilepic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 90,
    borderColor: '#fff',
    borderWidth: 1,
  },
  button: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 90,
    borderColor: '#fff',
    borderWidth: 1,
  },
  image: {
    height: 300,
    width: 440,
    marginTop: 14,
    marginBottom: 50,
    marginLeft: -12
  },
  goggle: {
    height: 55,
    width: 85,
    marginLeft: 4,
    marginTop: -45,
  },
  icon: {
    height: 50,
    width: 50,
    marginBottom: 15,

  },
  note: {
    height: 60,
    width: 200,
    fontSize: 20,
    backgroundColor: 'transparent',
    color: 'black',
    marginLeft: 110,
    marginTop: -35
  },
  submit: {
    height: 40,
    width: 40,
    backgroundColor: 'transparent',
    marginLeft: 125,
    marginTop: -35
  },
  smallTitle: {
    fontSize: 12,
    backgroundColor: 'transparent',
    color: 'black',
    marginLeft: 60
  },
  slider: {
    height: 40,
    width: 70,
    marginLeft: 150,
    marginTop: -10,
  },
  sliderValue: {
    marginLeft: 270,
    marginTop: -70,
  },
  cardStyle: {
    height: 450,
    width: 370,
    marginTop: 10,
    backgroundColor: '#F5F5F5'
  }
});

AppRegistry.registerComponent('HomeCards', () => HomeCards);