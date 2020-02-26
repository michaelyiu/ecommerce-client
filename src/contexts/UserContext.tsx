import React, { createContext, useState } from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS, GET_USER } from "../gql/queries/auth";

interface IUser {
  user: String;
  role: String;
  data?: any;
}


export const UserContext = createContext<IUser>({ user: "", role: "", data: [] });

const UserContextProvider: React.FC = props => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { email: "onew1ng3d@hotmail.com" }
  });
  console.log(data);
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");
  return (
    <UserContext.Provider value={{ user, role, data }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
