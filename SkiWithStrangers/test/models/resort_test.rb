# == Schema Information
#
# Table name: resorts
#
#  id              :integer          not null, primary key
#  name            :string           not null
#  description     :text
#  address         :string
#  resort_logo_url :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class ResortTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
