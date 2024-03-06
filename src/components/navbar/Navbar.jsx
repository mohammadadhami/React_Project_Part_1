import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";



function Navbar1() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >
            <Link to={'/'}>Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Product</Nav.Link>
            <NavDropdown title="Categories" id="collapsible-nav-dropdown">
              <NavDropdown.Item ><Link to={'/Mens'}>men's fashion</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              appliances
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">women's fashion</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              mobiles
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
                <Link to={'/login'}>Sign in</Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
            <Link to={'/Slid'}>categories</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;