@attendances.each do |attendance|
  json.set! attendance.id do
    json.extract! attendance, :id, :user_id, :event_id, :waitlist
    json.set! "event" do
      json.extract! attendance.event, :id, :title, :body, :date, :capacity, :resort_id, :host_id
      json.set! "guests" do
        json.array! attendance.event.attendances do |attendance|
          json.user_id attendance.user_id
          json.username attendance.user.username
          json.waitlist attendance.waitlist
        end
      end
      json.host do
        json.extract! attendance.event.user, :id, :username, :name, :photo_url
      end
    end
  end
end
