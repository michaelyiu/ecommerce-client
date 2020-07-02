// Library imports
import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';

// local imports
import { client } from './lib/apollo';

// Context imports
import AuthContextProvider from "./contexts/AuthContext";
import CartContextProvider from "./contexts/CartContext";
import NavContextProvider from "./contexts/NavContext";
import SearchContextProvider from "./contexts/SearchBarContext";
import FilterContextProvider from "./contexts/FilterContext";
import ProductContextProvider from "./contexts/ProductContext";

import ShippingContextProvider from "./contexts/ShippingContext";
import BillingContextProvider from "./contexts/BillingContext";

// Component imports
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import NavBar from "./components/layout/NavBar";
import MenuList from "./components/layout/MenuList";

import Cart from "./components/cart/Cart";
import ItemDetails from './pages/ItemDetails';

import Checkout from "./components/checkout/Checkout";


const App: React.FC = () => {

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <AuthContextProvider>
          <NavContextProvider>
            <CartContextProvider>
              <ProductContextProvider>
                <SearchContextProvider>
                  <ShippingContextProvider>
                    <BillingContextProvider>
                      <FilterContextProvider>
                        <Router>
                          <NavBar />
                          <Route exact path="/" component={Landing} />
                          <Route exact path="/register" component={Register} />
                          <Route exact path="/login" component={Login} />
                          <Route exact path="/cart" component={Cart} />
                          <Route exact path="/checkout" component={Checkout} />
                          <Route exact path="/item/:item_id" component={ItemDetails} />
                          <MenuList />
                        </Router>
                      </FilterContextProvider>
                    </BillingContextProvider>
                  </ShippingContextProvider>
                </SearchContextProvider>
              </ProductContextProvider>
            </CartContextProvider>
          </NavContextProvider>
        </AuthContextProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
