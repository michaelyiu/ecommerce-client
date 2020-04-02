import { gql } from 'apollo-boost';

const ALL_PRODUCTS = gql`
  query allProducts {
    allProducts {
      id
      name
			price
			category
			image
			description
    }
  }
`


export { ALL_PRODUCTS }