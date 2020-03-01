// Library imports
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { ApolloProvider } from '@apollo/react-hooks';

// local imports
import { client } from './lib/apollo';

// Context imports
import UserContextProvider from "./contexts/UserContext";

// Component imports
import Header from "./components/Header";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import NavBar from "./components/layout/NavBar";



const App: React.FC = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <UserContextProvider>
          <Router>

            <NavBar />
            <Header />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

          </Router>
        </UserContextProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
