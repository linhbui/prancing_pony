Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users, only: [:create, :new]

  resource :session, only: [:create, :new, :destroy]    

  namespace :api, defaults: { format: :json }  do
    resources :items do
       get "search", on: :collection
    end
    resource :cart, only: [:show] do
      put 'add/:item_id', to: 'carts#add', as: :add_to
      put 'remove/:item_id', to: 'carts#remove', as: :remove_from
    end

    resources :reviews
  end
end
