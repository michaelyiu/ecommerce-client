import { gql } from 'apollo-boost';


const GET_USER = gql`
  query user ($email: String!) {
    user (email: $email){
      email 
      name
    }
  }
`

const GET_USERS = gql`
  query allUsers {
    allUsers {
      email
      name
    }
  }
`


export { GET_USERS, GET_USER }