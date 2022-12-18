import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';

const hygraph = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbtaryeo1x2o01uf7y9oe08j/master');
const QUERY = gql`
{
    posts {
      id
      title
      content{
        html
      }
    }
}`
const { posts } = await hygraph.request(QUERY)
console.log(posts)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
