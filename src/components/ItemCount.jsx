import React from 'react'
import { useState } from 'react'

const datos = document.getElementById("datos")
export default function ItemCount({stock, initial, onAdd}) {

    const[contador, setContador] = useState(initial)
    function Restar(){
        if(contador > initial){
            setContador(contador-1)
        }
    }
    function sumar(){
      if(contador < stock){
        setContador(contador+1)
      }
    }
    

  return (
    <div > 
    <span>cantidad agregada {contador}</span><br />
    <span>Stock {stock}</span><br />
    <span id="datos"></span>
    <div ><button onClick={sumar}>+</button>
    <button onClick={()=>setContador(initial)}>Limpiar</button>
    <button onClick={()=>{onAdd(contador)} }>Agregar</button>
    <button onClick={Restar} disabled={contador === initial} >-</button></div> 
    </div>
  )
}
