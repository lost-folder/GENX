import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';


const Create = () => {
const [title , setTitle]=useState("");
const [body , setBody]=useState("");
const [author , setAuthor]=useState("mario");
const [isPending , setIsPending]= useState(false)
const history =useHistory();
const AddTitle = (e) => {
  setTitle(event.target.value)

}

const handleSubmit =(e)=>{
e.preventDefault();

const blog ={title,body,author};
setIsPending(true)

  fetch('http://localhost:8000/blogs',{
    method: 'POST',
    headers: {'Content-Type':"application/json"},
    body: JSON.stringify(blog)
  }).then(()=>{
    console.log('new blog add')
    setIsPending(false)
    history.push('/')
  })



}
  return (
    <div className='create'>
      <h2>Add a new blog</h2>
      <form
        onSubmit={handleSubmit}      
      >
        <label>Blog title : </label>
        <input
          type="text"
          required
          value={title}
          placeholder="title"
          onChange={()=>AddTitle()}
        />
        <label>Blog body :</label>
      
          <textarea
          required
          value ={body}
          onChange={(e)=>setBody(e.target.value)}
          >
          </textarea>
          <label> Blog author:</label>
          <select
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
          >
            <option  value="mario">mario</option>
            <option  value="yoshi">yoshi</option>
          </select>
          { !isPending && <button>Add blog</button>}
          { isPending && <button> adding blog ...</button>}
          
          

      </form>
    </div>
  )
}

export default Create