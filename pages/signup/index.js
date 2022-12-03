import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

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
      .post('http://localhost:5000/admin', {
        name,
        email,
        password,
        image,
      }, headers)
      .then(function (response) {
        router.push('/login');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container>
      <Form action="post" encType="multipart/form-data">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>image</Form.Label>
          <Form.Control type="file" name="image" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(e) => click(e)}>
          SignUp
        </Button>
      </Form>
    </Container>
  );
};
export default login;
