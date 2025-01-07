import React from 'react'
import { useState } from 'react'

export const Home = ({setNavBarTitle}) => {
 const [typed , setTyped] = useState('Name');
 
 const [changeName , setChangeName] = useState('Mario')
 
 const [blogs , setBlogs] =useState([

    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }

 ]);

 const write =(e)=>{
    const newTitle = event.target.value;
    setTyped(event.target.value);
    setNavBarTitle(newTitle);
 }
 const ClickName =()=>{
    setChangeName('GENX');
    
 }
 
 return (
    <div >
    
    <h2>Homepage</h2>
    <br/>
        <button onClick={ClickName}  > Change navbar </button>
        
        <br style={{padding:"30px"}}/>
        <input style={{margin:"30px"}} value={typed} onChange={write}></input>
        <br/>
        <h1>{typed}</h1>
    
    

    </div>
  )



}

