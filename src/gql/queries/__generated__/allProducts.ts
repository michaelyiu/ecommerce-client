/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AvailableBrands } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: allProducts
// ====================================================

export interface allProducts_allProducts {
  __typename: "Product";
  id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  brand: AvailableBrands;
}

export interface allProducts {
  allProducts: (allProducts_allProducts | null)[] | null;
}