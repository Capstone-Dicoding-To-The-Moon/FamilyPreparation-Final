import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import HeroComponent from '../../components/HeroComponent';
import axios from 'axios';
import alert from '../../utils/alert';
import { getHeadersMultiPart } from '../../utils/konstanta';

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
  }, [token]);

  const click = async (e) => {
    e.preventDefault();
    const title = document.querySelector('[name="title"]').value;
    const kategoriId = document.querySelector('[name="kategori"]').value;
    const content = document.querySelector('[name="content"]').value;

    if (title === '' || kategoriId === '' || content === '') {
      alert('error', 'error', 'field tidak boleh ada yang kosong');
    } else {
      const data = { title, kategoriId, content };
      const headers = getHeadersMultiPart();
      const post = await axios.post('https://familypreparation.up.railway.app/posts', data, headers);

      alert('success', 'Data berhasil ditambahkan');
    }
  };

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
                                    <Form.Control type="text" name="title" />
                                  </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="author">
                                  {/* disable get data user (author) */}
                                  <Form.Label column sm="2">
                                    Author
                                  </Form.Label>
                                  <Col sm="10">
                                    <Form.Control type="text" value="author" disabled />
                                  </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                  <Form.Label column sm="2">
                                    Kategori
                                  </Form.Label>
                                  <Col sm="10">
                                    <Form.Select aria-label="Default select example" name="kategori">
                                      <option selected disabled>
                                        Open this select menu
                                      </option>
                                      {listKategori.map((kategori, id) => {
                                        return (
                                          <option value={kategori.id} key={id}>
                                            {kategori.title}
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
                                    <Form.Control as="textarea" rows={10} name="content" />
                                  </Col>
                                </Form.Group>

                                <Button variant="primary" type="submit" className="btnUpdate" onClick={(e) => click(e)}>
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
  const listKategori = await fetch(`https://familypreparation.up.railway.app/categories`)
    .then((res) => res.json())
    .then((res) => res.data);

  return {
    listKategori: listKategori,
  };
};
