import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import logo from './assets/logo.png';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Image
            source={logo}
            style={styles.logo}
          />

          <Text style={styles.title}>
            PlanTechTa
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.param}>
            <MaterialCommunityIcons
              color="#19499b"
              name="water-percent"
              size={32}
            />

            <Text style={styles.paramText}>
              Humidity
            </Text>
          </View>

          <Text style={styles.valueText}>
            12%
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.param}>
            <MaterialCommunityIcons
              color="#19499b"
              name="water-percent"
              size={32}
            />

            <Text style={styles.paramText}>
              Soil moisture
            </Text>
          </View>

          <Text style={styles.valueText}>
            24%
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.param}>
            <MaterialCommunityIcons
              color="#19499b"
              name="weather-sunny"
              size={32}
            />

            <Text style={styles.paramText}>
              Sunlight
            </Text>
          </View>

          <Text style={styles.valueText}>
            86198 lux
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.param}>
            <MaterialCommunityIcons
              color="#19499b"
              name="thermometer"
              size={32}
            />

            <Text style={styles.paramText}>
              Temperature
            </Text>
          </View>

          <Text style={styles.valueText}>
            22 ℃
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1eff0',
    flex: 1,
    padding: 10,
    paddingTop: 10 + getStatusBarHeight(),
  },

  logo: {
    width: 150,
  },

  param: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  paramText: {
    color: '#19499b',
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 5,
  },

  section: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 10,
  },

  title: {
    color: '#19499b',
    fontSize: 36,
    fontWeight: '500',
    marginTop: 10,
  },

  valueText: {
    fontSize: 20,
  },
});
