class SessionsController < ApplicationController
  def new
    render :new
  end

  def show
      @current_user = current_user
      #render json: current_user
      render 'show.json.jbuilder'
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      flash.now[:errors] = ["bad sign in"]
      render :new
    else
      login! @user
      redirect_to root_url
    end
  end

  def destroy
    logout
    session[:cart] = nil
    redirect_to new_session_url
  end
end
