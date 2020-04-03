/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signIn
// ====================================================

export interface signIn_signIn {
  __typename: "Token";
  token: string;
  email: string;
}

export interface signIn {
  signIn: signIn_signIn;
}

export interface signInVariables {
  email: string;
  password: string;
}
