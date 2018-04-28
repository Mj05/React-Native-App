import React,{Component} from 'react';
import {View, Text, StyleSheet,AppRegistry} from 'react-native';
//import TabView from './app/components/Tabs/TabView';
//import Login from '../components/Login/Login';
//import Profile from '../components/Profile/Profile';
import ReportTabs from './ReportTabs';
export default class Report extends Component {
    
    
    
        render() {
    
    
          return (
            <View style={styles.container}>
            <Text>I m Report</Text>
            <ReportTabs />
            </View>
          );
        }
      }
      const styles = StyleSheet.create({
        container:{
          flex:1,
        },
      });
    AppRegistry.registerComponent('Report', () => Report);
