import { createContext, useContext, useReducer } from "react";
import { intialUserState, userReducer } from "src/features/users";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, intialUserState);
  return (
    <UserContext.Provider value={{ ...state, userDispatch: dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext };
