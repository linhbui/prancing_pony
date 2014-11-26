class Api::ItemsController < ApplicationController
  def index
    @items = Item.all
    render json: @items
  end

  def show
    render json: item.find(params[:id]) 
  end

  def create
    @item = Item.new(item_params)
    @item.seller_id = current_user.id
    if @item.save
      render json: @item
    else
      render json: @item.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def destroy
    item = item.find(params[:id])
    item.destroy
    render json: {} 
  end

  private

  def item_params
    params.require(:item).permit(:title, :price, :description, :quantity, :image_url)
  end
end
