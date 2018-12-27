import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Text, TextInput } from "../../components/core";
import BottomButton from "../../components/BottomButton";
import { THEME_COLOR } from "../../helpers/theme";
import EvaluationFormModel from '../../models/evaluation.form';
import { SHOW_ERROR_MESSAGE } from "../../redux/actions";
import DefaultScreen from "../../hoc/DefaultScreen";

class EvaluationForm extends Component {

  state = {
    farmname: '',
    consulation_date: '',
    permise_id: '',
    first_name: '',
    last_name: '',
    role: '',
    primary_email: '',
    secondary_email: '',
    address1_address: '',
    address1_suite: '',
    address1_city: '',
    address1_state: '',
    address1_zipcode: '',
    address2_address: '',
    address2_suite: '',
    address2_city: '',
    address2_state: '',
    address2_zipcode: '',
  };

  saveEvaluation = async () => {
    let model = new EvaluationFormModel();
    model.load(this.state);

    let save = await model.save();

    if(save){

        console.log(save);

    }else{
      this.props.showmessage(SHOW_ERROR_MESSAGE , model.getFirstError());
    }
  }


  render() {
    const {
      container,
      header,
      labelText,
      inputboxInline,
      inputboxInlineRight,
      inputbox,
    } = styles;
    return (
      <View style={container}>
        <ScrollView style={{ marginBottom: "20%" }}>
          <View style={header} />

          <TextInput
            onChangeText={(farmname) => this.setState({ farmname })}
            placeholder={"Farm Name"} style={inputbox} />
          <TextInput
            onChangeText={(consulation_date) => this.setState({ consulation_date })}
            placeholder={"Consulation Date"} style={inputbox} />
          <TextInput
            onChangeText={(permise_id) => this.setState({ permise_id })}
            placeholder={"Permise ID"} style={inputbox} />

          <Text style={labelText}>Contact Name</Text>

          <View style={{ flexDirection: "row", display: 'flex', marginHorizontal: 15 }}>
            <TextInput
              onChangeText={(first_name) => this.setState({ first_name })}
              placeholder={"First Name"} style={[inputboxInline]} />
            <TextInput
              onChangeText={(last_name) => this.setState({ last_name })}
              placeholder={"Last Name"} style={inputboxInlineRight} />
          </View>

          <TextInput
            onChangeText={(role) => this.setState({ role })}
            placeholder={"Role"} style={inputbox} />

          <Text style={labelText}>Emails</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              onChangeText={(primary_email) => this.setState({ primary_email })}
              placeholder={"Primary"} style={inputbox} />
            <TextInput
              onChangeText={(secondary_email) => this.setState({ secondary_email })}
              placeholder={"Secondary"} style={inputbox} />
          </View>

          <Text style={labelText}>Address 1</Text>
          <TextInput
            placeholder={"Address"}
            style={[inputbox, { height: "60" }]}
            multiline={true}
            numberOfLines={5}
            onChangeText={(address1_address) => this.setState({ address1_address })}
          />
          <TextInput
            onChangeText={(address1_suite) => this.setState({ address1_suite })}
            placeholder={"Suite"} style={inputbox} />
          <TextInput
            onChangeText={(address1_city) => this.setState({ address1_city })}
            placeholder={"City"} style={inputbox} />
          <View style={{ flexDirection: "row" }}>
            <TextInput
              onChangeText={(address1_state) => this.setState({ address1_state })}
              placeholder={"State"} style={inputbox} />
            <TextInput
              onChangeText={(address1_zipcode) => this.setState({ address1_zipcode })}
              placeholder={"Zipcode"} style={inputbox} />
          </View>
          <Text style={labelText}>Address 2</Text>
          <TextInput
            placeholder={"Address"}
            style={[inputbox, { height: "60" }]}
            multiline={true}
            numberOfLines={5}
            onChangeText={(address2_address) => this.setState({ address2_address })}
          />
          <TextInput
            onChangeText={(address2_suite) => this.setState({ address2_suite })}
            placeholder={"Suite"} style={inputbox} />
          <TextInput
            onChangeText={(address2_city) => this.setState({ address2_city })}
            placeholder={"City"} style={inputbox} />
          <View style={{ flexDirection: "row" }}>
            <TextInput
              onChangeText={(address2_state) => this.setState({ address2_state })}
              placeholder={"State"} style={inputbox} />
            <TextInput
              onChangeText={(address2_zipcode) => this.setState({ address2_zipcode })}
              placeholder={"Zipcode"} style={inputbox} />
          </View>
        </ScrollView>

        <BottomButton text={"Save"} onPress={this.saveEvaluation} />
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
    marginHorizontal: 15,
    height: 40,
    borderColor: "gray",
    borderWidth: 0,
    marginVertical: 10,
    borderBottomWidth: 1
  },
  inputboxInline: {
    // marginHorizontal: 15,
    height: 40,
    borderColor: "gray",
    borderWidth: 0,
    marginVertical: 10,
    borderBottomWidth: 1,
    flex: 1
  },
  inputboxInlineRight: {
    // marginHorizontal: 15,
    height: 40,
    borderColor: "gray",
    borderWidth: 0,
    marginVertical: 10,
    borderBottomWidth: 1,
    flex: 1,
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

export default DefaultScreen(EvaluationForm);
