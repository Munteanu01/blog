import React from "react";
import FilteredPosts from './FilteredPosts';
export default function Human(props) {
    const posts = props.posts
    const readingTime = props.readingTime;
    const formatDate = props.formatDate;
    return(
        <FilteredPosts type="Human" posts={posts} readingTime={readingTime} formatDate={formatDate}/>
    )
}