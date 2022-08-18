import React from 'react'
import Counter from './Counter'

export default function ItemListContainer(greeting) {
  return (
    <div>{greeting.greeting}
      <Counter/>
    </div>
  )
}
