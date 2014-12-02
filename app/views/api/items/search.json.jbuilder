json.array!(@items) do |item|
  json.(item, :id, :title)
end
