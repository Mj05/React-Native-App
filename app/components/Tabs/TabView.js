import React, { PureComponent,PropTypes } from 'react';
import { View,Text, StyleSheet , AppRegistry,Image,TouchableOpacity} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Search from './index';
import Toolbar from 'react-native-toolbar';
import Login from '../Login/Login';
import Heros from '../Heros/Heros';
import HomeCards from '../HomeCards/HomeCards';
import FAB from 'react-native-fab';
import ReportView from '../Report/ReportView';

//import ReportIndex from '../Report/ReportIndex';
import Maps from '../MapView/MapView';


const FirstRoute = () => <HomeCards />;
const SecondRoute = () => <Heros />;
const ThirdRoute = () => <Maps />
const FourthRoute = () => <ReportView/>;


export default class Mj extends PureComponent {


 
  static propTypes = {
    navigation: PropTypes.object,
  }

  handleProfilePress = () => {
    this.props.navigation.navigate('Profile');

  };

  handleCam = () => {
    this.props.navigation.navigate('Camera');

  };



  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Home' },
      { key: '2', title: 'Heroes' },
      { key: '3', title: 'Map' },
      { key: '4', title: 'Report' },
      
    
    ],
  };
 
  _handleIndexChange = index => this.setState({ index });
 
  _renderHeader = props => <TabBar {...props} />;
  
 
  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
    '3': ThirdRoute,
    '4': FourthRoute,
  });
 
  render() {

    return (
      <View style={styles.container} >
        <View style={styles.bar}>
             <View style={[styles.barItem,styles.barSeprator]}>
                <Search />
             </View>
             <View style={styles.barItem}>
            
             <View style={styles.profilepicwrap}>
             <TouchableOpacity style={styles.button} onPress={this.handleProfilePress}> 
             <Image style={styles.profilepic} source={require('./img/Profileicon.png')} /> 
             </TouchableOpacity>
             </View>
             </View>
        </View>
       <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
      <FAB
          buttonColor="#2980b9"
          iconTextColor="#FFFFFF"
          onClickAction={this.handleCam}
          visible={true} />

      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
  bar:{
    width:'100%',
    marginTop:0,
    borderTopColor:'#fff',
    borderTopWidth:1,
    backgroundColor:'#3D92DE',
    flexDirection:'row',
},
barSeprator:{   
    flex:1,  
    borderRightWidth:1,
    borderColor:'#fff',
    paddingTop:8,
},
barTop:{
    color:'#fff',
    fontSize:12,
    fontWeight:'bold',
    fontStyle:'italic',
},
barBottom:{
    color:'#fff',
    fontSize:responsiveFontSize(12),
    fontWeight:'bold',
},
barItem:{
    padding:2,
    alignItems:'center',
},
profilepicwrap:{
  height: responsiveHeight(8), // 50% of screen height 
  width: responsiveWidth(13), // 50% of screen width 
  marginTop:0,
  //width:50,
  //height:50,
  padding:1,
  borderRadius:90,
  borderColor:'red',
  borderWidth:0,
},
profilepic:{
  flex:1,
  width:null,
  alignSelf:'stretch',
  borderRadius:90,
  borderColor:'#fff',
  borderWidth:1,
},
button:{
  flex:1,
  width:null,
  alignSelf:'stretch',
  borderRadius:90,
  borderColor:'#fff',
  borderWidth:1,
}
});
AppRegistry.registerComponent('Mj', () => Mj);