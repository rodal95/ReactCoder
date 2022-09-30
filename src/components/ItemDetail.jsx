import React from 'react'
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../CartContext';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
export default function ItemDetail({item}) {


    const {id,precio,titulo,imagen, stock, descripcion, caracteristicas} = item
    const {addItem} = useContext(CartContext)
    const [counter, setCounter] = useState(0)

    const onAdd = (count)=>{
      setCounter(count)
      addItem(item, count)
    }
  return (
    <>
    <div className='ItemGeneral'>
      <div className='ItemDetail'>
          <h1>{titulo}</h1>
          <img src={imagen} width="300px" alt='nada'></img>
          <h3>$$ {precio}</h3>
          {counter ?(<div className='finalizarCompra'><Link to="/"><Button>Continuar comprando</Button></Link><Link to="/cart"><Button>Finalizar Compra</Button></Link></div>): 
          <ItemCount stock = {stock} initial = {1} onAdd = {onAdd}/>}
      </div>
      <div className='DescripcionItem'><p>{descripcion}</p>
        <ul>
          {caracteristicas.map(caracteristica => <li>{caracteristica}</li>)}
        </ul>
      </div>
    </div>
    </>
  )
}
