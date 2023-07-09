<h1 align="center" style="color:#fbbf24; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">foodle</h1>

<p align="center">
Spotlighting yum, one post at a time.</br>
<!-- <img width="220px" src="" alt="mylogo"/> -->
<!-- </br> Ask what you want to and let the community respond to help you. -->
</p><br>

## Getting Started :heavy_check_mark:

```bash
# Clone this repository
$ git clone https://github.com/adiMallya/foodle.git && cd commerch

# Install dependencies
$ yarn

# Create a .env file to add your JSON web token & cloudinary variables for the app. You can refer the `env.sample` file.

# To run the app
$ yarn run

# To create a production build
$ yarn build && yarn run
```

The server would start on [localhost:5173](http://localhost:5173/)

## Key Features

- [x] Authentication - Log in/Sign-Up
- [x] User Feed - posts of user & their following
- Filter posts on feed by
  - [x] Trending
  - [x] Latest
  - [x] Oldest
- [x] Create/Edit post - text & media supported
- [x] Explore page - posts of All users on the app
- [x] Search users - by username, first or last name
- [x] User suggestions - user can find new people to follow
- [x] Follow/unfollow users
- [x] Like/unlike posts
- [x] Save/bookmark posts
- [x] Share posts - copy post link to clipboard
- [x] User profile
  - [x] Logged in user can add/edit bio/website details
  - [x] Logged in user can edit their profile avatar
    - [x] Choose avatar from list
    - [x] Upload image
  - [x] View other user profiles
  - [x] View user follower & following list
- [ ] Infinite scroll
- [ ] Emojis in posts
- [ ] Comment on posts

## Built with

- ReactJs
- React Context API + useReducer
- React Router v6
- Mock backend
- Styled components
- Cloudinary for media storage
- react-hot-toast
- react-spinner

## ⚠️ Note

There is no backend setup for this project currently. Hence, no posts(except those already existing in the mock db) are persisted.
