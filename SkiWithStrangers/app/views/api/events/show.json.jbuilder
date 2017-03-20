json.set! @event.id do
  json.extract! @event, :id, :title, :date, :resort_id
  json.host do
    json.extract! @event.user, :id, :username, :photo_url
  end
end
