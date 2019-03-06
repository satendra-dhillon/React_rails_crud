# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



posts = ['Post 1', 'Post 2', 'Post 3', 'Post 4']

posts.each{|post| Post.create(title: post, description: "This is my #{post}.")}