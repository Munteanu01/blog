import React from "react";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
export default function Post(props) {
    const {slug} = useParams()
    const posts = props.posts
    const post = posts.find(post => post.slug === slug);
    return(
        <div className="mx-auto xl:max-w-5xl lg:max-w-4xl md:max-w-2xl pt-20">
        
        <h1 className="text-4xl">{post.title}</h1>
        <div className="text-center max-w-xl mx-auto" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.html)}}></div>
        <h1 className="ml-auto text-2xl">Written by <Link to={`/author/${post.author.slug}`}>{post.author.name}</Link></h1>
        </div>
    )
}