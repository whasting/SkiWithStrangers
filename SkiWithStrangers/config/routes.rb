Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :resorts, except: [:new, :edit] do
      resources :events, except: [:new, :edit]
    end
    resources :events, except: [:new, :edit]
  end
end
