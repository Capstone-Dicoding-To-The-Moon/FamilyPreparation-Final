import Link from 'next/link';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getToken } from '../../utils/konstanta';

const login = () => {
  const router = useRouter();

  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(getToken(token));
  });

  if (token !== null) {
    router.push('/');
  }

  const click = (e) => {
    e.preventDefault();
    const email = document.querySelector('[name="email"]').value;
    const password = document.querySelector('[name="password"]').value;

    axios
      .post('https://familypreparation.up.railway.app/admin-login', {
        email,
        password,
      })
      .then(function (response) {
        const token = response.data.data;
        localStorage.setItem('token', token);
        localStorage.setItem(
          'user',
          JSON.stringify({
            email,
            roleId: 1,
          }),
        );
        alert('success', 'Berhasil Login');
        router.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
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
