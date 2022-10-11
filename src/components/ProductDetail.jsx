import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';

const ProductDetail = ({product}) => {
   

  return (<Container className='vh-100'>
    <Card className='text-center p-3'>
        <Container className='d-flex justify-content-center'>
   <Card.Img variant="top" style={{width:'200px'}} src={product.image} />
   </Container>
   <Card.Body>
     <Card.Title>{product.title}</Card.Title>
     <Card.Text>
       {product.description}
     </Card.Text>
     <p>${product.price}</p>
   </Card.Body>
   
   <Card.Footer>
    <Button variant="outline-success">Comprar</Button>
   </Card.Footer>
 </Card>
 </Container>
  )
}

export default ProductDetail