import React , {useContext} from 'react';
import { CartContext } from '../CartContext';
import {Link} from 'react-router-dom'


export default function Cart(){
    const {items, removeItem, clear} = useContext(CartContext)

    return(<>
    <div>Cart</div>
        {!items.length ? <span>no tengo items</span>:
        <><ol >
            {items.map(((item, indx)=><li key={indx}>{item.titulo}-{item.quantity}<button onClick={()=>removeItem(item.id)}>Remover</button></li>))}
        </ol>
        <h3>precioTtotal = ${items.reduce((pv, cv)=>pv+(cv.precio*cv.quantity) ,0)}</h3>
        </>}
       
        <div>
            <button onClick={clear}>Limpiar Carrito</button>
            <Link to='/'><button>Ir a inicio</button></Link>
            <Link to='/checkout'><button>Checkout</button></Link>
        </div>
    
</>
    )
}