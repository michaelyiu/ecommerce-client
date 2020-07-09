/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

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
  brand: string;
}

export interface product {
  product: product_product | null;
}

export interface productVariables {
  id: string;
}
