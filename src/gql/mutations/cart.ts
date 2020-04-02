
import { gql } from "apollo-boost";

const UPDATE_CART = gql`
	mutation updateCart {
		updateCart{
			id
		}
  }
`;

// const UPDATE_CART = gql`
// 	mutation updateCart($cart_id: String!, $cartInput: CartInput!) {
// 		updateCart(cart_id: $cart_id, cartInput: $cartInput){
//     	token
// 			cart_id
// 		}
//   }
// `;

const DELETE_CART = gql`
	mutation deleteCart($cart_id: String!, $email: String!, $password: String!, $password2: String!) {
		deleteCart(cart_id: $cart_id){
    	email
		}
  }
`

export {
	UPDATE_CART,
	DELETE_CART
};