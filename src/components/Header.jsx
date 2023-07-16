import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand>Bandera Foundation</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/reports">
                                Reports
                            </Nav.Link>
                            <NavDropdown
                                title="Help"
                                id="navbarScrollingDropdown"
                            >
                                <NavDropdown.Item href="/civilian_help">
                                    Civilians
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/military_help">
                                    Army
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="Shop"
                                id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/merch">
                                    Merch
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/cart">
                                    <i className="fas fa-shopping-cart"></i>Cart
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/donate">
                                Donate
                            </Nav.Link>
                            <Nav.Link href="/login">
                            <i className="fas fa-user"></i>Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
