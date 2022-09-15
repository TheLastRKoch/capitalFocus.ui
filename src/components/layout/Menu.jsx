import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Menu = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">CapitalFocus</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/uncategorizedItems">Uncategorized items</Nav.Link>
          <Nav.Link href="/movementCategorization">Movement Categorization</Nav.Link>
          <Nav.Link href="/budgetList">Budget List</Nav.Link>
          <Nav.Link href="/budgetManagement">Budget Manager</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="#memes">
            Sign in
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Menu;