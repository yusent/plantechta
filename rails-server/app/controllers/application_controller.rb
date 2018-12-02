class ApplicationController < ActionController::Base
  skip_forgery_protection

  def water
    MQTT_CLIENT.publish "water"
    head :ok
  end
end
