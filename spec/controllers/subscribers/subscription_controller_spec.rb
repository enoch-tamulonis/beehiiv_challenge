# frozen_string_literal: true

require "rails_helper"

RSpec.describe Subscribers::SubscriptionController, type: :controller do
  before { Subscriber.destroy_all }
  let(:subscriber) { create :subscriber, email: "testuser@testout.com" }

  describe "PATCH /subscribers/:id/subscription" do
    it "returns 200 if it successfully updates a subscriber" do
      subscription_params = {subscriber_id: subscriber.id, subscription: {status: "inactive"}}
      patch :update, params: subscription_params, format: :json

      expect(response).to have_http_status(:ok)
      expect(response.content_type).to eq("application/json; charset=utf-8")

      json = JSON.parse(response.body, symbolize_names: true)
      expect(json[:message]).to eq "Subscription was successfully updated"
    end
  end
end
