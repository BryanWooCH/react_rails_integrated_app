class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    User.create(user_create_params)
    redirect_to '/users'
  end

  def user_create_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
