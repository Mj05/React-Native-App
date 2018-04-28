import React from 'react';
import {
    AppRegistry,
    View,
    Button,
    Text,
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';
import GreenZones from './GreenZones';
import RedZones from './RedZones';




class AgendaScreen extends React.Component {
    static navigationOptions = {
        title: 'Green_Zones'
    }
    render() {
        return (
            <View>

                <Button
                    title="Click For Red Zones"
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
                <GreenZones />
            </View>
        );
    }
}

class DetailScreen extends React.Component {
    static navigationOptions = {
        title: 'Red_Zones'
    }
    render() {
        return (
            <View>

                <View>
                    <Button
                        title="Go back"
                        onPress={() => this.props.navigation.goBack()}
                    />
                </View>
                <View>
                    <RedZones />

                </View>
            </View>
        );
    }
}


class ModalScreen extends React.Component {
    static navigationOptions = {
        title: 'Modal'
    }
    render() {
        return (
            <View>
                <Text>Modal Screen</Text>
            </View>
        );
    }
}

const HomeNav = StackNavigator({
    Agenda: {
        screen: AgendaScreen,
        navigationOptions: {
            header: () => null,
        },
    },


    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            header: () => null,
        },
    },
});

export default ReportCard = TabNavigator({
    Home: { screen: HomeNav },

});

AppRegistry.registerComponent('ReportCard', () => ReportCard);