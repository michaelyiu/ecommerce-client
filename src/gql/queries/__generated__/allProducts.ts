/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allProducts
// ====================================================

export interface allProducts_allProducts {
  __typename: "Product";
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface allProducts {
  allProducts: (allProducts_allProducts | null)[] | null;
}
