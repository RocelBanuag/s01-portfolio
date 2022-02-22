import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Zuitt Bootcamp</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#courses">Courses</Nav.Link>
                <Nav.Link href="#register">Register</Nav.Link>
                <Nav.Link href="#login">Login</Nav.Link>
            </Nav>
        </Navbar>
    )
}