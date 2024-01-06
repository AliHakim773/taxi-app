users()
1 user can have many posts
1 post can be for only one user
posts(
  post id
  caption
  image_url
  user_id
)
users_has_users(
  user_id
  follower_id
)
1 user can follow many users
many users can be followed by you 
many to many