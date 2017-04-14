@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :title, :body, :date, :capacity, :resort_id, :host_id
    json.set! "guests" do
      json.array! event.attendances do |attendance|
        json.user_id attendance.user_id
        json.username attendance.user.username
        json.waitlist attendance.waitlist
      end
    end
    json.host do
      json.extract! event.user, :id, :username, :name, :photo_url
    end
  end
end
