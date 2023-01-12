import React from 'react'
import { Link } from 'react-router-dom';
export default function Home(props) {
    const posts = props.posts
    const mostRecentPost = posts[0];
    const mostRecentPosts = posts.slice(1, 7);
    return(
        <div className='mt-20 mx-auto px-5 md:px-0 xl:max-w-5xl lg:max-w-4xl md:max-w-2xl'>
            <div className='sm:grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-3'>
            <Link to={`/posts/${mostRecentPost.slug}`} className="lg:col-span-2 col-span-1 my-auto">
                <img className='md:max-w-full mx-auto sm:mx-0' src={mostRecentPost.photo.url} alt="" />
            </Link>
            <div className='max-w-md sm:max-w-lg mx-auto col-span-1'>
                <Link to={`/posts/${mostRecentPost.slug}`}><h1 className=''>{mostRecentPost.title}</h1></Link>
                <p>{mostRecentPost.description}</p>
                <Link to={`/author/${mostRecentPost.author.slug}`}><p>{mostRecentPost.author.name}</p></Link>
                <p>{mostRecentPost.date}</p>
            </div>
            {mostRecentPosts.map((post) => (
            <div className="break-words w-full sm:max-w-sm mt-10 mx-auto text-center" key={post.id}>
                <Link to={`/posts/${post.slug}`}>
                <div className='object-cover'><img className=' w-full' src={post.photo.url}></img></div>
                <h1 className='pt-2'>{post.title}</h1>
                <p>{post.description}</p>
                <p>{post.author.name}</p>
                <p className='pt-2'>{post.date}</p>

                </Link>
            </div>
            ))}
            </div>
            <form className='py-20 mt-28 md:max-w-md max-w-[290px] mx-auto grid md:grid-cols-3 grid-cols-1 gap-3'>
            <input className="form-input md:col-span-2 py-4 px-5 text-gray-900 leading-5 focus:outline-none focus:shadow-outline-blue-500 dark:bg-white bg-black" id="email" type="email" placeholder="Your email"/>
            <button className="dark:bg-white bg-black text-white dark:text-black py-3" type="submit">Subscribe</button>
            </form>
        </div>
    )
}