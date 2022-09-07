import React , {useContext} from 'react';
import { CartContext } from '../CartContext';



export default function Cart(){
    const {items} = useContext(CartContext)

    return(<>
    <div>Cart</div>
        {! items && <span>no tengo items</span>}
        {items.lenght && <ol>
            {items.map(((item, indx)=><li key={indx}>{item.title}-{item.quantity}</li>))}
        </ol>}
    
</>
    )
}