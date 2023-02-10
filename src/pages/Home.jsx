import React from 'react'
import { Link } from 'react-router-dom';
export default function Home(props) {
    const posts = props.posts
    if(!posts) return <div></div>
    if(!posts.length) return <div></div>
    const mostRecentPost = posts[0];
    const mostRecentPosts = posts.slice(1, 7);
    return(
        <div className='my-20 mx-auto px-5 md:px-0 xl:max-w-5xl lg:max-w-4xl md:max-w-2xl'>
            <div className='sm:grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-3'>
            <Link to={`/posts/${mostRecentPost.slug}`} className="lg:col-span-2 col-span-1 my-auto">
                <img className='md:max-w-full mx-auto sm:mx-0' src={mostRecentPost.photo.url} alt="" />
            </Link>
            <div className='sm:px-4 mx-auto col-span-1 text-center sm:text-left'>
                <Link to={`/posts/${mostRecentPost.slug}`}><h1 className='lg:text-5xl sm:text-4xl text-2xl pt-2'>{mostRecentPost.title}</h1></Link>
                <p className='lg:text-3xl text-xl lg:pt-20 xl:pb-32 lg:pb-16 md:pb-4 sm:pt-10 pt-1'>{mostRecentPost.description}</p>
                <div className='flex justify-between mx-5 text-[#797979]'>
                {props.readingTime(mostRecentPost.content.html)}
                {props.formatDate(mostRecentPost.date)}
                </div>
            </div>
            {mostRecentPosts.map((post) => (
            <div className="break-words w-full sm:max-w-sm mt-10 mx-auto text-center" key={post.id}>
                <Link to={`/posts/${post.slug}`}>
                <div className='object-cover'><img className=' w-full' src={post.photo.url}></img></div>
                <h1 className='lg:text-3xl text-2xl pt-2'>{post.title}</h1>
                </Link>
                <p className='pt-1 text-xl'>{post.description}</p>
                <div className='flex justify-between mx-5 text-[#797979]'>
                {props.readingTime(post.content.html)}
                {props.formatDate(post.date)}
                </div>
            </div>
            ))}
            </div>
        </div>
    )
}