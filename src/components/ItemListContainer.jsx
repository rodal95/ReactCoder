import React from 'react'
import Counter from './Counter'
import ItemCount from './ItemCount'


export default function ItemListContainer(greeting) {
  const onAdd = (contador)=>{
    console.log("soy un add", contador)
    return contador
  }
  return (
    <div>{greeting.greeting}
      <ItemCount stock = {5} initial = {1} onAdd = {onAdd}/>
      
    </div>
  )
}
