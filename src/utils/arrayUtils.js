const getSearchedUsers = (users, searchValue) => users.filter(
    (item) =>
        item.firstName.toLowerCase().startsWith(searchValue) ||
        item.lastName.toLowerCase().startsWith(searchValue) ||
        item.username.toLowerCase().startsWith(searchValue)
);

const updateUserDb = (users, payload) => [...users].map((user) => user._id === payload._id ? payload : user);

export { getSearchedUsers, updateUserDb };