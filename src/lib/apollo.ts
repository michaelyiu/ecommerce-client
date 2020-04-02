import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'development'
    ? 'http://localhost:9000/.netlify/functions/graphql'
    : 'https://myiu-ecommerce-server.netlify.com/.netlify/functions/graphql',
  request: async operation => {
    const token = window.localStorage.getItem('token');
    operation.setContext({
      headers: {
        Authorization: token ? token : ''
      }
    })
  },
});

export { client }
