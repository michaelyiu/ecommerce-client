
import { gql } from "apollo-boost";

// for guests first time landing
// const NEW_CART = gql`
// 	mutation newCart {
// 		updateCart{
// 			id
// 		}
//   }
// `;

const UPDATE_CART = gql`
	mutation updateCart($cartInput: CartInput!) {
		updateCart(cartInput: $cartInput){
			id
			# user
			total
			orderedItems{
				product{
					id
					category
					description
					images
					name
					price
					brand
				}
				quantity
			}
		}
  }
`;

const DELETE_CART = gql`
	mutation deleteCart($cart_id: String!) {
		deleteCart(cart_id: $cart_id)
  }
`

export {
	// NEW_CART,
	UPDATE_CART,
	DELETE_CART
};