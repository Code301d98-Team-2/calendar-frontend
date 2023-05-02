import React, { Component } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import "../App.css";

const ProfileDropdown = () => {
    const { user, isAuthenticated, logout } = useAuth0();
  
    return (
      isAuthenticated && (
        <NavDropdown
          title={
            <img
              className="profile-image"
              src={user.picture}
              alt={user.name}
              width="30"
              height="30"
            />
          }
          id="profile-nav-dropdown"
        >
          <NavDropdown.Item disabled>{user.name}</NavDropdown.Item>
          <NavDropdown.Item disabled>{user.email}</NavDropdown.Item>
          <NavDropdown.Item disabled>{user['https://medicalendar.netlify.app//employee_id']}</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </NavDropdown.Item>
        </NavDropdown>
      )
    );
  };

class Header extends Component {
    render() {
      return (
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
                    <NavDropdown.Item href="/viewEmployees">View Employees</NavDropdown.Item>
                    <NavDropdown.Item href="/displayCalendar">Generate Schedule</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Past Schedules</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              <Nav className="ms-auto">
                <ProfileDropdown />
              </Nav>
            </Container>
          </Navbar>
        </>
      );
    }
  }

export default Header;
