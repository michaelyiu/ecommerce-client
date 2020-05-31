/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CartInput {
  orderedItems?: ProductInput[] | null;
}

export interface ProductInput {
  id?: string | null;
  category: string;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
