import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.bigBlue}>
        <Text style={styles.red}>Hello, world!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bigBlue: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  red: {
    color: "red",
  },
});