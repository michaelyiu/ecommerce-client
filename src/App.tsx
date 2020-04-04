// Library imports
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';

// local imports
import { client } from './lib/apollo';

// Context imports
import AuthContextProvider from "./contexts/AuthContext";
import CartContextProvider from "./contexts/CartContext";
import NavContextProvider from "./contexts/NavContext";
import ProductContextProvider from "./contexts/ProductContext";

// Component imports
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import NavBar from "./components/layout/NavBar";
import MenuList from "./components/layout/MenuList";

import Cart from "./components/cart/Cart";



const App: React.FC = () => {

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <AuthContextProvider>
          <CartContextProvider>
            <NavContextProvider>
              <ProductContextProvider>

                <Router>

                  <NavBar />
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/cart" component={Cart} />
                  <MenuList />
                </Router>
              </ProductContextProvider>
            </NavContextProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
