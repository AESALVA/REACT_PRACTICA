import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Counter = () => {
    const [contador, setContador] = useState(1);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };
  return (
    <Card className="bg-secondary border-0 rounded-0 text-center" >
      <Card.Body>
      <Card.Title>Counter</Card.Title>
      <Button variant="outline-primary" onClick={sumar}>+</Button>
      <Button variant="outline-primary" onClick={restar}>-</Button>
      <h4>{contador}</h4>
      </Card.Body>
    </Card>
  )
}

export default Counter