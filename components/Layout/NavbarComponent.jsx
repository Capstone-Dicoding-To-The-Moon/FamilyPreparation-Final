import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" className="d-flex flex-column" style={{ boxShadow: 'rgba(0, 0, 0, 0.20) 0px 5px 15px' }}>
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
              <Button variant="light" className="ms-3 border-success">
                Masuk
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;