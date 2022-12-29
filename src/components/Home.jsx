import React from 'react'
import { Link } from 'react-router-dom';
export default function Home(props) {
    const posts = props.posts
    const mostRecentPost = posts[0];
    const mostRecentPosts = posts.slice(1, 7);
    return(
        <div className='mt-20'>
            <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-4'>
                <div className='mx-auto col-span-2 lg:col-span-3  grid grid-cols-5 gap-20'>
                    <div className='col-span-2 lg:col-span-3  my-auto'>
                    <Link to={`/posts/${mostRecentPost.slug}`}><img className='w-full' src={mostRecentPost.photo.url} alt="" /></Link>
                    </div>
                    <div className='col-span-1'>
                    <Link to={`/posts/${mostRecentPost.slug}`}><h1 className='text-4xl'>{mostRecentPost.title}</h1></Link>
                    <p>{mostRecentPost.description}</p>
                    <p>{mostRecentPost.author.name}</p>
                    <p className=''>{mostRecentPost.date}</p>
                    </div>
                </div>
            {mostRecentPosts.map((post) => (
            <div className="break-words w-full col-span-1 mx-auto" key={post.id}>
                <Link to={`/posts/${post.slug}`}>
                <div className='object-cover'><img className=' w-full' src={post.photo.url}></img></div>
                <h1 className='text-2xl pt-2 text-center'>{post.date}</h1>
                <h1 className='text-2xl pt-2 text-center'>{post.title}</h1>
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