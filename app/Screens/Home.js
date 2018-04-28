import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry,StatusBar,TouchableOpacity ,Button} from 'react-native';
//import TabView from './app/components/Tabs/TabView';
//import Login from '../components/Login/Login';
//import Profile from '../components/Profile/Profile';
import Navigator from '../components/config/Routes';
//import ReportView from '../components/Report/ReportView';
import Heros from '../components/Heros/Heros';
import HomeCards from '../components/HomeCards/HomeCards';
import Login from '../components/Login/Login';
import ProfileCards from '../components/ProfileCards/ProfileCards';
import Maps from '../components/MapView/MapView';
import ReportView from '../components/Report/ReportView';
//import ReportIndex from '../components/Report/ReportIndex';

export default class Home extends Component {

    render() {

        return (            
           
                
           <View style={styles.container}>
           <Navigator />
           </View> 
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subcontainer1: {
        flex: 1,
    },
    subcontainer2: {
        flex: 20,
    },
});
AppRegistry.registerComponent('Home', () => Home);
