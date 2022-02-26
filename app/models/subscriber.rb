class Subscriber < ApplicationRecord
  validates :email, presence: true, uniqueness: true,
                    format: {with: URI::MailTo::EMAIL_REGEXP, message: "must be a valid email format"}
  enum status: %i[inactive active]
end
