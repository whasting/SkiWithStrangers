json.extract! @event, :id, :title, :body, :date, :resort_id, :capacity, :host_id
json.set! "guests" do
  json.array! @event.attendances do |attendance|
    json.user_id attendance.user_id
    json.username attendance.user.username
    json.waitlist attendance.waitlist
  end
end
json.host do
  json.extract! @event.user, :id, :username, :photo_url
end
