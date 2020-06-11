/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AvailableBrands {
  APPLE = "APPLE",
  HTC = "HTC",
  HUAWEI = "HUAWEI",
  LENOVO = "LENOVO",
  ONEPLUS = "ONEPLUS",
  SAMSUNG = "SAMSUNG",
  SONY = "SONY",
  XIAOMI = "XIAOMI",
}

export interface CartInput {
  orderedItems?: ProductInput[] | null;
}

export interface ProductInput {
  id?: string | null;
  category: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  quantity?: number | null;
  brand: AvailableBrands;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
