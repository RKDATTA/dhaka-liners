import React, { useContext } from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    //context api
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/home">Easy Rides</Navbar.Brand>
            <Nav className="ml-auto pr-3">
                <Link className="pl-2 text-dark text-decoration-none" to="/home">Home</Link>
                <Link className="pl-2 text-dark text-decoration-none" to="/login">Destination</Link>
                <Link className="pl-2 text-dark text-decoration-none" to="/signup">Blog</Link>
                <Link className="pl-2 text-dark text-decoration-none" to="/login">Contract</Link>
            </Nav>
            <Button variant="outline-primary"><Link to="/login" style={{ textDecoration: 'none', color: '#000' }}>{loggedInUser.name || 'Login'}</Link></Button>
            <Form inline>
                {/* <Button variant="outline-primary"><Link to="/login" style={{ textDecoration: 'none', color: '#000' }}>Login</Link></Button> */}
            </Form>
        </Navbar >
    );
};

export default Header;