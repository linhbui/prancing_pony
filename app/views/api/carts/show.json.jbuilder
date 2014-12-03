json.array! @cart_items do |item|
    json.partial! 'item', item: item
end
