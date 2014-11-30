class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :stars, null: false
      t.text :content, null: false
      t.integer :author_id, null: false
      t.integer :item_id, null: false

      t.timestamps
    end

    add_index :reviews, :item_id
  end
end
