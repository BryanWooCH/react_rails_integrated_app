module ApplicationHelper
  def logged_in?
    if User.find_by(id: session[:id])
      true
    else
      false
    end
  end
end
