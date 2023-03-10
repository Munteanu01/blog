import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Post from "./components/Post"
import Home from "./pages/Home"
import All from "./pages/All"
import Author from "./pages/Author"
import Mind from "./pages/Mind"
import Human from "./pages/Human"
import Philosophy from "./pages/Philosophy"
import { GraphQLClient, gql } from 'graphql-request';
import logoLight from '/src/icons/logo-light.png'
import logoDark from '/src/icons/logo-dark.png'
import menuLight from '/src/icons/menu-light.png'
import menuDark from '/src/icons/menu-dark.png'
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
  const readingTime = (content) => {
    const words = content.split(" ").length;
    const minutes = Math.round(words / 130);
    return <p>{minutes} min</p>;
  }
  const formatDate = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });
  return formattedDate;
}
  return (
    <>
      <Navbar logoLight={logoLight} logoDark={logoDark} menuLight={menuLight} menuDark={menuDark} />
      <Routes>
        <Route path="*" element={<Home posts={mostRecentPosts} readingTime={readingTime} formatDate={formatDate}/>} />
        <Route path="/All" element={<All posts={mostRecentPosts} readingTime={readingTime} formatDate={formatDate}/>} />
        <Route path="/Mind" element={<Mind posts={mostRecentPosts} readingTime={readingTime} formatDate={formatDate}/>}/>
        <Route path="/Human" element={<Human posts={mostRecentPosts} readingTime={readingTime} formatDate={formatDate}/>} />
        <Route path="/Philosophy" element={<Philosophy posts={mostRecentPosts} readingTime={readingTime} formatDate={formatDate}/>} />
        <Route path="posts/:slug" element={<Post posts={mostRecentPosts}/>} />
        <Route path="author/:slug" element={<Author posts={mostRecentPosts} readingTime={readingTime} formatDate={formatDate}/>} />
      </Routes>
    </>
  );
}