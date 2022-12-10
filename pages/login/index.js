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
import { getToken } from '../../utils/konstanta';
import { useEffect, useState } from 'react';

const login = () => {
  const router = useRouter();

  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(getToken(token));
  });

  if (token !== null) {
    router.push('/');
  }

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
        // setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem(
          'user',
          JSON.stringify({
            name,
            email,
            roleId: 2,
          })
        );
        alert('success', 'Berhasil Login');
      })
      .then(() => router.reload())
      .catch(function (error) {
        alert('error', error.response.data.status, error.response.data.message);
      });
  };

  return (
    <div>
      <Container className={`${Styles.ctn} py-5`}>
        <Card style={{ borderColor: 'secondary'}} className={`${Styles.card}`}>
          <div className="row g-0">
            <div className="col-md-5">
              <Card.Img variant="top" src="cover.png" className={`${Styles.cardimg}`} />
            </div>
            <div className="col-md-7 ">
              <div className="card-body">
                <Row className="align-items-center justify-content-center">
                  <Col md={8}>
                    <h1 className="text-center mb-4 mt-5">Login</h1>
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
                        <Form.Control type="password" name="password" placeholder="Password" autoComplete="on" />
                      </InputGroup>
                      <p>
                        Belum punya akun? <Link href="./signup">daftar</Link>
                      </p>
                      <Button className="btnUpdate" style={{ float: 'none' }} onClick={(e) => click(e)} type="submit">
                        Login
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};
export default login;
