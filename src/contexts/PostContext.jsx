import { createContext, useContext, useReducer, useEffect } from "react";
import { initialPostState, postReducer, getAllPosts } from "src/features/posts";
import { ACTIONS } from "src/utils";
import { toast } from "react-hot-toast";
const PostContext = createContext({});

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialPostState);

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    getAllPosts(dispatch);
  }, []);

  useEffect(() => {
    if (state?.error) toast.error(state?.error);
    return () => dispatch({ type: ACTIONS.SET_ERROR, payload: null });
  }, [state?.error]);

  return (
    <PostContext.Provider value={{ ...state, postDispatch: dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

const usePostContext = () => useContext(PostContext);

export { PostProvider, usePostContext };
