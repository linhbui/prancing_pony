class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title, null: false
      t.decimal :price, null: false
      t.text :description, null: false
      t.string :image_url
      t.integer :quantity
      t.integer :seller_id
      t.integer :cart_id

      t.timestamps
    end
  end
end
