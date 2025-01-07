import React from 'react'

export const Blog = ({blogs, title}) => {
  return (
    <div className='blog-list'>
    <h2>{title}</h2>
    
     { blogs.map(blog=>(
        <div className='blog-preview' key={blog.id}>
            
            <p > desc : {blog.body}</p>
            <h2> written by : {blog.author}</h2>
            <h2> title: {blog.title}</h2>
        </div>
        ))}
    
    </div>
    )
}
