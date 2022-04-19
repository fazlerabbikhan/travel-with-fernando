import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar collapseOnSelect expand='lg' sticky='top' bg='dark' variant='dark'>
            <Container className='py-2'>
                <Navbar.Brand className='fw-bold' as={Link} to='/'>TRAVEL WITH FERNANDO</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto fw-bold'>
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                    </Nav>
                    <Nav className='fw-bold'>
                        {
                            user ?
                                <button className='btn btn-link text-white text-decoration-none fw-bold' onClick={handleSignOut}>Sign Out</button>
                                :
                                <Nav.Link as={Link} to='/login'>
                                    Login
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;