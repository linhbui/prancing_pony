class Item < ActiveRecord::Base
    validates :title, :price, :description, presence: :true
    belongs_to(
        :seller,
        class_name: "User", 
        foreign_key: "seller_id",
        inverse_of: :items
    ) 
end
