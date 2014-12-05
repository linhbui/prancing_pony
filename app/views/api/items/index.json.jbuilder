#paginate @items
json.models @items do |item|
    json.partial! 'item', item: item
end
json.page params[:page] || "1"
json.total_pages @items.total_pages

@category = @category || nil

json.category @category
