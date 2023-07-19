import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Navigation from './Navigation';

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
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/projects">
                                <Nav.Link>Projects</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/reports">
                                <Nav.Link>Reports</Nav.Link>
                            </LinkContainer>
                            <NavDropdown
                                title="Help"
                                id="navbarScrollingDropdown"
                            >
                                <LinkContainer to="/civilian_help">
                                    <NavDropdown.Item>
                                        Civilians
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/military_help">
                                    <NavDropdown.Item>Army</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <NavDropdown
                                title="Shop"
                                id="navbarScrollingDropdown"
                            >
                                <LinkContainer to="/shop">
                                    <NavDropdown.Item>Merch</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/shop/new">
                                    <NavDropdown.Item>Add Merch</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/cart">
                                    <NavDropdown.Item>
                                        <i className="fas fa-shopping-cart"></i>
                                        Cart
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <Nav className="justify-content-end">
                                <LinkContainer to="/donate">
                                    <Nav.Link>Donate</Nav.Link>
                                </LinkContainer>
                                <Navigation />
                            </Nav>
                            {/* <LinkContainer to="/login">
                                <Nav.Link>
                                <i className="fas fa-user"></i>Login
                                </Nav.Link>
                            </LinkContainer> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
