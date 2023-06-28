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
// Cloudinary media upload
const uploadMedia = async (media, setMediaURL) => {
    const mediaType = media.type.split("/")[0];

    if (mediaType === "video" && Math.round(media.size / 1024000) > 10) {
        toast.error("Video size should be less than 10MB");
    } else if (mediaType === "image" && Math.round(media.size / 1024000) > 5) {
        toast.error("Image size should be less than 5MB");
    } else {
        const formData = new FormData();

        formData.append("file", media);
        formData.append("upload_preset", import.meta.env.VITE_REACT_APP_CLOUDINARY_UPLOAD_PRESET);
        formData.append("folder", `twizzle-social/posts/${mediaType}s/`);

        const url = mediaType === 'video' ?
            `${import.meta.env.VITE_REACT_APP_CLOUDINARY_API}/video/upload` :
            `${import.meta.env.VITE_REACT_APP_CLOUDINARY_API}/image/upload`;

        await fetch(url, {
            method: "POST",
            body: formData
        }).then((res) => res.json()).then((json) => {
            setMediaURL(json.url);
            return json.secure_url;
        }).catch(error => {
            toast.error("Media upload failed.");
            console.error(error);
        });
    }
};

export { getAllPosts, getSinglePost, createPost, editPost, deletePost, likePost, dislikePost, uploadMedia };