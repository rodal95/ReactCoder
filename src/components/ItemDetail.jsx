import React from 'react'
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../CartContext';
import Button from 'react-bootstrap/Button';
import {PulseLoader} from 'react-spinners'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
export default function ItemDetail({item}) {


    const {id,precio,titulo,imagen, stock, descripcion, caracteristicas} = item
    const {addItem} = useContext(CartContext)
    const [counter, setCounter] = useState(0)
    const [mostrar, setMostrar]= useState('none')
    const [timer, setTimer]= useState()
    const onAdd = (count)=>{
      setCounter(count)
      addItem(item, count)
    }
  setTimeout(()=>{
    setMostrar()
    setTimer('none')
  },1000)
  return (
    <div style={{minHeight:'600px'}}>
      <PulseLoader color="#ffffff" size={25} style={{display:timer}}></PulseLoader>
      <div className='ItemGeneral'  style={{display:mostrar}}>
        <Card className='ItemDetail'>
            <h1>{titulo}</h1>
            <img src={imagen} width="300px" alt='nada'></img>
            <h3>$$ {precio}</h3>
            {counter ?(<div className='finalizarCompra'><Link to="/"><Button>Continuar comprando</Button></Link><Link to="/cart"><Button>Finalizar Compra</Button></Link></div>): 
            <ItemCount stock = {stock} initial = {1} onAdd = {onAdd}/>}
        </Card>
        <Accordion defaultActiveKey="0" flush className='DescripcionItem' style={{minWidth:'300px'}}>
        <Accordion.Item eventKey="0">
        <Accordion.Header><h1>Caracteristicas Principales</h1></Accordion.Header>
        <Accordion.Body>
          <p>{descripcion}</p>
          <ul>
            {caracteristicas.map((caracteristica,indx) => <li key={indx}>{caracteristica}</li>)}
          </ul>
          </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}
