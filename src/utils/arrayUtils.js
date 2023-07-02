// Call this method to search through the user db
const getSearchedUsers = (users, searchValue) => [...users].filter(
    (item) =>
        item.firstName.toLowerCase().startsWith(searchValue) ||
        item.lastName.toLowerCase().startsWith(searchValue) ||
        item.username.toLowerCase().startsWith(searchValue)
);

// Call this method to
const updateUserDb = (users, payload) => [...users].map((user) => user._id === payload._id ? payload : user);

// Call this method to sort yours posts
const sortByType = (posts, type) => {
    let sorted = [...posts];
    switch (type) {
        case 'Trending':
            return sorted.sort((a, b) =>
                (a.likes.likeCount + a.comments.length) - (b.likes.likeCount + b.comments.length));
        case 'Oldest':
            return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        default:
            return sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
};

// Call this method to find out if logged user has liked any posts on their feed
const isLikedByUser = (post, username) => post?.likes.likedBy?.some(likedUser => likedUser.username === username);

// Call this method to find out if logged user has saved any posts on their feed
const isSavedByUser = (bookmarks, postId) => bookmarks.some((post) => post._id === postId);


export { getSearchedUsers, updateUserDb, sortByType, isLikedByUser, isSavedByUser };