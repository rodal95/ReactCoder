import React , {useContext, useState} from 'react';
import { CartContext } from '../CartContext';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import CheckOut from './CheckOut';

export default function Cart(){
    const {items, removeItem, clear} = useContext(CartContext)
    const [mostrar, setMostrar]= useState('none')
    return(
        <>
            {!items.length ? <span>no tengo items</span>:
                <>
                    <div className='Cart'>
                        {items.map(((item, indx)=>
                        <div key={indx} className='CartItems'>
                            <img src={item.imagen} width='200px'/>
                            <h2>Precio Parcial US${item.precio}</h2>
                            <h3>Cantidad de items {item.quantity}</h3>
                            <h3>Monto Total US${item.quantity*item.precio}</h3><Button onClick={()=>removeItem(item.id)}>Remover</Button>
                        </div>))}
                    </div>
                    <span style={{backgroundColor:'white'}}><h1 style={{color:'black'}}>TOTAL A PAGAR ${items.reduce((pv, cv)=>pv+(cv.precio*cv.quantity) ,0)}</h1></span>
                </>}
            <div className='finalizarCarrito'>
                <Button onClick={clear}>Limpiar Carrito</Button>
                <Link to='/'><Button>Continuar comprando</Button></Link>
                
                <Button onClick={()=>{setMostrar()}}>Checkout</Button>
                <div style={{display:mostrar}} className='CheckOut'><CheckOut/></div>
                
            </div>
        </>
    )
}