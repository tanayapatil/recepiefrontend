import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';




const Header = () => {
    return (
        <>
            <Navbar className='navbg'   fixed="top" >
                <Container >
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link  as={Link} to="/recepies" >Recipies</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
           
            

        </>
    )
}

export default Header
