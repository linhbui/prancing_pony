class AddColumnsToFavorites < ActiveRecord::Migration
  def change
      add_column :favorites, :user_id, :integer, null: false
      add_column :favorites, :item_id, :integer, null: false
  end
end
