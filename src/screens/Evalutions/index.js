import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_COLOR, px2dp } from "../../helpers/theme";
import {TouchableWithoutFeedback} from '../../components/core';
import List from './List';
import Form from './Form';
import Group from '../Groups';

export default createStackNavigator({
    List: {
        screen: List,
        navigationOptions: ({ navigation }) => ({
            title: 'Evaluation',
            headerTitleStyle: { color: 'white', textAlign: 'left' },
            headerStyle: {
                backgroundColor: THEME_COLOR,
            },
            headerRight: <TouchableWithoutFeedback onPress={() => { navigation.push('Create') }}>
                <Icon name="add" size={px2dp(20)} color="white" style={{ paddingRight: 15 }} />
            </TouchableWithoutFeedback>

        }),
    },
    Create: {
        screen: Form,
        navigationOptions: ({ navigation }) => ({
            title: `Create Evaluation`,
            headerStyle: { backgroundColor: THEME_COLOR, color: 'white' },
            headerTitleStyle: { color: 'white' },
        }),
    },
    Edit: {
        screen: Form,
        navigationOptions: ({ navigation }) => ({
            title: `Edit Evaluation`,
            headerStyle: { backgroundColor: THEME_COLOR, color: 'white' },
            headerTitleStyle: { color: 'white' },
        }),
    },
    Group: {
        screen: Group,
    }
}, {
        initialRouteName: 'List'
    });
