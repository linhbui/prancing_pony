class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title, null: false
      t.decimal :price, null: false
      t.text :description, null: false
      t.string :image_url
      t.string :quantity
      t.integer :seller_id

      t.timestamps
    end

      add_index :items, :seller_id
      add_index :items, :title
  end
end
