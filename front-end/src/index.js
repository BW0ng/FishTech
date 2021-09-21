import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

// https://github.com/apollographql/apollo-link/issues/375
let apiEndpoint = "http://localhost:4000";
if ((typeof window !== 'undefined' && process.env.NODE_ENV === 'development')) {
  apiEndpoint = "http://localhost:4000";
} else {
  apiEndpoint = "http://backend:4000";
}
console.log("API Endpoint: " + apiEndpoint);
const link = new HttpLink({
  uri: `${apiEndpoint}/graphql`
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})


ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));
