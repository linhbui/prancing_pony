class CartItems < ActiveRecord::Base
    validates :cart_id, :item_id, presence: :true

    belongs_to :cart
    belongs_to :item
end
