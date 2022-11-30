import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import HeroComponent from '../../components/HeroComponent';
import Styles from '../../styles/profile/profilePage.module.css';
import Head from 'next/head';

const profile = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Head>
        <title>The Parentings - Profile</title>
      </Head>
      <Container>
        <HeroComponent tittle="Profile" />
        <section className={`${Styles.section}`}></section>
        <Container>
          <Row>
            <div className="col-md-12">
              <div className={`${Styles.underline} mx-auto`}></div>
              <main className={`${Styles.mainContent}`}>
                <div className={`${Styles.content}`}>
                  <div className="col-md-12">
                    <Card>
                      <Card.Body>
                        <Form>
                          <Form.Group controlId="formFile" className="text-center mb-3">
                            <Card.Img variant="top" src="./profile.png" className={`${Styles.photoProfile}`}></Card.Img>
                            <Form.Control type="file" className={`${Styles.chooseFile} ${Styles.form}`}></Form.Control>
                          </Form.Group>

                          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                              Nama
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control type="text" className={`${Styles.form}`} placeholder="Nama" />
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                              Email
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control type="text" className={`${Styles.form}`}placeholder="Email" />
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                              No Telepon
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control type="number" className={`${Styles.form}`} placeholder="noTelepon" />
                            </Col>
                          </Form.Group>
                          <Button type="submit" className={`${Styles.btnUpdate}`}>
                            Submit
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </main>
            </div>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default profile;
