#!/usr/bin/env ruby

require File.expand_path('../../config/environment', __FILE__)

warn "initialized"
MQTT_CLIENT.get("sensor-readings") do |t, m|
  warn "read #{m}"
  temperature, humidity = m.split " "
  TemperatureReading.create value: temperature
  HumidityReading.create value: humidity
end
