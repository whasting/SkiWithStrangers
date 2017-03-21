# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170320223606) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attendances", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "event_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_attendances_on_event_id", using: :btree
    t.index ["user_id", "event_id"], name: "index_attendances_on_user_id_and_event_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_attendances_on_user_id", using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.string   "title",      null: false
    t.text     "body"
    t.datetime "date",       null: false
    t.integer  "resort_id",  null: false
    t.integer  "host_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id"], name: "index_events_on_host_id", using: :btree
    t.index ["resort_id"], name: "index_events_on_resort_id", using: :btree
  end

  create_table "resorts", force: :cascade do |t|
    t.string   "name",            null: false
    t.text     "description"
    t.string   "address"
    t.string   "resort_logo_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "name"
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.boolean  "is_host",         null: false
    t.string   "photo_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
