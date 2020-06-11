import { gql } from 'apollo-boost';

const GET_CART = gql`
	query cart {
		cart {
			id
			orderedItems {
				quantity
				product {
					id
					name
					price
					category
					images
					description
					brand
				}
			}
			user {
				name
			}
		}
	}
`
// const ALL_PRODUCTS = gql`
//   query allProducts {
//     allProducts {
//       id
//       name
// 			price
// 			category
// 			image
// 			description
//     }
//   }
// `


export { GET_CART }