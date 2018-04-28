import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry,StatusBar,TouchableOpacity ,Button} from 'react-native';
//import TabView from './app/components/Tabs/TabView';
//import Login from '../components/Login/Login';
//import Profile from '../components/Profile/Profile';
import ReportTabs from './ReportTabs';


export default class ReportIndex extends Component {

    render() {

        return (            
           
                
           <View style={styles.container}>
           <ReportTabs />
           </View> 
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
AppRegistry.registerComponent('ReportIndex', () => ReportIndex);
