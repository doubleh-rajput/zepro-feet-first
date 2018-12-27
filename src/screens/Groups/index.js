import { createStackNavigator } from 'react-navigation';
import List from './List';
import Form from './Form';
import {THEME_COLOR} from '../../helpers/theme';

export default createStackNavigator({
    List: {
        screen: List,
        navigationOptions: ({ navigation }) => ({
            title: `Create Evaluation`,
            headerStyle: {backgroundColor : THEME_COLOR},
            headerTitleStyle: {color: 'white'},
          }),
    },
    Create: {
        screen: Form,
        navigationOptions: ({ navigation }) => ({
            title: `Create Evaluation`,
            headerStyle: {backgroundColor : THEME_COLOR},
            headerTitleStyle: {color: 'white'},
          }),
    },
    Edit: {
        screen: Form,
        navigationOptions: ({ navigation }) => ({
            title: `Edit Evaluation`,
            headerStyle: {backgroundColor : THEME_COLOR, color: 'white'},
            headerTitleStyle: {color: 'white'},
          }),
    },
}, {
        initialRouteName: 'Create'
    });
