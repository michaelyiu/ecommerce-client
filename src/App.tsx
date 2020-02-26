// Library imports
import React from "react";
import { ApolloProvider } from '@apollo/react-hooks';

// local imports
import { client } from './lib/apollo';

// Context imports
import UserContextProvider from "./contexts/UserContext";

// Component imports
import Header from "./components/Header";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const App: React.FC = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <UserContextProvider>
          <Header />
          <Register />
          <Login />
        </UserContextProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
