class CreateResorts < ActiveRecord::Migration[5.0]
  def change
    create_table :resorts do |t|
      t.string :name, null: false
      t.text :description
      t.string :address
      t.string :resort_logo_url

      t.timestamps
    end
  end
end
