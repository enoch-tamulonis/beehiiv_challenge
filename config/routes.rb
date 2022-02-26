Rails.application.routes.draw do
  resources :subscribers, only: %i[index create update] do
    scope module: :subscribers do
      resource :subscription, only: %i[update], controller: "subscription"
    end
  end
end
