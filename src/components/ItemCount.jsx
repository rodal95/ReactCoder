import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

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
    <>
    <div className ="ItemCount"> 
      <span>cantidad agregada {contador}</span><br />
      <span>Stock {stock}</span><br />
      <span id="datos"></span>
        <div >
          <button onClick={sumar}>+</button>
          <button onClick={()=>setContador(initial)}>Limpiar</button>
          <Link to="/"><button>Continuar comprando</button></Link>
          <button onClick={()=>{onAdd(contador)
          const datos = document.getElementById("datos")
          datos.innerHTML='<p>la cantidad elegida es</p>'+contador
          stock = stock - contador
          setContador(initial)
          return stock
          } }>Agregar al carrito</button>
        
          <button onClick={Restar} disabled={contador === initial} >-</button>
        </div> 
    </div>
    </>
  )
}
