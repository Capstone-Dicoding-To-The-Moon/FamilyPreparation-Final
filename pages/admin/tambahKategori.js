import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import HeroComponent from '../../components/HeroComponent';
import { getHeaders, getHeadersMultiPart } from '../../utils/konstanta';
import axios from 'axios';
import alert from '../../utils/alert';

const tambahKategori = () => {
  const router = useRouter();
  const [token, setToken] = useState();

  useEffect(() => {
    const getToken = localStorage.getItem('token');
    let getUser = localStorage.getItem('user');

    getUser = JSON.parse(getUser);
    if (!getToken || getUser.roleId != 1) {
      router.push('/login');
    }
    setToken(getToken);
  }, [token]);

  const click = async (e) => {
    e.preventDefault();
    const kategori = document.querySelector('[name="kategori"]').value;

    if (kategori === '') {
      alert('error', 'error', 'field tidak boleh ada yang kosong');
    } else {
      const data = { title: kategori };
      console.log(data);
      const headers = getHeaders();
      await axios.post('https://familypreparation.up.railway.app/categories', data, headers).catch((err) => alert('error', 'error'));

      alert('success', 'Data berhasil ditambahkan');
      router.push(`/admin`);
    }
  };

  return (
    <>
      <Head>
        <title>The Parentings - Admin</title>
      </Head>
      <div style={{ minHeight: '100vh' }}>
        <Container className="py-3">
          <HeroComponent tittle="Tambah Kategori" />
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
                                <Form.Group as={Row} className="mb-3" controlId="kategori">
                                  <Form.Label column sm="2">
                                    Nama Kategori
                                  </Form.Label>
                                  <Col sm="10">
                                    <Form.Control type="text" name="kategori" required />
                                  </Col>
                                </Form.Group>

                                <Button variant="primary" type="submit" className="btnUpdate" onClick={(e) => click(e)}>
                                  Add Kategori
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

export default tambahKategori;
