class Api::CartsController < ApplicationController
  before_action :require_current_userl!
  respond_to :json, :only => [:update]

  def show
    @cart_item_ids = session[:cart] || []
    
    if @cart_item_ids
      @cart_items = @cart_item_ids.map { |id| Item.find(id) }.sort
      @price = calculate_price(@cart_item_ids)
    end
    render json: @cart_items
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
    @item_id = params[:cart][:item_id]

    session[:cart].delete(@item_id)

    redirect_to cart_url
  end
  
  # probably can do this on backbone?
  def calculate_price(item_ids)
    item_ids.map { |id| Item.find(id).price }.inject(:+)
  end
end
