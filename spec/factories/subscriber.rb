FactoryBot.define do
  factory :subscriber do
    email { "ricky555@citymail.com" }

    trait :with_name do
      name { "Rick Sanchez" }
    end

    trait :active do
      status { "active" }
    end
  end
end
