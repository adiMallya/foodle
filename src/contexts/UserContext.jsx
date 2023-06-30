import { createContext, useContext, useReducer, useEffect } from "react";
import { intialUserState, userReducer, getAllUsers } from "src/features/users";
import { ACTIONS } from "src/utils";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, intialUserState);

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    getAllUsers(dispatch);
  }, []);

  return (
    <UserContext.Provider value={{ ...state, userDispatch: dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext };
