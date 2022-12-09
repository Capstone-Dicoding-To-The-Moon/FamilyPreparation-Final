import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import HeroComponent from '../../components/HeroComponent';
import Styles from '../../styles/profile/profilePage.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getHeaders } from '../../utils/konstanta';

const profile = () => {
  function getImgURL(url, callback) {
    // xhr.onload = function () {
    //   callback(xhr.response);
    // };
    // xhr.open('GET', url);
    // xhr.setRequestHeader('Authorization', getHeaders().headers['Authorization']);
    // xhr.responseType = 'blob';
    // xhr.send();
    // const headers = getHeaders();
    // axios.get(url, headers);
  }

  // function main(url) {
  //   getImgURL(url, (imgBlob) => {
  //     let name = 'hello.jpg';
  //     let file = new File([imgBlob], name, { type: 'image/jpeg', lastModified: new Date().getTime() }, 'utf-8');
  //     let container = new DataTransfer();
  //     container.items.add(file);
  //     document.querySelector('[name="image"]').files = container.files;
  //   });
  // }

  // console.log('jalan');
  // main('http://localhost:5000/user/image/cQ8mG4cbVEO9cY4KYQoNAuR5cXXJL3RQllXiSS7IW8QefF9t0N-small.png');
  // console.log('masuk');

  const [user, setUser] = useState([]);

  useEffect(() => {
    const getDetail = async () => {
      const headers = getHeaders();
      const profileUser = await axios.get(`https://familypreparation.up.railway.app/user/detail`, headers).catch((e) => console.log(e));

      setUser(profileUser.data.data);
    };

    getDetail();
  }, []);

  const click = (e) => {
    e.preventDefault();
  };

  console.log(user);
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
                            <Card.Img variant="top" src={user.image_small} srcSet="./profile.png" name="image" className={`${Styles.photoProfile}`}></Card.Img>
                            <Form.Control type="file" className={`${Styles.chooseFile} ${Styles.form}`} disabled></Form.Control>
                          </Form.Group>

                          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                              Nama
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control type="text" className={`${Styles.form}`} value={user.name} name="name" disabled />
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                              Email
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control type="email" className={`${Styles.form}`} value={user.email} name="email" disabled />
                            </Col>
                          </Form.Group>
                          <Button type="submit" variant="outline-secondary" className={`${Styles.btnUpdate}`} onClick={(e) => click(e)} disabled>
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
