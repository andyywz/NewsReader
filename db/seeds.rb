# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Feed.find_or_create_by_url("http://sports.espn.go.com/espn/rss/news")
Feed.find_or_create_by_url("http://soccernet.espn.go.com/rss/news")
Feed.find_or_create_by_url("http://sports.espn.go.com/espn/rss/nba/news")