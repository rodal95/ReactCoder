import React from 'react'

export default function ItemDetail({item}) {
    const {id,precio,titulo,imagen} = item;
  return (
    <div>
        <h1>{titulo}-{id}</h1>
        <img src={imagen}></img>
        <h3>{precio}</h3>
    </div>
  )
}
