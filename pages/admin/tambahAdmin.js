import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import HeroComponent from '../../components/HeroComponent';
import { getHeadersMultiPart } from '../../utils/konstanta';
import axios from 'axios';
import alert from '../../utils/alert';

const tambahAdmin = () => {
  const router = useRouter();
  const [token, setToken] = useState();

  useEffect(() => {
    const getToken = localStorage.getItem('token');
    if (!getToken) {
      router.push('/login');
    }
    setToken(getToken);
  }, [token]);

  const click = async (e) => {
    e.preventDefault();
    const nama = document.querySelector('[name="nama"]').value;
    const email = document.querySelector('[name="email"]').value;
    const password = document.querySelector('[name="password"]').value;
    const image = document.querySelector('[name="image"]').files[0];

    console.log(nama);
    if (nama === '' || email === '' || password === '') {
      alert('error', 'error', 'field tidak boleh ada yang kosong');
    } else {
      const data = { name: nama, email, password, image };
      console.log(data);
      const headers = getHeadersMultiPart();
      await axios.post('https://familypreparation.up.railway.app/admin', data, headers).catch(err => alert('error', 'error'));
      
      alert('success', 'Data berhasil ditambahkan');
      router.push(`/admin`);
    }
  };

  return (
    <>
      <Head>
        <title>The Parentings - Post</title>
      </Head>
      <div style={{ minHeight: '100vh' }}>
        <Container className="py-3">
          <HeroComponent tittle="Tambah Admin" />
          <section className="section">
            <Container>
              <Row>
                <Col>
                  <Row md={9}>
                    <div className="underline mx-auto"></div>
                    <div className="mainContent">
                      <div className="content">
                        <Col md={9} style={{ margin: 'auto' }}>
                          <Card className="mt-4">
                            <Card.Body className="text-center">
                              <Form className="mt-3">
                                <Form.Group as={Row} className="mb-3" controlId="nama">
                                  <Form.Label column sm="2">
                                    Nama
                                  </Form.Label>
                                  <Col sm="10">
                                    <Form.Control type="text" name="nama" required/>
                                  </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="email">
                                  <Form.Label column sm="2">
                                    Email
                                  </Form.Label>
                                  <Col sm="10">
                                    <Form.Control type="email" name="email" required/>
                                  </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="password">
                                  <Form.Label column sm="2">
                                    password
                                  </Form.Label>
                                  <Col sm="10">
                                    <Form.Control type="password" name="password" required/>
                                  </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="image">
                                  <Form.Label column sm="2">
                                    Image
                                  </Form.Label>
                                  <Col sm="10">
                                    <Form.Control type="file" name="image" required/>
                                  </Col>
                                </Form.Group>

                                <Button variant="primary" type="submit" className="btnUpdate" onClick={(e) => click(e)}>
                                  Add admin
                                </Button>
                              </Form>
                            </Card.Body>
                          </Card>
                        </Col>
                      </div>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </Container>
      </div>
    </>
  );
};

export default tambahAdmin;
