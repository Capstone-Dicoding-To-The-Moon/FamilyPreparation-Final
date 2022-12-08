import { Container, Row, Col, InputGroup } from 'react-bootstrap';
import { IoMailSharp, IoKey, IoPersonSharp, IoImageSharp } from 'react-icons/io5';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import alert from '../../utils/alert';

const login = () => {
  const router = useRouter();
  const click = (e) => {
    e.preventDefault();
    const name = document.querySelector('[name="name"]').value;
    const email = document.querySelector('[name="email"]').value;
    const password = document.querySelector('[name="password"]').value;
    const image = document.querySelector('[name="image"]').files[0];

    const headers = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    axios
      .post(
        'https://familypreparation.up.railway.app/user',
        {
          name,
          email,
          password,
          image,
        },
        headers
      )
      .then(function (response) {
        alert('success', response.data.status);
        router.push('/login');
      })
      .catch(function (error) {
        alert('error', error.response.data.status, error.response.data.message);
      });
  };

  return (
    <div>
      <Container>
        <Row className="align-items-center justify-content-center" style={{ height: '100vh', width: '100%' }}>
          <Col md={6}>
            <div className="rounded p-5 shadow-lg" style={{ border: '1px solid #f76c2f' }}>
              <h1 className="text-center mb-4">SignUp</h1>
              <Form action="post" encType="multipart/form-data">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <IoPersonSharp></IoPersonSharp>
                  </InputGroup.Text>
                  <Form.Control type="text" name="name" placeholder="Enter name" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <IoMailSharp></IoMailSharp>
                  </InputGroup.Text>
                  <Form.Control type="email" name="email" placeholder="email" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <IoKey></IoKey>
                  </InputGroup.Text>
                  <Form.Control type="password" name="password" placeholder="Password" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <IoImageSharp></IoImageSharp>
                  </InputGroup.Text>
                  <Form.Control type="file" name="image" />
                </InputGroup>
                <p>
                  Sudah punya akun? <Link href="./login">masuk</Link>
                </p>
                <Button className="btnUpdate" style={{ float: 'none' }} onClick={(e) => click(e)} type="submit">
                  Daftar
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default login;
