class SensorReadingsController < ApplicationController
  def create
    reading = SensorReadings.create sensor_readings_params
    response = {
      data: reading.as_json
    }
    response[:errors] = reading.errors.as_json unless reading.errors.empty?
    render json: response
  end

  def index
    response = SensorReadings.page(page, per_page).as_json
    render json: response
  end

  def all_last
    render json: {
      data: {
        humidity: HumidityReading.last&.value,
        temperature: TemperatureReading.last&.value,
        soil_moisture: SoilMoistureReading.last&.value,
        sunlight: SunlightReading.last&.value,
      }
    }
  end

  private

  def page
    params[:page]&.to_i || 1
  end

  def per_page
    params[:per_page]&.to_i || 20
  end

  def sensor_readings_params
    params.permit :type, :value
  end
end
