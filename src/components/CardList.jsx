import React from 'react'
import Product from './Product';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const CardList = ({data}) => {


  return (
    <Container> 
    <Row>
      {data.map((product)=>(
        <Col xs={12} md={4}>
        <Product product={product} />
        </Col>
      ))}
    </Row>
    </Container>

  )
}

export default CardList