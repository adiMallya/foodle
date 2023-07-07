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
        userDispatch({ type: ACTIONS.SET_ERROR, payload: response.data?.errors });
        console.error(response.data?.errors);
    }
};

const updateProfile = async (encodedToken, userData, authDispatch) => {
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
            authDispatch({ type: ACTIONS.SET_USER, payload: user });
            toast.success('Profile updated.');
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
        userDispatch({ type: ACTIONS.SET_ERROR, payload: response.data?.errors });
        console.error(response.data?.errors);
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
        console.error(response.data?.errors);
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
        console.error(response.data?.errors);
    }
};
// Cloudinary media upload
const uploadAvatar = async (media) => {
    if (Math.round(media.size / 1024000) > 5) {
        toast.error("Image size should be less than 5MB");
    } else {
        const formData = new FormData();

        formData.append("file", media);
        formData.append("upload_preset", import.meta.env.VITE_REACT_APP_CLOUDINARY_UPLOAD_PRESET);
        formData.append("folder", `twizzle-social/avatars/`);

        await fetch(`${import.meta.env.VITE_REACT_APP_CLOUDINARY_API}/image/upload`, {
            method: "POST",
            body: formData
        }).then((res) => res.json()).then((json) => {
            return json.url;
        }).catch(error => {
            toast.error("Avatar upload failed.");
            console.error(error);
        });
    }
};


export { getAllUsers, updateProfile, followUser, unfollowUser, getSavedPosts, addToSavedPosts, removeSavedPost, uploadAvatar };