import React,{useState} from 'react'

function MovieCounter(){

    const [count,setcount] = useState(0);
    const [name,setname] = useState("Jana Nayagan")

    const handlecount = ()=>{
         setcount(count+1)
       

    }
    const handlename = ()=>{

        setname("DC")
        setcount(0)
    }
      
 
    return(
        <div>
            <h1>{name}</h1>
            <h2>Count : {count}</h2>
            <button onClick={handlecount}>Add</button>
            <button onClick={handlename}>Change Movie</button>
        </div>
    )

}

export default MovieCounter