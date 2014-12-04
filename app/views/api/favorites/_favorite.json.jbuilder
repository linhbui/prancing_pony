json.extract! favorite, :id, :user_id, :item_id

json.user favorite.user.username
json.user_image_url favorite.user.filepicker_url

json.item_id favorite.item.id
json.item_title favorite.item.title
json.item_image_url favorite.item.image_url
json.item_price favorite.item.price
json.item_description favorite.item.description
json.item_seller favorite.item.seller.username
json.item_seller_image favorite.item.seller.filepicker_url
