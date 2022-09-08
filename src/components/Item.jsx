import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
export default function Item({id,title, price, image}) {
  return (
    <div>
        <Card style={{width: '18rem'}}>
      
      <Card.Body>
        <Link to={`/item/${id}`}>
        <img src={image} width="150px" height="100px" alt='nada'></img>
        </Link>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <span>US${price}</span>

        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
       
    </div>
  )
}


