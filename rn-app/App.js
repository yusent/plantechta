import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import logo from './assets/logo.png';

export default class App extends React.Component {
  state = {
    humidity: null,
    soilMoisture: null,
    sunlight: null,
    temperature: null,
  };

  renderValue = (value) => {
    if (!value) {
      return <ActivityIndicator color="#19499b" size={20} />;
    }

    return (
      <Text style={styles.valueText}>
        {value}
      </Text>
    );
  };

  // 22 ℃

  render() {
    const { humidity, soilMoisture, sunlight, temperature } = this.state;

    return (
      <ScrollView style={styles.container}>
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

          {this.renderValue(humidity)}
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

          {this.renderValue(soilMoisture)}
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

          {this.renderValue(sunlight)}
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

          {this.renderValue(temperature)}
        </View>
      </ScrollView>
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
    height: 128,
    width: 100,
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
