class Api::FavoritesController < ApplicationController
  def index
    @favorites = current_user.favorites
  end

  def show
    @favorite = Favorite.find(params[:id]) 
  end

  def create
    @favorite = Favorite.new(item_id: params[:item_id])
    @favorite.user_id = current_user.id
    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def destroy
      fail
    favorite = Favorite.find(params[:id])
    favorite.destroy
    render json: {} 
  end

end
