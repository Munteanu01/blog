import React from 'react'
import { Link } from 'react-router-dom';
export default function Home(props) {
    const posts = props.posts
    const mostRecentPosts = posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
    return(
        <div className='md:mx-32 mx-12 mt-20'>
            <div className='sm:grid gap-5 grid-cols-2 lg:grid-cols-3 lg:gap-3'>
            {mostRecentPosts.map((post) => (
            <div className="break-words w-full max-w-xs lg:max-w-sm mt-10 mx-auto border-2 border-white" key={post.id}>
                <Link to={`/posts/${post.slug}`}>
                <div className='object-cover border-b-2 border-white'><img className=' w-full' src={post.photo.url}></img></div>
                <h1 className='text-2xl pt-2 text-center'>{post.title}</h1>
                </Link>
            </div>
            ))}
            </div>
        </div>
    )
}