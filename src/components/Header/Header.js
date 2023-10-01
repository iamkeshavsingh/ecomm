import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Header({ filterProducts, carts }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container fluid>
        <Navbar.Brand href='/'>
          <Link to='/'>Ecommerce Store</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {!isLoggedIn ? (
              <>
                <Nav.Link href='/login'>
                  <Link to='/login'>Login</Link>
                </Nav.Link>
                <Nav.Link href='#action2'>
                  <Link to='/signup'>SignUp</Link>
                </Nav.Link>
              </>
            ) : (
              <>
                <NavDropdown
                  title='Welcome! Keshav'
                  id='navbarScrollingDropdown'
                >
                  <NavDropdown.Item href='#action4'>Profile</NavDropdown.Item>
                  <NavDropdown.Item href='#action5'>My Orders</NavDropdown.Item>
                  <NavDropdown.Item href='#action5'>Whistlist</NavDropdown.Item>
                  <NavDropdown.Item href='#action5'>Cart</NavDropdown.Item>
                  <NavDropdown.Item href='#action5'>Logout</NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search Products...'
              className='me-2'
              aria-label='Search'
              onChange={filterProducts}
            />
          </Form>
        </Navbar.Collapse>
        <p>{carts}</p>
      </Container>
    </Navbar>
  );
}
export default Header;
