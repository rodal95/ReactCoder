import React , {useContext} from 'react';
import { CartContext } from '../CartContext';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export default function Cart(){
    const {items, removeItem, clear} = useContext(CartContext)

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
                    <h3>TOTAL A PAGAR ${items.reduce((pv, cv)=>pv+(cv.precio*cv.quantity) ,0)}</h3>
                </>}
            <div className='finalizarCarrito'>
                <Button onClick={clear}>Limpiar Carrito</Button>
                <Link to='/'><Button>Continuar comprando</Button></Link>
                <Link to='/checkout'><Button>Checkout</Button></Link>
            </div>
        </>
    )
}