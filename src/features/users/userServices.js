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
        toast.error('Something went wrong.');
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
        toast.error(response.data);
        console.error(response.data);
    }
};

const followUser = async (followId, encodedToken) => {
    try {
        const {
            status,
            data: { user, followUser }
        } = await axios.post(`${API_URL}/users/follow/${followId}`,
            {},
            { headers: { authorization: encodedToken } }
        );
        if (status === 200) {
            return { user, followUser };
        }

    } catch ({ response }) {
        toast.error(response.data);
        console.error(response.data);
    }
};

const unfollowUser = async (followId, encodedToken) => {
    try {
        const {
            status,
            data: { user, followUser }
        } = await axios.post(`${API_URL}/users/unfollow/${followId}`,
            {},
            { headers: { authorization: encodedToken } }
        );
        if (status === 200) {
            return { user, followUser };
        }
    } catch ({ response }) {
        toast.error(response.data);
        console.error(response.data);
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
        toast.error(response.data);
        console.error(response.data);
    }
};

const addToSavedPosts = async (postId, encodedToken, userDispatch) => {
    try {
        const {
            status,
            data: { bookmarks }
        } = await axios.post(`${API_URL}/users/bookmark/${postId}`,
            { headers: { authorization: encodedToken } }
        );
        if (status === 200) {
            userDispatch({ type: ACTIONS.SET_BOOKMARKS, payload: bookmarks });
        }
    } catch ({ response }) {
        toast.error(response.data);
        console.error(response.data);
    }
};

const removeSavedPost = async (postId, encodedToken, userDispatch) => {
    try {
        const {
            status,
            data: { bookmarks }
        } = await axios.post(`${API_URL}/users/remove-bookmark/${postId}`,
            { headers: { authorization: encodedToken } }
        );
        if (status === 200) {
            userDispatch({ type: ACTIONS.SET_BOOKMARKS, payload: bookmarks });
        }
    } catch ({ response }) {
        toast.error(response.data);
        console.error(response.data);
    }
};


export { getAllUsers, updateProfile, followUser, unfollowUser, getSavedPosts, addToSavedPosts, removeSavedPost };