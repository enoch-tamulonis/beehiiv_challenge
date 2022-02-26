# frozen_string_literal: true

class SubscribersController < ApplicationController
  include PaginationMethods
  # GET /api/subscribers
  def index
    subscribers = Subscriber.all.order(created_at: :desc)
    total_records = subscribers.count
    limited_subscribers = subscribers.drop(offset).first(limit)

    render json: {subscribers: limited_subscribers, pagination: pagination(total_records)}, formats: :json
  end

  def create
    subscriber = Subscriber.new(subscriber_params)
    if subscriber.save
      render json: {message: "Subscriber created successfully", subscriber: subscriber}, formats: :json, status: :created
    else
      render json: {errors: subscriber.errors}, formats: :json, status: :unprocessable_entity
    end
  end

  private

  def subscriber_params
    params.require(:subscriber).permit(:email, :name)
  end
end
