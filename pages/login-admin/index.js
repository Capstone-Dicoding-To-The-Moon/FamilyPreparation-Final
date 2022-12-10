import Link from 'next/link';
import { Card, Col, Container, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getToken } from '../../utils/konstanta';
import { IoMailSharp, IoKey } from 'react-icons/io5';
import alert from '../../utils/alert';

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
      .post('https://familypreparation.up.railway.app/admin-login', {
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
            roleId: 1,
          })
        );
        alert('success', 'Berhasil Login');
        router.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Container className="py-5">
        <Card style={{ borderColor: 'red', width: 900, margin: 'auto' }}>
          <div className="row g-0">
            <div className="col-md-5">
              <Card.Img variant="top" src="cover.png" className="cover" style={{ width: 400 }} />
            </div>
            <div className="col-md-7 ">
              <div className="card-body" style={{ height: '100%' }}>
                <Row className="align-items-center justify-content-center mt-5">
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
