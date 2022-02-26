class SubscribersChannel < ApplicationCable::Channel
  def subscribed
    stream_from "subscribers"
  end
end
