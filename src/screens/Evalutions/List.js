import React, { Component } from "react";
import { StyleSheet, ScrollView } from "../../components/core";
import EvaluationItem from '../../components/EvaluationItem';
import { evaluationDBHelper } from '../../helpers/db'
import DefaultScreen from "../../hoc/DefaultScreen";

class EvaluationList extends Component {

  state = {
    evaluations: []
  }

  componentDidMount() {
    evaluationDBHelper()
      .sql('select * from evaluation')
      .then((data) => {
        this.setState({ evaluations: data.docs });
      }).catch(err => {

      })
  }

  navigateToGroup = (farmname) => {
    this.props.navigation.push('Group', { farmname });
  }

  render() {
    const {
      container,
    } = styles;
    return <ScrollView style={container}>
      {this.state.evaluations.map((evaluation, key) => {
        return <EvaluationItem
          onPress={this.navigateToGroup}
          name={evaluation.farmname} groupcount={evaluation.consulation_date} key={key} />
      })}
    </ScrollView>
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
});

export default DefaultScreen(EvaluationList);
