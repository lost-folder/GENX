import React from 'react'
import { Blog } from '../Blog/Blog';
import useFetch from '../../useFetch';

export const Home = () => {
  const {data:blogs , isPending , errMsg} =useFetch('http://localhost:8000/blogs')
 
 
 
 const handleDelete = (id) =>{
   const newBlogs = blogs.filter((blog)=>blog.id !== id);

   setBlogs(newBlogs)
}




 
 return (
    <div className='home' >
      {errMsg && <div>{errMsg}</div>}
      {isPending && <div> ... loading </div>}
     {blogs&&<Blog blogs={blogs} title="All Blogs !" handleDelete={handleDelete}/>}
        

    </div>
  )


     {/* blogs && <Blog blogs={blogs} title="GenX Blogs !" handleDelete={handleDelete}/> */}

}

