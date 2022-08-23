import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Item({id,title, price, image}) {
  return (
    <div>
        <Card style={{width: '18rem'}} >
      
      <Card.Body>
        <img src={image} width="150px" height="100px"></img>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <span>{price}</span>

        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
       
    </div>
  )
}