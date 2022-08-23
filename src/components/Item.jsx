import React from 'react'

export default function Item({id,title, price, imagen}) {
  return (
    <div>
        
        <h3>{title}</h3><br />
       <b> <span>US${price}</span></b><br />
    </div>
  )
}
