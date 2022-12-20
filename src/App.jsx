import Home from "./components/Home"
import { GraphQLClient, gql } from 'graphql-request';
const hygraph = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbtaryeo1x2o01uf7y9oe08j/master');
const QUERY = gql`
{ 
  posts {
    id
    photo{
      url
    }
    title
    date
    content{
      html
    }
  } 
}`
const { posts } = await hygraph.request(QUERY)

export default function App() {
  return (
    <>
    <Home posts={posts}/>
    </>
  )
}

