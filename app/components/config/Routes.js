import { StackNavigator } from 'react-navigation';


import Login from '../Login/Login';
import TabView from '../Tabs/TabView';
import Profile from '../Profile/Profile';
import Camera from '../Camera/Camera';



export default StackNavigator({
    Login : {
        screen : Login,
        navigationOptions: {
        header: () => null,
        },
    },
    TabView : {
       screen : TabView,
       navigationOptions: {
        header: () => null,
        },
    },
    Profile : {
     screen : Profile,
     navigationOptions: {
        headerTitle: "Profile",
        },
    },
    Camera: {
        screen: Camera,
        navigationOptions: {
            header: () => null,
        },
    },

},
{
mode : 'modal',

}

);