import React from 'react'
import { useState } from 'react'


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
    <button onClick={()=>{onAdd(contador)
    const datos = document.getElementById("datos")
    datos.innerHTML='<p>la cantidad elegida es</p>'+contador
    stock = stock - contador
    return stock
    } }>Agregar</button>
    <button onClick={Restar} disabled={contador === initial} >-</button></div> 
    </div>
  )
}
