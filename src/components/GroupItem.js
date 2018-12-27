import React from 'react';
import { View, StyleSheet, Text } from '../components/core';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {  px2dp } from "../helpers/theme";


export default (props) => {

    const GroupItemStyle = StyleSheet.create({
        row: {
            height: 80,
            display: "flex",
            paddingVertical: 25,
            flexDirection: "row",
            marginHorizontal: "5%",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 1,
            borderColor: "#BEBEBE"
        },
        leftblock: {
            flex: 5
        },
        fieldnametext: {
            fontWeight: "700",
            fontSize: 18
        },
        grouptext: {
            fontSize: 12,
            fontWeight: "200",
        }
    });

    const {row, leftblock, fieldnametext, grouptext} = GroupItemStyle;
    const {name, groupcount} = props;

    return <View style={row}>
        <View style={leftblock}>
            <Text style={fieldnametext}>{name}</Text>
            <Text style={grouptext}>Groups - {groupcount}</Text>
        </View>
        <Icon name={"arrow-forward"} size={px2dp(20)} color="black" style={{ paddingRight: 15 }} />
    </View>
}