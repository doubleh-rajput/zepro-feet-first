import React, { Component } from 'react';
import { View, StyleSheet } from '../components/core';

import Toaster from 'react-native-toaster'
import Loader from '../../src/components/loader'
import { connect } from 'react-redux'
import { SHOW_LOADER, HIDE_LOADER, HIDE_ERROR_MESSAGE } from '../redux/actions'


const styles = StyleSheet.create({
    container: { width: "100%", height: "100%" }
})

export default function (ComposedComponent) {
    class DefaultScreeen extends Component {
        render() {
            const { message, loader } = this.props;

            return <View style={styles.container}>

                <Toaster message={message} onShow = {() => {this.props.hidemessage()}}/>
                <Loader loading={loader} />

                <ComposedComponent {...this.props} />

            </View>
        }
    }

    return connect(
        (state) => {
            return {
                message: state.messagestate.message,
                loader: state.appstate.loader,
                network_available: state.appstate.network_available,
            }
        },
        (dispatch) => {
            return {
                showmessage: (action, message) => {
                    dispatch([
                        { type: action, payload: { message: message } },
                    ]);
                },
                hidemessage: () => {
                    dispatch([
                        { type: HIDE_ERROR_MESSAGE, payload: { } },                            
                    ]);
                },
                showloader: () => {
                    dispatch({ type: SHOW_LOADER });
                },
                hideloader: () => {
                    dispatch({ type: HIDE_LOADER });
                },
                logout: (navigation) => {
                    navigation.navigate('Login')
                }
            }
        }
    )(DefaultScreeen);
}