import React, {useState} from 'react'

const Counter = () =>{
    const stock = 10
    
    const [count, setcount]= useState(0);
    let cantidadElegida = 0
    function sumar(){
      if(count < stock){
        setcount(count+1)
        
      }
    }
    function Restar(){
        if(count > 0){
            setcount(count-1)
        }
    }
   const datos = function AgregarCar(){
      console.log(count)
      cantidadElegida = count

    }
  return (<div>
    <span>El stock es {stock}</span><br></br>
    <span>Numero de clicks <b>{count}</b></span><br></br>
    <span>La cantidad elegida para comprar es {count}</span>
    <div  style={{display:'flex', flexDirection:"row", justifyContent:"center", justifyContent:"space-evenly"}}>
    <button onClick={sumar}>+</button>
    <button onClick={()=>setcount(0)}>Limpiar</button>
    <button onClick={datos}>Agregar</button>
    <button onClick={Restar}>-</button>
    
    </div>
    </div>
  )
}

export default Counter