# == Schema Information
#
# Table name: events
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text
#  date       :datetime         not null
#  resort_id  :integer          not null
#  host_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Event < ApplicationRecord
  validates :title, :date, :resort_id, :host_id, null: false

  belongs_to :resort
  belongs_to :user,
    foreign_key: :host_id

  has_many :attendances
end
