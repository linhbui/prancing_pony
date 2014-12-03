class Api::CartsController < ApplicationController
  respond_to :json 

  def show
    cart_item_ids = session[:cart] || []
    
    unless cart_item_ids.empty?
      @cart_items = cart_item_ids.map { |id| Item.find(id) }.sort
    else
        @cart_items = []
    end
    render json: {items: @cart_items}
  end

  def create
    session[:cart] ||= []

    item_id = params[:item_id]
    session[:cart] << item_id

    render json: {} 
  end

  def destroy
    item_id = params[:item_id].to_i 
    session[:cart].delete(item_id)

    render json: {}
  end
  
end
