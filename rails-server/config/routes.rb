Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope :api do
    get "sensor_readings", to: "sensor_readings#index"
    post "sensor_readings", to: "sensor_readings#create"
    post "water", to: "application#water"
    get "sensor_readings/all_last", to: "sensor_readings#all_last"
  end
end
