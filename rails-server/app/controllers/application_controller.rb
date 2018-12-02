class ApplicationController < ActionController::Base
  skip_forgery_protection

  def water
    MQTT_CLIENT.publish "water", "please"
    head :ok
  end
end
