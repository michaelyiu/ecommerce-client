// Library imports
import React, { useContext, } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';

// local imports
import { client } from './lib/apollo';

// Context imports
import AuthContextProvider from "./contexts/AuthContext";

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
        <AuthContextProvider>
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
        </AuthContextProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
