import React, { Component } from "react";

import {View ,  StyleSheet, Image}from '../components/core';

class RegisterSuccess extends Component{

    navigateToLogin  = () => {
        this.props.navigation.navigate('Login')
    };

    render(){
        return <View style = {styles.container}>
            <Image
                resizeMode={'contain'}
                source={require("./../../assets/splash.png")}
                style={{width: "80%",height: "100%"}}
            />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems: 'center'
    }
});

export default RegisterSuccess;