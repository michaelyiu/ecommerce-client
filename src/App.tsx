// Library imports
import React, { useContext, } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';

// local imports
import { client } from './lib/apollo';

// Context imports
import UserContextProvider from "./contexts/UserContext";

// Component imports
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Landing from "./components/layout/Landing";
import NavBar from "./components/layout/NavBar";
import NavContextProvider from "./contexts/NavContext";
import MenuList from "./components/layout/MenuList";

import Cart from "./components/cart/Cart";



const App: React.FC = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <UserContextProvider>
          <NavContextProvider>
            <Router>

              <NavBar />
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/cart" component={Cart} />
              <MenuList />
            </Router>
          </NavContextProvider>
        </UserContextProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
