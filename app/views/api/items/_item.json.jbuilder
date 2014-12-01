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
