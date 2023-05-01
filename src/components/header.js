import { Component } from "react";
import { Nav, Navbar,Container, NavDropdown } from "react-bootstrap";




class Header extends Component{

    render(){
        return(
            <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">My Work Schedule</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/addEmployee">Add Employee</NavDropdown.Item>
                        <NavDropdown.Item href="/viewEmployees">View Employees
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Generate Schedule</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Past Schedules
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </>

        )
    }

}

export default Header;