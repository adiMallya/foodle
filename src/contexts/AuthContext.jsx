import { createContext, useContext, useReducer } from "react";
import { initialAuthState, authReducer } from "src/features/auth";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  return (
    <AuthContext.Provider value={{ ...state, authDispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };
