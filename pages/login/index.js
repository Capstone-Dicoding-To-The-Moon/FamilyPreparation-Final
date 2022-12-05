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
      .post('http://localhost:5000/user-login', {
        email,
        password,
      })
      .then(function (response) {
        const token = response.data.data;
        console.log(response);
        localStorage.setItem('token', token);
        alert('success', response.data.status);
        router.push('/');
      })
      .catch(function (error) {
        console.log(error);
        alert('error', error.response.data.status, error.response.data.message);
      });
  };

  return (
    <div>
      <Container style={{ minHeight: '100vh' }}>
        <Row className="justify-content-md-center">
          <h1 className="text-center mt-5 mb-4 fw-bold" style={{ fontSize: '44px' }}>
            Login
          </h1>
          <Col md={6}>
            <div className="rounded p-5 shadow-lg" style={{ border: '1px solid #f76c2f' }}>
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
    </div>
  );
};
export default login;
