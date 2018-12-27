import { createDrawerNavigator } from 'react-navigation';
import Evalutions from './Evalutions';
import Profile from './Profile';


export default createDrawerNavigator({
    Evalutions: {
        screen: Evalutions
    },
    Profile: {
        screen: Profile
    },
}, {
        initialRouteName: 'Evalutions'
    });
