const getSearchedUsers = (users, searchValue) => [...users].filter(
    (item) =>
        item.firstName.toLowerCase().startsWith(searchValue) ||
        item.lastName.toLowerCase().startsWith(searchValue) ||
        item.username.toLowerCase().startsWith(searchValue)
);

const updateUserDb = (users, payload) => [...users].map((user) => user._id === payload._id ? payload : user);

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

const isLikedByUser = (post, username) => post?.likes.likedBy?.some(likedUser => likedUser.username === username);

export { getSearchedUsers, updateUserDb, sortByType, isLikedByUser };