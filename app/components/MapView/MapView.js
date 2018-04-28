import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry,StatusBar } from 'react-native';
import MapView from 'react-native-maps';

export default class Maps extends Component {

      constructor() {
          super();
       }
    render() {

       const initialRegion = {
                latitude: 26.8113520,
                longitude: 75.8899120,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
       }
         const initialRegion1 = {
                latitude: 28.0229350,
                longitude: 73.3119160,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
       }
         const initialRegion2 = {
                latitude: 27.1991220,
                longitude: 73.7409240,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
       }
            const initialRegion3 = {
                latitude: 26.9854870,
                longitude: 75.8513450,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
       }
            const initialRegion4 = {
                latitude: 26.4498950,
                longitude: 74.6399160,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
       }

        return (            
              <View style={styles.container}>
              <MapView style={styles.map}
                initialRegion={initialRegion} >

          <MapView.Marker
           coordinate={initialRegion}
           pinColor="green"
           title="Sector 36, Sisyawas, NRI Road, Jagatpura, Jaipur"
           />
            <MapView.Marker
           coordinate={initialRegion1}
           pinColor="green"
           title="Bikaner, Rajasthan, India"
           />
            <MapView.Marker
           coordinate={initialRegion2}
           pinColor="green"
           title="Nagaur, Rajasthan 341001"
           />
              <MapView.Marker
           coordinate={initialRegion3}
           pinColor="red"
           title="Bhopal Ganj, Bhilwara, Rajasthan "
           />
              <MapView.Marker
           coordinate={initialRegion4}
           pinColor="red"
           title="Ajmer, Rajasthan, India"
           />
       


        </MapView>
        </View>
            
        );
    }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

AppRegistry.registerComponent('Maps', () => Maps);
