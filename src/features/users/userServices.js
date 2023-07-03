import axios from "axios";
import { toast } from "react-hot-toast";

import { ACTIONS, API_URL } from "src/utils";

const getAllUsers = async (userDispatch) => {
    try {
        const { status, data: { users } } = await axios.get(`${API_URL}/users`);
        if (status === 200) {
            userDispatch({ type: ACTIONS.SET_USERS, payload: users });
        }
    } catch ({ response }) {
        userDispatch({ type: ACTIONS.SET_ERROR, payload: response?.data?.error });
        console.error(response.data);
    }
};

const updateProfile = async (encodedToken, userData) => {
    try {
        const {
            status,
            data: { user }
        } = await axios.post(
            `${API_URL}/users/edit`,
            { userData },
            { headers: { authorization: encodedToken } }
        );
        if (status === 201) {
            return user;
        }
    } catch ({ response }) {
        toast.error(response.data?.errors);
        console.error(response.data);
    }
};

const followUser = async (followId, encodedToken, authDispatch) => {
    try {
        const {
            status,
            data: { user, followUser }
        } = await axios.post(`${API_URL}/users/follow/${followId}`,
            {},
            { headers: { authorization: encodedToken } }
        );
        if (status === 200) {
            authDispatch({ type: ACTIONS.SET_USER, payload: user });
            toast.success(`You started following ${followUser?.username}.`);
        }

    } catch ({ response }) {
        authDispatch({ type: ACTIONS.SET_ERROR, payload: response.data?.errors });
        console.error(response.data?.errors);
    }
};

const unfollowUser = async (followId, encodedToken, authDispatch) => {
    try {
        const {
            status,
            data: { user, followUser }
        } = await axios.post(`${API_URL}/users/unfollow/${followId}`,
            {},
            { headers: { authorization: encodedToken } }
        );
        if (status === 200) {
            authDispatch({ type: ACTIONS.SET_USER, payload: user });
            toast.success(`You unfollowed ${followUser?.username}.`);
        }
    } catch ({ response }) {
        authDispatch({ type: ACTIONS.SET_ERROR, payload: response.data?.errors });
        console.error(response.data?.errors);
    }
};

const getSavedPosts = async (encodedToken, userDispatch) => {
    try {
        const {
            status,
            data: { bookmarks }
        } = await axios.get(`${API_URL}/users/bookmark`,
            { headers: { authorization: encodedToken } }
        );
        if (status === 200) {
            userDispatch({ type: ACTIONS.SET_BOOKMARKS, payload: bookmarks });
        }
    } catch ({ response }) {
        userDispatch({ type: ACTIONS.SET_BOOKMARKS, payload: response.data?.errors });
        console.error(response.data);
    }
};

const addToSavedPosts = async (postId, encodedToken, userDispatch) => {
    try {
        const {
            status,
            data: { bookmarks }
        } = await axios.post(`${API_URL}/users/bookmark/${postId}`, {},
            { headers: { authorization: encodedToken } }
        );
        if (status === 200) {
            userDispatch({ type: ACTIONS.SET_BOOKMARKS, payload: bookmarks });
        }
    } catch ({ response }) {
        userDispatch({ type: ACTIONS.SET_ERROR, payload: response.data?.errors });
        console.error(response.data);
    }
};

const removeSavedPost = async (postId, encodedToken, userDispatch) => {
    try {
        const {
            status,
            data: { bookmarks }
        } = await axios.post(`${API_URL}/users/remove-bookmark/${postId}`, {},
            { headers: { authorization: encodedToken } }
        );
        if (status === 200) {
            userDispatch({ type: ACTIONS.SET_BOOKMARKS, payload: bookmarks });
        }
    } catch ({ response }) {
        userDispatch({ type: ACTIONS.SET_ERROR, payload: response.data?.errors });
        console.error(response.data);
    }
};


export { getAllUsers, updateProfile, followUser, unfollowUser, getSavedPosts, addToSavedPosts, removeSavedPost };