json.extract! @item, :id, :title, :price, :description, :image_url, :quantity, :seller_id, :created_at, :updated_at
json.seller @item.seller.username
json.seller_image_url @item.seller.filepicker_url

json.partial! 'reviews', item: @item

