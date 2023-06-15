import axios from "axios";

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
        }

    } catch (error) {
        console.error(error);
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
        }
    } catch (error) {
        console.error(error);
    }
};

export { loginService, signUpService };