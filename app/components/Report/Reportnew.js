import React, { PureComponent } from 'react';
import  { Component } from 'react';
import { View, StyleSheet, AppRegistry } from 'react-native';
//import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { TabNavigator } from 'react-navigation';
import GreenZones from './GreenZones';
import RedZones from './RedZones';
//import Tabs from './Tabs';

  export const Tabs = TabNavigator({
    GreenZones: {
      screen: GreenZones,
           },

   RedZones: {
      screen: RedZones,
      },
  });
  export default class Reportnew extends Component {
    render ()
    {
return (
  <Tabs/>
);
    }
  }
  
AppRegistry.registerComponent('Reportnew', () => Reportnew);

