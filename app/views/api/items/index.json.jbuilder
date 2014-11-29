json.array! @items do |item|
    json.id item.id
    json.title item.title
    json.price item.price
    json.description item.description
    json.image_url item.image_url
    json.seller_id item.seller_id
    json.created_at item.created_at
    json.updated_at item.updated_at

    json.seller item.seller.username
    json.seller_image_url item.seller.filepicker_url
end
