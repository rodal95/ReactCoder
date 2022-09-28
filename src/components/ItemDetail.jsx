import React from 'react'
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../CartContext';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function ItemDetail({item}) {


    const {id,precio,titulo,imagen, stock} = item
    const {addItem} = useContext(CartContext)
    const [counter, setCounter] = useState(0)

    const onAdd = (count)=>{
      setCounter(count)
      addItem(item, count)
    }
  return (
    <>
      <div className='ItemDetail'>
          <h1>{titulo}-{id}</h1>
          <img src={imagen} width="300px" alt='nada'></img>
          <h3>$$ {precio}</h3>
          {counter ?(<><Link to="/"><button>Continuar comprando</button></Link><Link to="/cart"><button>Finalizar Compra</button></Link></>): 
          <ItemCount stock = {stock} initial = {1} onAdd = {onAdd}/>}
      </div>
    </>
  )
}
