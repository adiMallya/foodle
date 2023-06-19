import axios from "axios";
import { toast } from "react-hot-toast";

import { ACTIONS, API_URL } from "src/utils";

const getAllPosts = async (postDispatch) => {
    try {
        const { status, data: { posts } } = await axios.get(`${API_URL}/posts`);
        if (status === 200) {
            postDispatch({ type: ACTIONS.SET_POSTS, payload: posts });
        }
    } catch ({ response }) {
        postDispatch({ type: ACTIONS.SET_ERROR, payload: response.data?.errors });
        console.error(response.data);
    }
};

const getSinglePost = async (postId, postDispatch) => {
    try {
        const { status, data: { post } } = await axios.get(`${API_URL}/posts/${postId}`);
        if (status == 200) {
            postDispatch({ type: ACTIONS.SET_SINGLE_POST, payload: post });
        }
    } catch ({ response }) {
        postDispatch({ type: ACTIONS.SET_ERROR, payload: response.data?.errors });
        console.error(response.data);
    }
};

const createPost = async (encodedToken, postData, postDispatch) => {
    try {
        const {
            status,
            data: { posts }
        } = await axios.post(
            `${API_URL}/posts`,
            { postData },
            { headers: { authorization: encodedToken } }
        );
        if (status === 201) {
            postDispatch({ type: ACTIONS.SET_POSTS, payload: posts });
        }
    } catch ({ response }) {
        postDispatch({ type: ACTIONS.SET_ERROR, payload: response.data?.errors });
        console.error(response.data);
    }
};

const editPost = async (encodedToken, postId, postData, postDispatch) => {
    try {
        const {
            status,
            data: { posts }
        } = await axios.post(
            `${API_URL}/posts/edit/${postId}`,
            { postData },
            { headers: { authorization: encodedToken } }
        );
        if (status === 201) {
            postDispatch({ type: ACTIONS.SET_POSTS, payload: posts });
            toast.success('Post updated');
        }
    } catch ({ response }) {
        postDispatch({ type: ACTIONS.SET_ERROR, payload: response.data?.errors });
        console.error(response.data);
    }
};

const deletePost = async (encodedToken, postId, postDispatch) => {
    try {
        const {
            status,
            data: { posts }
        } = await axios.post(
            `${API_URL}/posts/${postId}`,
            { headers: { authorization: encodedToken } }
        );
        if (status === 201) {
            postDispatch({ type: ACTIONS.SET_POSTS, payload: posts });
            toast.success('Post deleted.', { iconTheme: { color: '#f59e0b' } });
        }
    } catch ({ response }) {
        postDispatch({ type: ACTIONS.SET_ERROR, payload: response.data?.errors });
        console.error(response.data);
    }
};

const likePost = async (encodedToken, postId, postDispatch) => {
    try {
        const {
            status,
            data: { posts }
        } = await axios.post(
            `${API_URL}/posts/like/${postId}`,
            {},
            { headers: { authorization: encodedToken } }
        );
        if (status === 201) {
            postDispatch({ type: ACTIONS.SET_POSTS, payload: posts });
        }
    } catch ({ response }) {
        postDispatch({ type: ACTIONS.SET_ERROR, payload: response.data?.errors });
        console.error(response.data);
    }
};

const dislikePost = async (encodedToken, postId, postDispatch) => {
    try {
        const {
            status,
            data: { posts }
        } = await axios.post(
            `${API_URL}/posts/dislike/${postId}`,
            {},
            { headers: { authorization: encodedToken } }
        );
        if (status === 201) {
            postDispatch({ type: ACTIONS.SET_POSTS, payload: posts });
        }
    } catch ({ response }) {
        postDispatch({ type: ACTIONS.SET_ERROR, payload: response.data?.errors });
        console.error(response.data);
    }
};

export { getAllPosts, getSinglePost, createPost, editPost, deletePost, likePost, dislikePost };