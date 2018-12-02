import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import logo from './assets/logo.png';

const API_ADDRESS = 'http://168.62.10.216:8080/api';

export default class App extends React.Component {
  state = {
    humidity: null,
    soilMoisture: null,
    sunlight: null,
    temperature: null,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({
      humidity: null,
      soilMoisture: null,
      sunlight: null,
      temperature: null,
    });

    try {
      const response = await fetch(`${API_ADDRESS}/sensor_readings/all_last`);
      const payload = await response.json();
      const { humidity, soil_moisture, sunlight, temperature } = payload.data;

      this.setState({
        humidity: `${humidity}%`,
        soilMoisture: `${soil_moisture}%`,
        sunlight: `${sunlight} lux`,
        temperature: `${temperature} ℃`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  water = () => {
    fetch(`${API_ADDRESS}/water`, { method: 'POST' });
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

  render() {
    const { humidity, soilMoisture, sunlight, temperature } = this.state;

    return (
      <ScrollView
        contentContainerStyle={styles.content}
        style={styles.container}
      >
        <View style={[styles.section, styles.banner]}>
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

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={this.getData}
            style={styles.waterButton}
          >
            <MaterialCommunityIcons
              color="#fff"
              name="refresh"
              size={32}
            />

            <Text style={styles.waterButtonText}>
              Refresh
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={this.water}
            style={styles.waterButton}
          >
            <Entypo
              color="#fff"
              name="water"
              size={32}
            />

            <Text style={styles.waterButtonText}>
              Water now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },

  container: {
    backgroundColor: '#f1eff0',
    flex: 1,
    paddingTop: getStatusBarHeight(),
  },

  content: {
    padding: 10,
    paddingBottom: 30,
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

  waterButton: {
    backgroundColor: '#19499b',
    borderRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  waterButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
  },
});
