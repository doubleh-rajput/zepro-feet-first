import React, { Component } from "react";

import { View, StyleSheet, Text, TextInput, Image, TouchableHighlight, AsyncStorage } from "../components/core";
import DefaultScreen from '../hoc/DefaultScreen';
import { getValue} from '../helpers/arrayhelper'
import { LOGIN_TOKEN } from '../helpers/constants'
import API from '../apis';
import {
  SHOW_ERROR_MESSAGE, SHOW_WARNING_MESSAGE, SHOW_SUCCESS_MESSAGE
} from '../redux/actions'

class Login extends Component {

  state = {
    email: '',
    password: ''
  };

  login = async () => {
    await this.props.showloader();

    API.login(this.state)
    .then(async (res) => {
      let token = res.token;
      await this.props.hideloader()
      await AsyncStorage.setItem(LOGIN_TOKEN , token);
      this.props.navigation.navigate('Home');
    })
    .catch((error) => {
      let message = getValue(error, ['response', 'data', 'message'], 'Network Error');
      this.props.showmessage(SHOW_ERROR_MESSAGE , message);
      this.props.hideloader()
    })

  }

  render() {
    const {
      container,
      flexContent,
      inputbox,
      botton,
      bottontext
    } = styles;
    return (
      <View style={container}>

        <View style={flexContent}>
          <Image
            resizeMode={'contain'}
            style={{
              width: "100%",
              height: "100%",
            }}
            source={require("./../../assets/logo.png")}
          />
        </View>

        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={"Your email address"} style={inputbox} />

        <TextInput
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
          placeholder={"Your password"} style={inputbox} />

        <TouchableHighlight
          underlayColor={'white'}
          onPress={this.login}>
          <View style={botton}>
            <Text style={bottontext}>Login</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  header: {
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F94F4"
  },
  welcomebacktext: {
    color: "#1F94F4",
    fontSize: 25,
    textAlign: "center",
    marginVertical: 20
  },
  inputbox: {
    marginHorizontal: 20,
    height: 40,
    borderColor: "gray",
    borderWidth: 0,
    marginVertical: 15,
    borderBottomWidth: 1
  },
  botton: {
    height: 50,
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#1F94F4",
    justifyContent: "center",
    margin: 30
  },
  bottontext: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    color: "#1F94F4"
  },
  flexContent: {
    height: "33%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: '10%', width: '50%', marginHorizontal: '25%'
  },
});

export default DefaultScreen(Login);
