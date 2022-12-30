import React from 'react'
import { Link } from 'react-router-dom';
export default function Home(props) {
    const posts = props.posts
    const mostRecentPost = posts[0];
    const mostRecentPosts = posts.slice(1, 7);
    return(
        <div className='mt-20 mx-auto px-5 md:px-0 xl:max-w-5xl lg:max-w-4xl md:max-w-2xl'>
            <div className='max-w-xs sm:max-w-lg mx-auto'>
                <Link to={`/posts/${mostRecentPost.slug}`}><h1 className=''>{mostRecentPost.title}</h1></Link>
                <Link to={`/posts/${mostRecentPost.slug}`}><img className='md:max-w-full sm:max-w-md' src={mostRecentPost.photo.url} alt="" /></Link>
                <p>{mostRecentPost.description}</p>
                <Link to={`/author/${mostRecentPost.author.slug}`}><p>{mostRecentPost.author.name}</p></Link>
                <p>{mostRecentPost.date}</p>
                
            </div>
            <div className='sm:grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-3'>
            {mostRecentPosts.map((post) => (
            <div className="break-words w-full sm:max-w-sm max-w-xs mt-10 mx-auto" key={post.id}>
                <Link to={`/posts/${post.slug}`}>
                <div className='object-cover'><img className=' w-full' src={post.photo.url}></img></div>
                <h1 className='pt-2 text-center'>{post.date}</h1>
                <h1 className='pt-2 text-center'>{post.title}</h1>
                </Link>
            </div>
            ))}
            </div>
            <form className='py-20 mt-28 md:max-w-md max-w-[290px] mx-auto grid md:grid-cols-3 grid-cols-1 gap-3'>
            <input className="form-input md:col-span-2 py-4 px-5 text-gray-900 leading-5 focus:outline-none focus:shadow-outline-blue-500" id="email" type="email" placeholder="Your email"/>
            <button className="bg-[#B2EF01] text-black py-3" type="submit">Subscribe</button>
            </form>
        </div>
    )
}