class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.page(number, per_page)
    offset((number - 1) * per_page).limit(per_page)
  end
end
