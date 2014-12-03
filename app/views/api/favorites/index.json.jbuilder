json.array! @favorites do |favorite|
    json.partial! 'favorite', favorite: favorite
end
