import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import { useHistory } from 'react-router-dom';

export const BlogDetails = () => {
    const {id}=useParams();
    const {data: blog , isPending , errMSg} = useFetch('http://localhost:8000/blogs/'+id)
  const history =useHistory();

    const handleDelete =()=>{
      fetch('http://localhost:8000/blogs/'+blog.id,{
        method : "DELETE",
      }).then(()=>{
        history.push('/')
      })
    }

  return (
    <div className="blog-details">
        {isPending && <div> loading ...</div> }
        {errMSg && <div>{errMSg}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>delete</button>
              
            </article>
        )}
    </div>
  );
};
