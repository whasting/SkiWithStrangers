class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :name
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.boolean :is_host, null: false
      t.string :photo_url

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
