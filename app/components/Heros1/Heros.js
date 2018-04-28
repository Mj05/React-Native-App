import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, FlatList,TouchableOpacity} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

//const image1 = require('../components/m.jpg')
//const image2 = require('../assets/Image2.png')

class Heros extends Component { 

    render() {


      handleRankProfilePress = () => {
          console.log('Rank Profile Pressed');
      }


        return (
          <View style={styles.container}>
             <Image source ={require('./Hero1.jpg')}  style={styles.heros}/>
        <FlatList style={styles.list}
          data={[
            {key: 'Heena'},
            {key: 'Aashu'},
            {key: 'Surbhi'},
            {key: 'Sunny '},
            {key: 'Johny '},
            {key: 'Aashu'},
            {key: 'Ankitt '},
            {key: 'Muku  '},
            {key: 'Devin '},
            {key: 'Manu '},
            {key: 'Mani  '},
            {key: 'Anil   '},
            {key: 'Suraj '},
          ]}
          renderItem={({item}) => 
          <View style={styles.container2}>
       
          <Image source ={require('./profile.png')} style={styles.image}/>
     
          <Text style={styles.item}>{item.key}</Text>
          <Text style={styles.text2}>120 POINTS</Text>
          </View>
          }
        />
      </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container: {
       flex: 1,
       paddingTop: 22,
       backgroundColor:'white',
      },
      rankprofile:{
        
        width:100,
        alignSelf:'center',
        borderRadius:90,
        borderColor:'#fff',
        borderWidth:1,
      },
      list:{
        marginTop:15,
  
        width: responsiveWidth(100), // 50% of screen width 
      },
      item: {
        marginLeft:5,
        padding: 10,
        fontSize: 18,
        height: 45,
        backgroundColor:'white',
      },
      image:{
        width:50 ,
        height :50, 
        backgroundColor:'white',
      },
      heros:{
        height: responsiveHeight(11), // 50% of screen height 
        width: responsiveWidth(70), // 50% of screen width 
       
        marginLeft:50, 
        backgroundColor:'white',
      },
      herro:{
       
        marginBottom:5,
        width:100 ,
        height :45,
        marginLeft:140, 
        backgroundColor:'white',
      },
      text2:{
        fontSize:11,
        marginLeft:140,
        marginTop:15,
        backgroundColor:'white',
      },
      container2:{
  
        width: responsiveWidth(100), // 50% of screen width 
         flexDirection: 'row',
         borderBottomColor: 'lightgrey',
         borderBottomWidth: 1, 
         marginTop:3,
         marginLeft:20,
         marginRight:20,
         marginBottom: 4,
         paddingBottom: 10,
         backgroundColor:'white',
      }
    });
    


export default Heros;

