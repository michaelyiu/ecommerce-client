/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AvailableBrands } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: cart
// ====================================================

export interface cart_cart_orderedItems_product {
  __typename: "Product";
  id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  brand: AvailableBrands;
}

export interface cart_cart_orderedItems {
  __typename: "CartItem";
  quantity: number;
  product: cart_cart_orderedItems_product;
}

export interface cart_cart_user {
  __typename: "User";
  name: string;
}

export interface cart_cart {
  __typename: "Cart";
  id: string | null;
  orderedItems: (cart_cart_orderedItems | null)[] | null;
  user: cart_cart_user | null;
}

export interface cart {
  cart: cart_cart | null;
}
