import React from 'react'
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  return (
    <div>
        <Navbar bg='dark' variant='dark' style={{height:80}}>
            <Container>
                <Navbar.Brand>
                    <a href='/'>Shopping Cart</a>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                  <FormControl style={{width:500}} placeholder='Search' className='m-auto'>
                  </FormControl>
                </Navbar.Text>
                <Nav>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaShoppingCart color='white' fontSize='25px'/>
                    <Badge>10</Badge>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
    </Dropdown>

                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header