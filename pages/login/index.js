import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useRouter } from 'next/router';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Styles from '../../styles/LOGIN/pageLogin.module.css';
import { IoMailSharp, IoKey } from 'react-icons/io5';
import alert from '../../utils/alert';

const login = () => {
  const router = useRouter();
  const click = (e) => {
    e.preventDefault();
    const email = document.querySelector('[name="email"]').value;
    const password = document.querySelector('[name="password"]').value;

    axios
      .post('https://familypreparation.up.railway.app/user-login', {
        email,
        password,
      })
      .then(function (response) {
        const token = response.data.data;
        localStorage.setItem('token', token);
        localStorage.setItem(
          'user',
          JSON.stringify({
            email,
            roleId: 2,
          })
        );
        alert('success', response.data.status);
        router.push('/');
      })
      .catch(function (error) {
        console.log(error);
        alert('error', error.response.data.status, error.response.data.message);
      });
  };

  return (
    <Container>
      <Row className="align-items-center justify-content-center" style={{ height: '100vh', width: '100%' }}>
        <Col md={6}>
          <div className="rounded p-5 shadow-lg" style={{ border: '1px solid #f76c2f' }}>
            <h1 className="text-center mb-4">Login</h1>
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <IoMailSharp></IoMailSharp>
                </InputGroup.Text>
                <Form.Control placeholder="Username" type="email" name="email" />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <IoKey></IoKey>
                </InputGroup.Text>
                <Form.Control type="password" name="password" placeholder="Password" />
              </InputGroup>
              <p>
                Belum punya akun? <Link href="./signup">daftar</Link>
              </p>
              <Button className="btnUpdate" style={{ float: 'none' }} onClick={(e) => click(e)} type="submit">
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default login;
