import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Field from "./src/components/Field";
import params from "./src/params";


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines</Text>
        <Text style={styles.instructions}>Tamanho da grade:
          {params.getRowsAmount()}x{params.getCollumnsAmount()}</Text>
        <Field />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center'
  },
  instructions: {
    fontSize: 13,
    textAlign: 'center'
  }
})