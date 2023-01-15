import React from "react";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
export default function Post(props) {
    const {slug} = useParams()
    const posts = props.posts
    const post = posts.find(post => post.slug === slug);
    return(
        <div className="px-5 mx-auto xl:max-w-5xl lg:max-w-4xl md:max-w-2xl">
        <h1 className="text-5xl text-center mb-10 mt-16">{post.title}</h1>
        <div className="text-center max-w-2xl mx-auto leading-8 text-lg" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.html)}}></div>
        <h1 className="text-2xl text-right mt-8 mb-12">Written by <Link className="underline" to={`/author/${post.author.slug}`}>{post.author.name}</Link></h1>
        </div>
    )
}