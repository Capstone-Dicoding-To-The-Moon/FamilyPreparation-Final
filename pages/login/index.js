import Link from 'next/link';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useRouter } from 'next/router';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';

const login = () => {
  const router = useRouter();
  const click = (e) => {
    e.preventDefault();
    const email = document.querySelector('[name="email"]').value;
    const password = document.querySelector('[name="password"]').value;

    axios
      .post('http://localhost:5000/user-login', {
        email,
        password,
      })
      .then(function (response) {
        const token = response.data.data;
        localStorage.setItem('token', token);
        router.push('/');
        // console.log(token);
      })
      .catch(function (error) {
        alert(error.response.data.message);
      });
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" onClick={(e) => click(e)} type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};
export default login;
