import React, { createContext, useEffect, useReducer } from "react";
import { authReducer } from '../reducers/AuthReducer';

type SetAuth = (value: any) => void;

interface Auth {
  isAuthenticated: Boolean;
  dispatchAuth: SetAuth;
}

export const AuthContext = createContext<Auth>({
  isAuthenticated: false,
  dispatchAuth: (): void => { },
});

const AuthContextProvider: React.FC = props => {
  //Get initial state of the app to whatever is in the localStorage
  const [isAuthenticated, dispatchAuth] = useReducer(authReducer, false, () => {
    const localData = localStorage.getItem('isAuthenticated');
    return localData ? JSON.parse(localData) : false;
  });

  // Kinda like the event listeners for the state variables, when changes happen, useEffect kicks in.
  // Can be combined into one and the second variable can be [isAuthenticated, currentUser]
  useEffect(() => {
    localStorage.setItem('isAuthenticated', `${isAuthenticated}`)
  }, [isAuthenticated])

  return (
    <AuthContext.Provider value={{ isAuthenticated, dispatchAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
