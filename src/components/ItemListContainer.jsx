import React from 'react'
import ItemCount from './ItemCount'
import { useEffect } from 'react'
import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import ItemList from './ItemList'


export default function ItemListContainer(greeting) {
  const [items, setItems] = useState({})

useEffect(()=> {
    let productos = [{id:1, titulo: "Ak 47", precio: 500}, {id:2, titulo:"M40", precio:350}];
    new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(productos)
      }, 2000)
    }).then((data)=>{
      setItems(data)
    })




},[])
  const onAdd = (contador)=>{
  }

  
  return (
    <div>{greeting.greeting}
      <div>
      {items.length ?
      <ItemList items ={items}/>:
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
      </Spinner>
      }</div>

     <ItemCount stock = {5} initial = {1} onAdd = {onAdd}/> 
    </div>
  )
}
