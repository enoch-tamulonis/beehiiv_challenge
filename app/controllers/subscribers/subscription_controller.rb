module Subscribers
  class SubscriptionController < ApplicationController
    before_action :set_subscriber
    def update
      if @subscriber.update(subscription_params)
        render json: {message: "Subscription was successfully updated"}, formats: :json, status: :ok
      else
        render json: {errors: @subscriber.errors}, formats: :json, status: :unprocessable_entity
      end
    end

    private

    def set_subscriber
      @subscriber = Subscriber.find(params[:subscriber_id])
    end

    def subscription_params
      params.require(:subscription).permit(:status)
    end
  end
end
