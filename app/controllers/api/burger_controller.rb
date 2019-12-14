module Api
  class BurgerController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def show
      render json: { burgerLayers: Burger.first&.layers || [] }
    end

    def update
      Burger.first&.update(layers: params[:data]) || Burger.create(layers: params[:data])
    end
  end
end
