/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AvailableBrands } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: product
// ====================================================

export interface product_product {
  __typename: "Product";
  id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  brand: AvailableBrands;
}

export interface product {
  product: product_product | null;
}

export interface productVariables {
  id: string;
}
