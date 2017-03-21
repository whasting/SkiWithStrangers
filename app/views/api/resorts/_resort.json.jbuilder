json.extract! resort, :id, :name, :description, :address, :resort_logo_url
json.set! "events" do
  resort.events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :title, :date, :resort_id
      json.host do
        json.extract! event.user, :id, :username, :name, :photo_url
      end
    end
  end
end

# json.set! events do
#   resort.events.each do |event|
#     json.set! event.id do
#       json.extract! event, :id, :title, :date, :resort_id
#       json.host do
#         json.extract! event.user, :id, :username, :photo_url
#       end
#     end
#   end
# end

# resort: {
#   id: 1,
#   name: "Sierra-at-Tahoe",
#   description: "Lorem ipsum",
#   address: "1234 Sierra-at-Tahoe way",
#   resort_logo_url: "https://www.sierraattahoe.com/"
# }
