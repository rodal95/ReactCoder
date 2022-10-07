import React , {useContext, useState} from 'react';
import { CartContext } from '../CartContext';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import CheckOut from './CheckOut';
import {PulseLoader} from 'react-spinners';
import Card from 'react-bootstrap/Card';

export default function Cart(){
    const {items, removeItem, clear} = useContext(CartContext)
    const [mostrar, setMostrar]= useState('none')
    const [mostrard, setMostrard]= useState('none')
    const [timer, setTimer]= useState()
    setTimeout(()=>{
        setMostrard()
        setTimer('none')
      },2000)
    return(
        <div style={{minHeight:'800px'}}>
            <PulseLoader color="#ffffff" size={25} style={{display:timer}}></PulseLoader>
            {!items.length ? <h1 style={{color:'white'}}>Carrito Vacio, no tenes ningun producto para comprar</h1>:
                <>
                <div style={{display:mostrard}} className='CartTodo'>
                    <div  className='Cart' >
                        {items.map(((item, indx)=>
                        <Card  key={indx} style= {{marginLeft:'30px'}}>
                            <Card.Img variant="top" style={{width:'300px'}} src={item.imagen} />
                            <Card.Title><h1>{item.titulo}</h1></Card.Title>
                            <Card.Body>
                            <Card.Text><h2>Precio Unidad US${item.precio}</h2>
                            <h3>Cantidad de items {item.quantity}</h3>
                            Monto Total US${item.quantity*item.precio}</Card.Text><Button onClick={()=>removeItem(item.id)}>Remover</Button>
                            </Card.Body>
                        </Card>))}
                    </div>
                    <span className='Monto'><h1 style={{color:'black', alignSelf:'center'}}>TOTAL A PAGAR ${items.reduce((pv, cv)=>pv+(cv.precio*cv.quantity) ,0)}</h1></span>
                    <div style={{display:mostrar}} className='CheckOut'><CheckOut/></div>
                </div>
                <div className='finalizarCarrito'>
                <Button onClick={clear}>Limpiar Carrito</Button>
                
                <Button onClick={()=>{setMostrar()}}>Checkout</Button>
            </div>
                </>}
                <Link to='/'><Button>Volver al catalogo</Button></Link>
           
        </div>
    )
}