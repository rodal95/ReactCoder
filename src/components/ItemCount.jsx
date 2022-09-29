import React from 'react'
import Button from 'react-bootstrap/Button';
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
      <span>cantidad agregada <b>{contador}</b></span>
      <span>Stock {stock}</span>
      <span id="datos"></span>
        <div style={{display:'flex', flexDirection:'column'}}>
          <div className='botonera'>
            <div className='botonesSumar'>
              <Button onClick={sumar} style={{width:'86px'}}>+</Button>
              <Button onClick={Restar} disabled={contador === initial} style={{width:'86px'}}>-</Button>
            </div>
            <Button onClick={()=>setContador(initial)}>Limpiar</Button>
            <Link to="/"><Button>Continuar comprando</Button></Link>
            <Button onClick={()=>{
              onAdd(contador)
              const datos = document.getElementById("datos")
              datos.innerHTML='<p>la cantidad elegida es</p>'+contador
              stock = stock - contador
              setContador(initial)
              return stock}}>Agregar al carrito</Button>
            </div>
        </div> 
    </div>
    </>
  )
}
