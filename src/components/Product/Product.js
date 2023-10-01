import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({ name, description, id, updateCart }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant='primary' onClick={() => updateCart(id)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
