import { ACTIONS } from "src/utils";

const initialPostState = {
    posts: [],
    singlePost: null,
    sortBy: "Latest",
    isLoading: true,
    error: null
};

const postReducer = (state, { type, payload }) => {
    switch (type) {
        case ACTIONS.SET_POSTS:
            return {
                ...state,
                posts: [...payload],
                isLoading: false
            };
        case ACTIONS.SET_SINGLE_POST:
            return {
                ...state,
                singlePost: payload,
                isLoading: false
            };
        case ACTIONS.SORT_BY:
            return { ...state, sortBy: payload };
        case ACTIONS.SET_LOADING:
            return { ...state, isLoading: payload };
        case ACTIONS.SET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        default: return state;
    }
};

export { initialPostState, postReducer };
