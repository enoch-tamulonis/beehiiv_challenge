web: bundle exec puma -w ${WEB_CONCURRENCY:-3} -p ${PORT:-2000} -e ${RACK_ENV:-development} -C ./config/puma.rb
release: bundle exec rails db:migrate
