import React from 'react'
import { Link } from 'react-router-dom';
export default function Home(props) {
    const posts = props.posts
    return(
        <div className='mx-auto px-5 md:px-0 xl:max-w-5xl lg:max-w-4xl md:max-w-2xl'>
            <div className='sm:grid gap-5 grid-cols-2 lg:grid-cols-3 lg:gap-3'>
            {posts.map((post) => (
            <div className="break-words w-full sm:max-w-sm mt-10 mx-auto" key={post.id}>
                <Link to={`/posts/${post.slug}`}>
                <div className='object-cover'><img className=' w-full' src={post.photo.url}></img></div>
                <h1 className='lg:text-3xl text-2xl pt-2'>{post.title}</h1>
                </Link>
                <p className='pt-1 text-xl'>{post.description}</p>
            </div>
            ))}
            </div>
        </div>
    )
}