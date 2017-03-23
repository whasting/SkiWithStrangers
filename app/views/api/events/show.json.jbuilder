json.set! @event.id do
  json.extract! @event, :id, :title, :body, :date, :resort_id, :capacity
  json.set! "guests" do
    @event.users.each do |user|
      json.set! user.id do
        json.extract! user, :id, :username, :name
      end
    end
  end
  json.host do
    json.extract! @event.user, :id, :username, :photo_url
  end
end
