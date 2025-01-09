import React,{useState,useEffect} from 'react'


const useFetch = (url) => {
  
  const [data , setData] =useState(null);
  const [isPending , setIsPending] = useState(true);
  const [errMsg , setErrMsg] = useState(null)

    useEffect(()=>{ 
      
      const abortCont = new AbortController();


        fetch(url,{ signal: abortCont.signal})
        .then(res => {
            console.log(res)
            if(!res.ok){
              throw Error('could not fetch the data for that resource ')
            }
          return res.json();
        })
        .then((data)=>{
            setData(data)
            setIsPending(false)
            setErrMsg(null);
        })
        .catch((errMsg) => {
          if(errMsg.name === 'AbortError'){
            console.log('fetch aborted');
          } else{
            setIsPending(false)
            setErrMsg(errMsg.message)
          }
        })
       
        return () => abortCont.abort();
        
     },[url]);

     return {data , isPending , errMsg}

}

export default useFetch;