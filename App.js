import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Home from './app/Screens/Home';
export default class App extends React.Component {
  render() {
    return (
    
      
              <View style={styles.container}>
     <StatusBar backgroundColor="lightseagreen" translucent={false} barStyle="dark-content" />
    
            <Home />
              </View>
             
    );
  }
}


const styles = StyleSheet.create({
   container:{
        flex:1,
        marginTop: 25,
      },
});
