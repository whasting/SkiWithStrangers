# == Schema Information
#
# Table name: attendances
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  waitlist   :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Attendance < ApplicationRecord
  validates :user_id, :event_id, presence: true
  validates_uniqueness_of :user_id, scope: [:event_id]

  belongs_to :user
  belongs_to :event
end
