class Api::CartsController < ApplicationController
  respond_to :json 

  def show
    cart_item_ids = session[:cart] || []
    
    unless cart_item_ids.empty?
      @cart_items = cart_item_ids.uniq.map { |id| Item.find(id) }.sort
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
    #redirect_to cart_url
  end
  # isn't update date code basically the same with create code?

  def destroy
    item_id = params[:cart][:item_id] #or whatever form of data backbone sent?

    session[:cart].delete(item_id)

    render json: {}
  end
  
  # probably can do this on backbone?
  #def calculate_price(item_ids)
    #item_ids.map { |id| Item.find(id).price }.inject(:+)
  #end
end
