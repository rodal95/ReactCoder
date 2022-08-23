import React from 'react'
import Item from './Item'
const ItemList = ({items}) => {
  return (
    <>
    <div  style={{display:'flex',flexDirection:'Row', justifyContent:'center'}}>
    {items.map((item, index)=>
    <Item key={index} id={item.id} title={item.titulo} price= {item.precio}/>
    )}
    </div>

    </>
  )
}

export default ItemList