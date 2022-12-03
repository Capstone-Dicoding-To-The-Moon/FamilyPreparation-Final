import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Home = () => {
  let currentDate = new Date().toJSON().slice(0, 10);
  console.log(currentDate); // "2022-06-17"
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
                          <Form.Control type="text" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="author">
                        <Form.Label column sm="2">
                          Tanggal
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control type="text" disabled value={currentDate} />
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

export default Home;
