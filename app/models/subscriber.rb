class Subscriber < ApplicationRecord
  validates :email, presence: true, uniqueness: true,
                    format: {with: URI::MailTo::EMAIL_REGEXP, message: "must be a valid email format"}
  enum status: %i[inactive active]

  after_create_commit :broadcast_new_subscriber

  def broadcast_new_subscriber
    ActionCable.server.broadcast("subscribers", to_json)
  end
end
