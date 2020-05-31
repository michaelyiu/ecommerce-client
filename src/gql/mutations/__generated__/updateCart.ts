/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CartInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateCart
// ====================================================

export interface updateCart_updateCart {
  __typename: "Cart";
  id: string | null;
  total: number | null;
}

export interface updateCart {
  updateCart: updateCart_updateCart | null;
}

export interface updateCartVariables {
  cartInput: CartInput;
}
