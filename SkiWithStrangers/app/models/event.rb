# == Schema Information
#
# Table name: events
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text
#  date       :datetime         not null
#  capacity   :integer
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
  has_many :users,
    through: :attendances

  def self.filter(attributes = {})
    resort_id = attributes[:resort_id].to_i
    user_id = attributes[:user_id].to_i

    if resort_id == -1 && user_id == -1
      Event.all
    elsif user_id != -1
      Event
        .joins(:attendances)
        .where("attendances.user_id = ?", user_id)
    elsif resort_id != -1
      Event.where(resort_id: resort_id)
    end
  end
end
