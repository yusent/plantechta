class SensorReading < ApplicationRecord
  validates :value, numericality: true, presence: true
end
