import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { IoPersonCircle } from 'react-icons/io5';
import Swal from 'sweetalert2';

const NavbarComponent = () => {
  const router = useRouter();
  const [token, setToken] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    setToken(token);
    setUser(JSON.parse(user));
  }, [token]);

  const logout = () => {
    Swal.fire({
      title: 'Apakah anda yakin untuk logout?',
      showDenyButton: true,
      confirmButtonText: 'ya',
      denyButtonText: `tidak`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Berhasil logout',
          timer: 1000,
        });
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken();
        router.push('/');
      }
    });
  };

  return (
    <>
      <a href="#main" className="skipContent">
        Skip to content
      </a>
      <Navbar collapseOnSelect expand="md" className="d-flex flex-column shadow-sm" style={{ backgroundColor: '#FEBE8C' }}>
        <Container fluid style={{ fontFamily: 'serif', paddingRight: 50, paddingLeft: 50 }}>
          <Link href="/" style={{ fontFamily: 'serif', fontWeight: 'bold', fontSize: '24px' }} className="navbar-brand">
            <img src="/favicon.png" style={{ height: '40px' }} className="border rounded-circle me-2"></img>
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
                <DropdownButton className="ms-3" id="dropdown-item-button" title={<IoPersonCircle></IoPersonCircle>} variant="outline-secondary" size="md" align="end">
                  <Link href="/profile">
                    <Dropdown.Item as="button">Profile</Dropdown.Item>
                  </Link>
                  {user.roleId == 1 ? (
                    <Link href="/admin">
                      <Dropdown.Item as="button">Dashboard</Dropdown.Item>
                    </Link>
                  ) : (
                    <></>
                  )}

                  <Dropdown.Divider />
                  <Dropdown.Item as="button" onClick={() => logout()}>
                    Log out
                  </Dropdown.Item>
                </DropdownButton>
              ) : (
                <Link href="/login">
                  <Button className="ms-3 border-success" style={{ backgroundColor: '#FFFBC1', color: 'black' }}>
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
