class Review < ActiveRecord::Base
    validates :content, :stars, :item_id, :author_id, presence: :true

    belongs_to(
        :author,
        class_name: "User",
        foreign_key: "author_id",
        inverse_of: :reviews
    )

    belongs_to(
        :item,
        class_name: "Item",
        foreign_key: "item_id",
        inverse_of: :reviews
    )
end
