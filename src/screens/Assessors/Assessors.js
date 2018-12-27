import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "../../components/core";

import AssessorsItem from "../../components/AssessorsItem";

class Assessors extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginHorizontal: "3%"
            }}
          >
            <AssessorsItem
              label={"Lesion Assessor"}
              url={
                "https://www.zinprofeetfirst.com/assets/images/lesion-desktop.jpg"
              }
            />
            <AssessorsItem
              label={"Lameness Assessor"}
              url={
                "https://www.zinprofeetfirst.com/assets/images/lameness-desktop.jpg"
              }
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F9FB",
    marginTop: 20
  }
});

export default Assessors;
