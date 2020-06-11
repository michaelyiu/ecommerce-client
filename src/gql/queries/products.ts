import { gql } from 'apollo-boost';

const ALL_PRODUCTS = gql`
  query allProducts {
    allProducts {
      id
      name
			price
			category
			images
			description
      brand
    }
  }
`

const GET_PRODUCT = gql`
  query product ($id: String!){
    product(id: $id){
      id
      name
			price
			category
			images
			description
      brand
    }
  }
`


export { ALL_PRODUCTS, GET_PRODUCT }