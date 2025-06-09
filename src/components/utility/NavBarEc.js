import React, { useEffect, useState } from 'react'
import { Container, Dropdown, DropdownButton, Form, Nav, Navbar  } from 'react-bootstrap'
import logo from "../../images/logo.png"
import login from "../../images/login.png"
import cart from "../../images/cart.png"
import NavbarSearchHook from '../../hook/search/navbar-search-hook'
const NavBarEc = () => {
  const [searchWord,onChangeSearch] = NavbarSearchHook()

  const [user, setUser] = useState('')
  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  }, [])
  // console.log(user)
  

  let word = ""
  if (localStorage.getItem("searchWord") != null) {
    word= localStorage.getItem("searchWord")
  }

const logOut = () => {
  localStorage.removeItem("user")
  setUser('')
}

  return (
   <>
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href='/'>
          <img src= {logo} className='logo'/>
          </a>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Form.Control
            value={word}
            onChange={onChangeSearch}
              type="search"
              placeholder="ابحث..."
              className="me-2 w-100 text-center"
              aria-label="Search"
            />
          <Nav
            className="me-auto"

          >
          {
            user? ( <Dropdown>
              <Dropdown.Toggle  id="dropdown-basic">
                {user.name}
              </Dropdown.Toggle>
        
              <Dropdown.Menu>
                <Dropdown.Item href="/user/allOrders">الصفحة الشخصية</Dropdown.Item>
                 <Dropdown.Divider />
                <Dropdown.Item onClick={logOut} href="/">تسجيل الخروج</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>):   <Nav.Link href="/login"
            className='nav-text mt-3 d-flex justify-content-center'>
              
                  <img src={login} className='img-login'/>
                  <p style={{color:'white'}}>دخول</p>
              
            </Nav.Link>
          }
            <Nav.Link href="/cart"
            className='nav-text mt-3 d-flex justify-content-center'>
             
                  <img src={cart} className='img-login'/>
                  <p style={{color:'white'}}>العربة</p>
             
            </Nav.Link>
            
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default NavBarEc