# Beehiiv - Challenge

## View the completed challenge
  You can view the completed challenge live [here](https://beehiivchallenge.herokuapp.com/)
  
  username is `username`
  
  password is `password`

### What is Challenge?

Challenge is a rails/react app meant to be used with our code challenge assignment. Use this as the starting point for your code challenge.

## The Stack

#### Server
- Language
  - Ruby 2.7
  - Rails 6
  - Node 14

# Development Getting Started

    # Clone and setup repo
    git clone git@github.com:beehiiv/challenge.git
    cd challenge

    # Install and setup server dependencies
    bundle install
    bundle exec rake db:create db:migrate
    yarn install

## Run it

    # Backend (http://localhost:2000)
    bundle exec foreman start

    # Frontend (http://localhost:2001)
    yarn watch:app

## Test It

    # Setup test DB for testing
    ./scripts/setup_test_db

    # Run tests
    bundle exec rspec

## Lint It

    bundle exec standardrb

## What it contains

### Index Page

![image](https://user-images.githubusercontent.com/5751986/148653166-031d7c6e-8dc2-4db9-9d28-3db71a8599d9.png)

### Add Subscriber Modal

![image](https://user-images.githubusercontent.com/5751986/148653171-4a30cf43-5f42-435c-bc68-82f44524ee50.png)

### Update Subscriber Status Modal

![image](https://user-images.githubusercontent.com/5751986/148653182-3a282533-dbb8-4d96-a511-5a5008cf3daf.png)
