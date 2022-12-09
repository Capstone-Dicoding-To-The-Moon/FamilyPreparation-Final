import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import alert from '../../utils/alert';
import { getHeadersMultiPart } from '../../utils/konstanta';
import axios from 'axios';

const buatDiskusi = ({ listKategori }) => {
  const router = useRouter();
  const [token, setToken] = useState();

  useEffect(() => {
    const getToken = localStorage.getItem('token');
    if (!getToken) {
      router.push('/login');
    }
    setToken(getToken);
  }, token);

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
      const post = await axios.post('https://familypreparation.up.railway.app/forum', data, headers);

      const idPost = post.data.data.id;

      alert('success', 'Data berhasil ditambahkan');
      router.push(`/forumDiskusi/${idPost}`);
    }
  };

  let currentDate = new Date().toJSON().slice(0, 10);
  return (
    <div style={{ minHeight: '100vh' }}>
      <Container className="py-5">
        <section className="section">
          <Container>
            <Row>
              <Col md={9} style={{ margin: 'auto' }}>
                <Card className="mt-4">
                  <Card.Body className="text-center">
                    <Form className="p-3">
                      <Form.Group as={Row} className="mb-3" controlId="title">
                        <Form.Label column sm="2">
                          Judul Diskusi
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control type="text" name="title" />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3" controlId="date">
                        <Form.Label column sm="2">
                          Tanggal
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control type="text" disabled value={currentDate} />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3" controlId="kategori">
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

                      <Form.Group as={Row} className="mb-3" controlId="content">
                        <Form.Label column sm="2">
                          Content
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control as="textarea" rows={10} name="content" />
                        </Col>
                      </Form.Group>

                      <Button variant="primary" className="btnUpdate" onClick={(e) => click(e)}>
                        Buat Diskusi
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    </div>
  );
};

buatDiskusi.getInitialProps = async (ctx) => {
  const listKategori = await fetch(`https://familypreparation.up.railway.app/categories`)
    .then((res) => res.json())
    .then((res) => res.data);

  return {
    listKategori: listKategori,
  };
};

export default buatDiskusi;
