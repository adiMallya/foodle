import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import { intialUserState, userReducer, getAllUsers } from "src/features/users";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, intialUserState);

  useEffect(() => {
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
