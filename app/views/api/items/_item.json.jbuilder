json.extract! item, :id, :title, :price, :description, :image_url, :seller_id, :created_at, :updated_at 

json.seller item.seller.username
json.seller_image_url item.seller.filepicker_url

json.reviews do
  json.array! item.reviews do |review|
    json.extract! review, :id, :content, :stars, :item_id, :author_id, :created_at, :updated_at

    json.author review.author.username
    json.author_image_url review.author.filepicker_url
  end
end

json.favorites do
  json.array! item.favorites do |favorite|
    json.extract! favorite, :id, :user_id
    json.user favorite.user.username
    json.user_image_url favorite.user.filepicker_url
    json.user_id favorite.user.id
  end
end
