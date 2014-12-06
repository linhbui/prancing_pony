class Cart < ActiveRecord::Base
    validates :user_id, presence: :true
    belongs_to :user
    has_many(
        :cart_items,
        class_name: "CartItems",
        foreign_key: "cart_id"
    )

    has_many :items, through: :cart_items, source: :cart
end
