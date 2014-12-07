class Api::ItemsController < ApplicationController
    def index
        if params[:favorite]
            @items = current_user.favorite_items.includes(:reviews)
        elsif params[:category]
            @category = Category.find(params[:category])
            @items = @category.items.includes(:reviews)
        else 
            @items = Item.includes(:reviews).all
        end
        @items = @items.page(params[:page]).per(3)
        render :index
    end

  def show
    @item = Item.includes(:reviews).find(params[:id]) 
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
    item = Item.find(params[:id])
    item.destroy
    render json: {} 
  end

  def search
    if params[:query].present?
      @items = Item.where("lower(title) ~ ?", params[:query].downcase)
    else
      @item = Item.none
    end

    respond_to do |format|
      format.html { render :search }
      format.json { render :search }
    end
  end

  private

  def item_params
    params.require(:item).permit(:title, :price, :description, :quantity, :image_url)
  end
end
