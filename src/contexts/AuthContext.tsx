import React, { createContext, useState, useEffect } from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS, GET_USER } from "../gql/queries/auth";

type SetAuth = () => void;
type SetCurrentUser = (value: any) => void;

interface IUser {
  name: String;
  email: String;
}
interface IAuth {
  isAuthenticated: Boolean;
  currentUser: IUser;
  toggleAuth: SetAuth;
  addCurrentUser: SetCurrentUser;
}


export const AuthContext = createContext<IAuth>({
  isAuthenticated: false,
  currentUser: { name: '', email: '' },
  toggleAuth: (): void => { },
  addCurrentUser: (): void => { }
});

const AuthContextProvider: React.FC = props => {
  //Get initial state of the app to whatever is in the localStorage
  const [isAuthenticated, setAuth] = useState(() => {
    const localData = localStorage.getItem('isAuthenticated');
    return localData ? JSON.parse(localData) : false;
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const localData = localStorage.getItem('currentUser');
    return localData ? JSON.parse(localData) : {};
  })

  // Kinda like the event listeners for the state variables, when changes happen, useEffect kicks in.
  // Can be combined into one and the second variable can be [isAuthenticated, currentUser]
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated)
  }, [isAuthenticated])
  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
  }, [currentUser])

  //Methods to change states
  const toggleAuth = () => {
    setAuth(!isAuthenticated)
  }
  const addCurrentUser = (user: IUser) => {
    setCurrentUser(user);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, toggleAuth, addCurrentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
