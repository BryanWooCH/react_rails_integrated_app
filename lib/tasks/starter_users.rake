namespace :dev do
  desc 'create starter users'
  task mock_users: :environment do
    10.times do
      User.create(email: 'somasdlf', password: 'asdlkfjaklsdf', first_name: 'rob', last_name: 'js')  
    end
    puts "Created 10 users called rob successfully!"
  end
end