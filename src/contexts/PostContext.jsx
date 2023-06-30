import { createContext, useContext, useReducer, useEffect } from "react";
import { initialPostState, postReducer, getAllPosts } from "src/features/posts";
import { ACTIONS } from "src/utils";

const PostContext = createContext({});

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialPostState);

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    getAllPosts(dispatch);
  }, []);

  return (
    <PostContext.Provider value={{ ...state, postDispatch: dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

const usePostContext = () => useContext(PostContext);

export { PostProvider, usePostContext };
