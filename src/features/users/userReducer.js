import { ACTIONS } from "src/utils";

const intialUserState = {
    users: [],
    bookmarks: [],
    searchValue: "",
    searchResults: [],
    isLoading: true,
    error: null
};

const userReducer = (state, { type, payload }) => {
    switch (type) {
        case ACTIONS.SET_USERS:
            return {
                ...state,
                users: [...payload],
                isLoading: false
            };
        case ACTIONS.SET_BOOKMARKS:
            return {
                ...state,
                bookmarks: [...payload],
                isLoading: false
            };
        case ACTIONS.SEARCH:
            return {
                ...state,
                searchValue: payload.toLowerCase()
            };
        case ACTIONS.SET_RESULTS:
            return {
                ...state,
                searchResults: [...payload]
            };
        case ACTIONS.SET_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case ACTIONS.SET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        default: return state;
    }
};

export { intialUserState, userReducer };