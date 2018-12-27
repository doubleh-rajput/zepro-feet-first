import { createStackNavigator } from 'react-navigation';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import Profile from './Profile';


export default createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    ChangePassword: {
        screen: ChangePassword
    },
    EditProfile: {
        screen: EditProfile
    }
}, {
        initialRouteName: 'Profile'
    });
