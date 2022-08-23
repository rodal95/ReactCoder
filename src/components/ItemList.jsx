import React from 'react'
import Item from './Item'
const ItemList = ({items}) => {
  return (
    <>
    {items.map((item, index)=>
    <Item key={index} id={item.id} title={item.titulo} price= {item.precio}/>
    )}
    </>
  )
}

export default ItemList