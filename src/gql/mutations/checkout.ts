
import { gql } from "apollo-boost";


const CHECKOUT_MUTATION = gql`
	mutation createOrder($total_bill: Float!) {
		createOrder(total_bill: $total_bill){
    	client_secret
		}
  }
`

export {
	CHECKOUT_MUTATION,
};