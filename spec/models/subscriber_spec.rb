require "rails_helper"

RSpec.describe Subscriber, type: :model do
  let(:valid_subscriber) { build :subscriber, email: "newvalidsub@hotwire.fast" }
  let(:invalid_email_subscriber) { build :subscriber, email: "bad email....." }

  it "is a valid subscriber" do
    expect(valid_subscriber).to be_valid
  end

  it "raises an error if the email format is wrong" do
    expect(invalid_email_subscriber).to be_invalid
  end
end
