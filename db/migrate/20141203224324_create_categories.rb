class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :tagname, null: false

      t.timestamps
    end
  end
end
