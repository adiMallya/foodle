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

    } catch (error) {
        toast.error('Incorrect username or password');
        console.error(error.response.data);
    }
};

const signUpService = async (formData, authDispatch) => {
    try {
        const {
            status,
            data: { createdUser, encodedToken }
        } = await axios.post(`${API_URL}/auth/signup`, {
            ...formData
        });
        if (status === 200) {
            authDispatch({ type: ACTIONS.SET_JWT_TOKEN, payload: encodedToken });
            authDispatch({ type: ACTIONS.SET_USER, payload: createdUser });
            toast.success(`Hi, ${createdUser.firstName}!`, {
                icon: "👋",
            });
        }
    } catch (error) {
        toast.error('Could not register! Please try again.');
        console.error(error.response.data);
    }
};

export { loginService, signUpService };