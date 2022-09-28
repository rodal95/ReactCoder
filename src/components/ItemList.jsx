import React from 'react'
import Item from './Item'
const ItemList = ({items}) => {
  return (
    <>
    <div  style={{display:'flex',flexDirection:'Row', justifyContent:'space-around',flexWrap:'wrap'}}>
    {items.map((item, indx)=>
    <Item key={indx} id={item.id} title={item.titulo} price= {item.precio} image={item.imagen}/>
    )}
    </div>

    </>
  )
}

export default ItemList