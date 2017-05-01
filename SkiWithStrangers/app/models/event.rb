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
      result = (Event
        .joins("LEFT JOIN attendances ON attendances.event_id = events.id")
        .where("attendances.user_id = ? OR host_id = ?", user_id, user_id))
      # result.concat(Event
      #   .where(host_id: user_id))
      p result
      result
    elsif resort_id != -1
      Event.where(resort_id: resort_id)
    end
  end
end
