import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

const Product = ({product}) => {
  return (
<Card className='text-center p-3'>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <p>{product.price}</p>
        </Card.Body>
        
        <Card.Footer>
         <Button variant="outline-primary">Ir al producto</Button>
        </Card.Footer>
      </Card>
        )
}

export default Product