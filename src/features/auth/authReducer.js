import { ACTIONS } from "src/utils";

const initialAuthState = {
    authToken: localStorage.getItem("authToken") || null,
    authUser: JSON.parse(localStorage.getItem("authUser")) || {},
    isLoading: true
};

const authReducer = (state, { type, payload }) => {
    switch (type) {
        case ACTIONS.SET_JWT_TOKEN:
            localStorage.setItem("authToken", payload);
            return {
                ...state,
                authToken: payload,
                isLoading: false
            };
        case ACTIONS.SET_USER:
            localStorage.setItem("authUser", payload);
            return {
                ...state,
                authUser: payload,
                isLoading: false
            };
        case ACTIONS.LOG_OUT:
            localStorage.removeItem("authToken");
            localStorage.removeItem("authUser");
            return {
                ...state,
                authToken: null,
                authUser: {},
                isLoading: true
            };
        default: return state;
    }
};

export { initialAuthState, authReducer };