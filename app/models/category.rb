class Category < ActiveRecord::Base
  validates :tagname, presence: :true
  has_many :category_items
  has_many :items, through: :category_items, source: :item
end
