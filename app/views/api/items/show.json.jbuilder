json.extract! @item, :id, :title, :price, :description, :image_url, :quantity, :seller_id, :created_at, :updated_at
json.seller @item.seller.username
json.seller_image_url @item.seller.filepicker_url

json.reviews do
  json.array! @item.reviews do |review|
    json.extract! review, :id, :content, :stars, :item_id, :user_id, :updated_at
    json.user do
      json.extract! review.user, :id, :username, :filepicker_url
    end
  end
end

#json.array! @items do |item|
    #json.extract! item, :id, :title, :price, :description, :image_url, :seller_id, :created_at, :updated_at 
    
    #json.seller item.seller.username
    #json.seller_image_url item.seller.filepicker_url
#end
