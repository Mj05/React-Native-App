import React, { PureComponent } from 'react';
import { View, StyleSheet, AppRegistry } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import GreenZones from './GreenZones';
import RedZones from './RedZones';
//import Tabs from './Tabs';
const FirstRoute = () => <GreenZones />;
const SecondRoute = () => <RedZones />;

export default class ReportTabs extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Green_Zones' },
      { key: '2', title: 'Red_Zones' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
  });

  render() {
    return (
      
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
  
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

AppRegistry.registerComponent('ReportTabs', () => ReportTabs);
