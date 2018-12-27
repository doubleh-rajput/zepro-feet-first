import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "./core";

class AssessorsItem extends Component {
  render() {
    const { url, label } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ width: "100%", height: 168 }}>
          <Image
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
            source={{ uri: url }}
          />
        </View>

        <Text style={styles.info}>{label}</Text>
        <View
          style={{
            marginLeft: "5%",
            display: "flex",
            flexDirection: "row",
            width: "95%",
            justifyContent: "center",
            alignItems: "center"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: "3%",
    width: "44%",
    paddingBottom: 5,
    boxShadow: "0px 0px 10px 5px #E4E5E5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  info: {
    fontSize: 14,
    fontWeight: "200",
    textAlign: "center",
    marginVertical: 10
  }
});

export default AssessorsItem;
