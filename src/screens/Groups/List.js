import React, { Component } from "react";
import {  StyleSheet,  ScrollView, TouchableWithoutFeedback } from "../../components/core";
import { THEME_COLOR, px2dp } from "../../helpers/theme";
import GroupItem from '../../components/GroupItem'
import Icon from 'react-native-vector-icons/MaterialIcons';

class GroupList extends Component {

  farmname;

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Group List',
      headerTitleStyle: { color: 'white', textAlign: 'left' },
      headerStyle: {
        backgroundColor: THEME_COLOR,
      },
      headerRight: <TouchableWithoutFeedback onPress={() => {
            navigation.push('Create' , {farmname: navigation.state.params.farmname}) }
        }>
        <Icon name="add" size={px2dp(20)} color="white" style={{ paddingRight: 15 }} />
      </TouchableWithoutFeedback>
    }
  };

  componentDidMount(){
    this.farmname = this.props.navigation.state.params.farmname
  }

  render() {
    const {
      container,
    } = styles;
    return (
      <ScrollView style={container}>
        {Array.from({ length: 2 }).map((i, key) => {
          return <GroupItem key={key} name= {'Group'} groupcount = {2} />;
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
});

export default GroupList;
