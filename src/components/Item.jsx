import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
export default function Item({id,title, price, image}) {
  return (
    <div>
      <Link to={`/item/${id}`} style={{textDecoration:"none"}}>
      <Card style={{width: '18rem'}}>
      <Card.Body>
        <img src={image} width="150px" height="100px" alt=''></img>
        <Card.Title>{title}</Card.Title>
          <Card.Text>
            <span>US${price}</span>
          </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
      </Card>
      </Link>
    </div>
  )
}


