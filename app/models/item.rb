class Item < ActiveRecord::Base
    validates :title, :price, :description, presence: :true
    belongs_to(
        :seller,
        class_name: "User", 
        foreign_key: "seller_id",
        inverse_of: :items
    ) 

    has_many(
        :reviews,
        class_name: "Review",
        foreign_key: "item_id",
        inverse_of: :item
    )

    has_many :favorites
    has_many :category_items
    has_many :categories, through: :category_items, source: :category


    def favorited_by_user(user)
       favorite = self.favorites.select { |favorite| favorite.user_id == user.id }.first
       favorite ? favorite.id : nil
    end
end
