class AddEmailToUser < ActiveRecord::Migration
  def change
      add_column :users, :email, :string
      add_column :users, :description, :text

      add_index :users, :username
  end

end
