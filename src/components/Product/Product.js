import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({ name, description, id, updateCart, metaData }) {
  const { isPresentInCart, quantity } = metaData;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {isPresentInCart ? (
          <>
            <Button variant='primary' onClick={() => updateCart(id, 'ADD')}>
              +
            </Button>
            {quantity}
            <Button variant='primary' onClick={() => updateCart(id, 'REMOVE')}>
              -
            </Button>
          </>
        ) : (
          <Button variant='primary' onClick={() => updateCart(id, 'ADD')}>
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Product;
