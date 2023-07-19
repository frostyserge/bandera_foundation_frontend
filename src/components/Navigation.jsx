import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
    }, [isAuth]);

    return(
        <div>
                    {isAuth ? <Nav.Link to="/shop/new">Update Shop</Nav.Link> : null}
                    {isAuth ? <Nav.Link to="/logout">Logout</Nav.Link> :
                    <Nav.Link to="/login"><i className="fas fa-user"></i>Login</Nav.Link>}
        </div>
    )
};

export default Navigation;