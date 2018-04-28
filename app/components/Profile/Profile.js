
import React, { PureComponent } from 'react';
import { View, StyleSheet,AppRegistry,Text} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Header from './Header';
import Photogrid from './Photogrid';
import ProfileCards from '../ProfileCards/ProfileCards';


const FirstRoute = () => <ProfileCards />;
const SecondRoute = () => <ProfileCards />;
 
export default class Profile extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Most Rated' },
      { key: '2', title: 'All POsts' },
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
      <View style={styles.container} >
        <View style={styles.header}>
        <Header />
        </View> 
      
      <TabViewAnimated
        style={styles.tab}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
      flex:1,

  },
  tab:{
      flex:3

  },
});
AppRegistry.registerComponent('Profile', () => Profile);