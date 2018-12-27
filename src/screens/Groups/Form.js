import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
} from "../../components/core";
import {Picker} from 'react-native'
import BottomButton from "../../components/BottomButton";
import { THEME_COLOR } from "../../helpers/theme";
import { getValue} from "../../helpers/arrayhelper";

class GroupForm extends Component {
  state = {
    animaltype: ""
  };

  componentDidMount(){
    let farmname = getValue(this.props, ['navigation' ,'state', 'params' , 'farmname']);
  }

  render() {
    const { container, header, welcomebacktext, inputbox } = styles;
    const {Item} = Picker
    return (
      <View style={container}>
        <ScrollView style={{ marginBottom: "20%" }}>
          <View style={header} />

          <Text style={welcomebacktext}>Create Group!</Text>

          <TextInput placeholder={"Group Name"} style={inputbox} />
          <Picker
            selectedValue={this.state.animaltype}
            prompt={"Select type of Animal"}
            style={[inputbox, { height: 50 }]}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ animaltype: itemValue })
            }
          >
           
          </Picker>
          <TextInput placeholder={"Type of animal"} style={inputbox} />
          <TextInput
            placeholder={"Comments"}
            style={[inputbox, { height: 60, marginTop: 30 }]}
            multiline={true}
            numberOfLines={5}
          />
        </ScrollView>

        <BottomButton text={"Save"} onPress={() => {}} />
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
    backgroundColor: THEME_COLOR
  },
  headertext: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  welcomebacktext: {
    color: THEME_COLOR,
    fontSize: 25,
    marginVertical: 20,
    marginLeft: 20
  },
  labelText: {
    color: THEME_COLOR,
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20
  },
  inputbox: {
    marginHorizontal: 20,
    height: 40,
    borderColor: "gray",
    borderWidth: 0,
    marginVertical: 10,
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
  }
});

export default GroupForm;
