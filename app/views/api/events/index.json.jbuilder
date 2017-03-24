@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :title, :body, :date, :resort_id, :capacity
    json.set! "guests" do
      event.users.each do |user|
        json.set! user.id do
          json.extract! user, :id, :username, :name
          user.attendances.each do |attendance|
            if attendance.event_id == event.id
              json.extract! attendance, :waitlist
            end
          end
        end
      end
    end
    json.host do
      json.extract! event.user, :id, :username, :name, :photo_url
    end
  end
end
