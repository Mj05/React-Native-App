import React, { Component, PropTypes } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
Image,
Alert,
TextInput,
TouchableOpacity,
KeyboardAvoidingView,

} from 'react-native';

import TabView from '../Tabs/TabView';

export default class Login extends Component {

constructor(props) {

super(props)

this.state = {

TextInputName: '',
TextInputPhoneNumber: ''

}

}

static propTypes = {
navigation: PropTypes.object,
}

login = () => {

const { TextInputName } = this.state;
const { TextInputPhoneNumber } = this.state;

fetch('http://192.168.43.120/submit_user_info.php', {
method: 'POST',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json',
},
body: JSON.stringify({

name: TextInputName,

phone_number: TextInputPhoneNumber

})

}).then((response) => response.json())
.then((responseJson) => {
// Showing response message coming from server after inserting records.
if (responseJson == 'Registration Successfull') {
this.props.navigation.navigate('TabView');
}

}).catch((error) => {
console.error(error);
});
}




render() {


return (

<KeyboardAvoidingView behavior='position'>
<Image source={require('./img/LoginBackground.jpg')} style={styles.backgroundImage}>
<View style={styles.content}>
<Text style={styles.logo}>SWACHH-a-THON</Text>
<View style={styles.inputcontainer}>

<TextInput secureTextEntry={false}
underlineColorAndroid='transparent'
style={styles.input}
placeholder='User_Name'
onChangeText={TextInputName => this.setState({ TextInputName })}
>
</TextInput>
<TextInput secureTextEntry={false}
underlineColorAndroid='transparent'
style={styles.input}
placeholder='User_Contact'
onChangeText={TextInputPhoneNumber => this.setState({ TextInputPhoneNumber })}
maxLength={10} //setting limit of input
minLength={10} //setting limit of input
keyboardType='numeric'
>
</TextInput>

<TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
<Text style={styles.buttonText}>JOIN NOW </Text>
</TouchableOpacity>

</View>
</View>
</Image>

</KeyboardAvoidingView>

);
}
}

const styles = StyleSheet.create({
    container: {
    flex: 1
    },
    backgroundImage: {
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',
    },
    content: {
    alignItems: 'center',
    margin: 1,
    },
    logo: {
    marginTop: 80,
    color: 'white',
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: '#252525',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15,
    marginBottom: 10,
    },
    inputcontainer: {
    margin: 10,
    marginTop: 40,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(2,2,0.2,0.2)',
    },
    input: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    },
    buttonContainer: {
    alignSelf: 'stretch',
    margin: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.6)',
    },
    buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    }
    });
    
    AppRegistry.registerComponent('Login', () => Login);