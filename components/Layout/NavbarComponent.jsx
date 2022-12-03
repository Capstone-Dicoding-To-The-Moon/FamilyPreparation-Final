import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const NavbarComponent = () => {
  const router = useRouter();
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, token);


  // Jika ingin akses data, tapi data tertutup oleh token gunakan baris 21
  const getData = async () => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const data = await axios.get('http://localhost:5000/admin', headers);
    console.log(data);
  };
  const logout = () => {
    localStorage.removeItem('token');
    setToken();
    router.push('/');
  };
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" className="d-flex flex-column shadow">
        <Container fluid style={{ fontFamily: 'serif' }}>
          <Link href="/" style={{ fontFamily: 'serif', fontWeight: 'bold', fontSize: '24px' }} className="navbar-brand">
            The Parentings
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link className="nav-link" href="/">
                Home
              </Link>
              <Link className="nav-link" href="/artikel">
                Artikel
              </Link>
              <Link className="nav-link" href="/forumDiskusi">
                Forum Diskusi
              </Link>
              <Link className="nav-link" href="/about">
                About Us
              </Link>
              {token ? (
                <Button variant="light" className="ms-3 border-danger" onClick={() => logout()}>
                  Logout
                </Button>
              ) : (
                <Link href="/login">
                  <Button variant="light" className="ms-3 border-success">
                    Masuk
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
