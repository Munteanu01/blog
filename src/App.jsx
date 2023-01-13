import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import All from "./components/All"
import Post from "./components/Post"
import Author from "./components/Author"
import Mind from "./components/Mind"
import Human from "./components/Human"
import Philosophy from "./components/Philosophy"
import { GraphQLClient, gql } from 'graphql-request';

export default function App() {
  const [mostRecentPosts, setMostRecentPosts] = useState([])
  useEffect(() => {
    async function fetchData() {
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
          description
          date
          content{
            html
          }
        } 
      }`
      const { posts } = await hygraph.request(QUERY)
      setMostRecentPosts(posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date)))
    }
    fetchData()
  }, [])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home posts={mostRecentPosts} />} />
        <Route path="/All" element={<All posts={mostRecentPosts}/>} />
        <Route path="/Mind" element={<Mind posts={mostRecentPosts}/>} />
        <Route path="/Human" element={<Human posts={mostRecentPosts}/>} />
        <Route path="/Philosophy" element={<Philosophy posts={mostRecentPosts}/>} />
        <Route path="posts/:slug" element={<Post posts={mostRecentPosts} />} />
        <Route path="author/:slug" element={<Author posts={mostRecentPosts} />} />
      </Routes>
    </>
  );
}