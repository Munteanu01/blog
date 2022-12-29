import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import All from "./components/All"
import Tech from "./components/Tech"
import Science from "./components/Science"
import Post from "./components/Post"
import Author from "./components/Author"





import { GraphQLClient, gql } from 'graphql-request';
const hygraph = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbtaryeo1x2o01uf7y9oe08j/master');
const QUERY = gql`
{ 
  posts {
    id
    slug
    author{
      name
      slug
      posts {
        id
      }
    }
    postType {
      type
    } 
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
const mostRecentPosts = posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home posts={mostRecentPosts} />} />
        <Route path="/All" element={<All posts={mostRecentPosts}/>} />
        <Route path="/Tech" element={<Tech posts={mostRecentPosts}/>} />
        <Route path="/Science" element={<Science posts={mostRecentPosts}/>} />
        <Route path="posts/:slug" element={<Post posts={mostRecentPosts} />} />
        <Route path="author/:slug" element={<Author posts={mostRecentPosts} />} />
      </Routes>
    </>
  );
}
