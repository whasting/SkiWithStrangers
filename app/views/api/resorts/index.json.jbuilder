@resorts.each do |resort|
  json.set! resort.id do
    json.extract! resort, :id, :name, :resort_logo_url
  end
end

# resort: {
#   id: 1,
#   name: "Sierra-at-Tahoe",
#   description: "Lorem ipsum",
#   address: "1234 Sierra-at-Tahoe way",
#   resort_logo_url: "https://www.sierraattahoe.com/"
# }
