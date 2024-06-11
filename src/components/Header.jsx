import React from 'react'
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
import { AiFillDelete } from 'react-icons/ai'
import './styles.css'

const Header = () => {
  const {state:{cart}, dispatch} = CartState();
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
                    <Badge bg='inherit'>{cart.length}</Badge>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ minWidth:370 }}>
                    {
                      cart.length > 0 ? (
                        <>
                          {
                            cart.map((prod) => (
                              <span className="cartItem" key={prod.id}>
                                <img
                                  src={prod.image}
                                  className="cartItemImg"
                                  alt={prod.name}
                                />
                                <div className="cartItemDetail">
                                  <span>{prod.name}</span>
                                  <span>₹ {prod.price.split(".")[0]}</span>
                                </div>
                                <AiFillDelete
                                  fontSize="20px"
                                  style={{ cursor: "pointer" }}
                                  onClick={() =>
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: prod,
                                    })
                                  }
                                />
                              </span>
                            ))
                          }
                          <Link to="/cart">
                            <Button style={{ width: "95%", margin: "0 10px" }}>
                              Go To Cart
                            </Button>
                          </Link> 
                        </>
                      ) : (
                        <span style={{ padding: 10 }}>Cart is Empty!</span>
                      )
                    }
                    
                  </Dropdown.Menu>
    </Dropdown>

                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header