import { Container } from 'react-bootstrap';
import HeroComponent from '../../components/HeroComponent';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const postArtikel = ({ listKategori }) => {
  const router = useRouter();
  const [token, setToken] = useState();

  // didmount
  useEffect(() => {
    const getToken = localStorage.getItem('token');
    if (!getToken) {
      router.push('/login');
    }
    setToken(getToken);
  }, token);

  return (
    <>
      <Head>
        <title>The Parentings - Post</title>
      </Head>
      <div style={{ minHeight: '100vh' }}>
        <Container className="py-3">
          <HeroComponent tittle="Post Artikel" />
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
                                <Form.Group as={Row} className="mb-3" controlId="title">
                                  <Form.Label column sm="2">
                                    Judul
                                  </Form.Label>
                                  <Col sm="10">
                                    <Form.Control type="text" />
                                  </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="author">
                                  <Form.Label column sm="2">
                                    Author
                                  </Form.Label>
                                  <Col sm="10">
                                    <Form.Control type="text" />
                                  </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                  <Form.Label column sm="2">
                                    Kategori
                                  </Form.Label>
                                  <Col sm="10">
                                    <Form.Select aria-label="Default select example">
                                      <option>Open this select menu</option>
                                      {listKategori.map((kategori, id) => {
                                        return (
                                          <option value={id + 1} key={id}>
                                            {kategori}
                                          </option>
                                        );
                                      })}
                                    </Form.Select>
                                  </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                  <Form.Label column sm="2">
                                    Content
                                  </Form.Label>
                                  <Col sm="10">
                                    <Form.Control as="textarea" rows={10} />
                                  </Col>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="btnUpdate">
                                  Posting
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

export default postArtikel;

postArtikel.getInitialProps = async (ctx) => {
  const listKategori = await fetch(`https://fakestoreapi.com/products/categories`).then((res) => res.json());

  return {
    listKategori: listKategori,
  };
};
