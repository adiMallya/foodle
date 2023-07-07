import axios from "axios";
import { toast } from "react-hot-toast";

import { ACTIONS, API_URL } from "src/utils";

const loginService = async (username, password, authDispatch) => {
    try {
        const {
            status,
            data: { foundUser, encodedToken }
        } = await axios.post(`${API_URL}/auth/login`, {
            username, password
        });
        if (status === 200) {
            authDispatch({ type: ACTIONS.SET_JWT_TOKEN, payload: encodedToken });
            authDispatch({ type: ACTIONS.SET_USER, payload: foundUser });
            toast.success(`Welcome back, ${foundUser.firstName}!`);
        }

    } catch ({ response }) {
        toast.error(response.data?.errors);
        console.error(response.data);
    }
};

const signUpService = async (formData, authDispatch) => {
    try {
        const {
            status,
            data: { createdUser, encodedToken }
        } = await axios.post(`${API_URL}/auth/signup`, {
            ...formData,
            bio: "",
            website: "",
            profileAvatar: "https://res.cloudinary.com/dtaztriby/image/upload/v1686945718/twizzle-social/avatars/default-avatar-profile-icon-vector-social-media-user-portrait-176256935_okhbl4.jpg",
        });
        if (status === 201) {
            authDispatch({ type: ACTIONS.SET_JWT_TOKEN, payload: encodedToken });
            authDispatch({ type: ACTIONS.SET_USER, payload: createdUser });
            toast.success(`Hi, ${createdUser.firstName}!`, {
                icon: "👋",
            });
        }
    } catch ({ response }) {
        toast.error(response.data?.errors);
        console.error(response.data);
    }
};

export { loginService, signUpService };