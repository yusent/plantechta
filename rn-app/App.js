import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={logo}
          style={styles.logo}
        />

        <Text style={styles.title}>
          PlanTechTa
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 150,
  },

  title: {
    color: '#19499b',
    fontSize: 26,
    fontWeight: '500',
    marginTop: 10,
  },
});
