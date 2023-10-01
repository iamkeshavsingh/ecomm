import { Row } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
import { useEffect, useState } from 'react';

function HomePage() {
  const [products, setProducts] = useState(getProductsData());
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCarts = localStorage.getItem('CART');
    if (getCarts) {
      setCarts(JSON.parse(getCarts));
    }
  }, []);

  function filterProducts(event) {
    const value = event.target.value.toUpperCase();
    const newProducts = products.filter((data) => {
      return data.name.toUpperCase().includes(value);
    });
    setProducts(newProducts);
  }

  function updateCart(id) {
    const isItemPresent = carts.findIndex((data) => data.id === id);
    let updatedCarts;
    if (isItemPresent === -1) {
      updatedCarts = [
        ...carts,
        {
          id,
          quantity: 1,
        },
      ];
    } else {
      const newCarts = JSON.parse(JSON.stringify(carts));
      newCarts[isItemPresent].quantity = newCarts[isItemPresent].quantity + 1;
      updatedCarts = newCarts;
    }
    localStorage.setItem('CART', JSON.stringify(updatedCarts));
    setCarts(updatedCarts);
  }

  return (
    <div>
      <Header filterProducts={filterProducts} carts={carts.length} />
      <h2 className='m-3'>My Library</h2>
      <Row>
        {products.map((data) => (
          <Product
            id={data.id}
            name={data.name}
            description={data.description}
            updateCart={updateCart}
          />
        ))}
      </Row>
    </div>
  );
}

export default HomePage;

function getProductsData() {
  return [
    {
      id: 1,
      name: 'Telivision',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeatdolorem aliquam odio saepe dolore harum, sit vero iusto reiciendis!Cumque.',
    },
    {
      id: 2,
      name: 'Mobile Phone',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeatdolorem aliquam odio saepe dolore harum, sit vero iusto reiciendis!Cumque.',
    },
    {
      id: 3,
      name: 'AC',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeatdolorem aliquam odio saepe dolore harum, sit vero iusto reiciendis!Cumque.',
    },
    {
      id: 4,
      name: 'Laptops',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeatdolorem aliquam odio saepe dolore harum, sit vero iusto reiciendis!Cumque.',
    },
  ];
}
