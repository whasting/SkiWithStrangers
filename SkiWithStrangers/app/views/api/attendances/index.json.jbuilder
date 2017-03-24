@attendances.each do |attendance|
  json.set! attendance.id do
    json.extract! attendance, :id, :user_id, :event_id, :waitlist
  end
end
