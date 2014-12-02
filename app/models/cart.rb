class Cart < ActiveRecord::Base
    validates :user_id, presence: :true
    belongs_to :user
    has_many(
        :cart_items,
        class_name: "CartItems",
        foreign_key: "cart_id"
    )

    has_many :carts, through: :cart_itmes, source: :cart
end
