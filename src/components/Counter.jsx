import React, {useState} from 'react'

const Counter = () =>{
    const [count, setcount]= useState(0);
    function Restar(){
        if(count > 0){
            setcount(count-1)
        }
    }
  return (<div>
    <span>Numero de clicks <b>{count}</b></span><br></br>
    <div  style={{display:'flex', flexDirection:"row", justifyContent:"center", justifyContent:"space-evenly"}}>
    <button onClick={()=>setcount(count+1)}>+</button>
    <button onClick={()=>setcount(0)}>Limpiar</button>
    <button onClick={Restar}>-</button>
    </div>
    </div>
  )
}

export default Counter