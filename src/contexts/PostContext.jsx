import { createContext, useContext, useReducer } from "react";
import { initialPostState, postReducer } from "src/features/posts";

const PostContext = createContext({});

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialPostState);
  return (
    <PostContext.Provider value={{ ...state, postDispatch: dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

const usePostContext = () => useContext(PostContext);

export { PostProvider, usePostContext };
