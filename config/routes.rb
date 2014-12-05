Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users, only: [:create, :new]

  resource :session, only: [:create, :new, :destroy, :show]    

  namespace :api, defaults: { format: :json }  do
    resources :items do
       get "search", on: :collection
    end
    resource :cart, only: [:show, :create, :destroy]

    resources :reviews
    
    resources :favorites, only: [:index, :show, :create, :destroy]
  end
end
