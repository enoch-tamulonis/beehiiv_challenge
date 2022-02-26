# frozen_string_literal: true

require "rails_helper"

RSpec.describe SubscribersController, type: :controller do
  describe "GET /subscribers" do
    it "returns 200 and a list of subscribers and pagination object" do
      get :index, params: {}, format: :json

      expect(response).to have_http_status(:ok)
      expect(response.content_type).to eq("application/json; charset=utf-8")

      json = JSON.parse(response.body, symbolize_names: true)
      expect(json[:subscribers]).not_to be_nil
      expect(json[:pagination]).not_to be_nil
    end
  end

  describe "POST /subscribers" do
    it "returns 201 if it successfully creates a subscriber" do
      subscriber_params = {
        subscriber: {
          email: "test@test.com",
          name: "John Smith"
        }
      }
      post :create, params: subscriber_params, format: :json

      expect(response).to have_http_status(:created)
      expect(response.content_type).to eq("application/json; charset=utf-8")

      json = JSON.parse(response.body, symbolize_names: true)
      expect(json[:message]).to eq "Subscriber created successfully"
    end
  end
end
