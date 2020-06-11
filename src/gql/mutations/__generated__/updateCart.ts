/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CartInput, AvailableBrands } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateCart
// ====================================================

export interface updateCart_updateCart_orderedItems_product {
  __typename: "Product";
  id: string;
  category: string;
  description: string;
  images: string[];
  name: string;
  price: number;
  brand: AvailableBrands;
}

export interface updateCart_updateCart_orderedItems {
  __typename: "CartItem";
  product: updateCart_updateCart_orderedItems_product;
  quantity: number;
}

export interface updateCart_updateCart {
  __typename: "Cart";
  id: string | null;
  total: number | null;
  orderedItems: (updateCart_updateCart_orderedItems | null)[] | null;
}

export interface updateCart {
  updateCart: updateCart_updateCart | null;
}

export interface updateCartVariables {
  cartInput: CartInput;
}
