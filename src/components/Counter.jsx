import React, {useState} from 'react'
let stock = 10
let cantidadElegida = 0
const Counter = () =>{
    const [count, setcount]= useState(0);
    function Restar(){
        if(count > 0){
            setcount(count-1)
        }
    }
    function sumar(){
      if(count < stock){
        setcount(count+1)
      }
    }
    function agregar(){
      if(count != 0){
        setcount(0)
        cantidadElegida += count
        
        stock = stock - count
        return {cantidadElegida, stock}
      }
    }
  return (<div>
    <span>Numero de clicks <b>{count}</b></span><br></br>
    <span>Stock disponible{stock}</span><br />
    <span id="Stockelegido">La cantidad elegida es {cantidadElegida}</span><br />
    <div  style={{display:'flex', flexDirection:"row", justifyContent:"center", justifyContent:"space-evenly"}}>
    <button onClick={sumar}>+</button>
    <button onClick={()=>setcount(0)}>Limpiar</button>
    <button onClick={agregar}>Agregar</button>
    <button onClick={Restar}>-</button>
    </div>
    </div>
  )
}

export default Counter