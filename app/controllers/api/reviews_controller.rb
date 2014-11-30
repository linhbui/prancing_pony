class Api::ReviewsController < ApplicationController
  def index
    @reviews = review.all
  end

  def show
    @review = review.find(params[:id]) 
  end

  def create
    item = Item.find(params[:id])
    @review = review.new(review_params)
    @review.author_id = current_user.id
    @review.item_id = item.id
    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def destroy
    review = review.find(params[:id])
    review.destroy
    render json: {} 
  end

  private

  def review_params
    params.require(:review).permit(:content, :star)
  end
end
