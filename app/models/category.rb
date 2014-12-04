class Category < ActiveRecord::Base
  validates :tagname, presence: :true
end
