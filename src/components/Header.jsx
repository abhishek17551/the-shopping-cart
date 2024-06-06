import React from 'react'
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Navbar bg='dark' variant='dark' style={{height:80}}>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                  <FormControl style={{width:500}} placeholder='Search' className='m-auto'>
                  </FormControl>
                </Navbar.Text>
                <Nav>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaShoppingCart color='white' fontSize='25px'/>
                    <Badge bg='inherit'>10</Badge>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Cart in empty!</Dropdown.Item>
                  </Dropdown.Menu>
    </Dropdown>

                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header