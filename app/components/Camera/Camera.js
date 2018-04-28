import React, { Component,PropTypes } from 'react';
import { TouchableOpacity,  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  static propTypes = {
    navigation: PropTypes.object
}
handlePress = () => {
    this.props.navigation.goBack(null);
};
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
               <Text style={styles.capture} onPress={this.takePicture} >[CAPTURE]</Text>
            </View>
          </Camera>
        </View>
      );
    }
  }
  
  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    marginLeft: 130,
    marginTop: 570
  }
});