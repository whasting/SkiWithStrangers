class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :body
      t.datetime :date, null: false
      t.integer :capacity
      t.integer :resort_id, null: false
      t.integer :host_id, null: false

      t.timestamps
    end
    add_index :events, :resort_id
    add_index :events, :host_id
  end
end
