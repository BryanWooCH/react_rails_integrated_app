Rails.application.routes.draw do
  get '/sessions/new'
  post '/sessions', to: 'sessions#create'
  delete '/sessions', to: 'sessions#destroy'

  # resources :sessions

  resources :users
  # get '/users', to: 'users#index'
  # get '/users/new', to: 'users#new'
  # get '/users/:id/edit', to: 'users#edit'
  # post '/users', to: 'users#create'
  # post '/users/:id', to: 'users#update'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/', to: 'landing_page#index'

  namespace :api do
    get 'burgerLayers', to: 'burger#show'
    post 'burgerLayers', to: 'burger#update'
  end
end
