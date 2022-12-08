import { Card, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BsFillTrashFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { getHeaders } from '../../utils/konstanta';

const admin = ({ allArtikel, allForum }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getDetail = async () => {
      const headers = getHeaders();
      const profileUser = await fetch(`http://localhost:5000/user/detail`, headers);

      const result = await profileUser.json();

      setUser(result.data);
    };

    getDetail();
  }, []);

  return (
    <Container>
      <div className="my-4 d-flex justify-content-between">
        <h1 className="fs-2">Selamat Datang admin {user.name} !</h1>
        <Button variant="outline-success">Add admin</Button>
      </div>
      <div className="underline mx-auto mb-4"></div>

      <Card>
        <Card.Header className="d-flex justify-content-between">
          <h2 className="fs-4">Data Artikel</h2>
          <p>Total artikel : {allArtikel.length}</p>
        </Card.Header>
        <Card.Body>
          <Table striped>
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th className="text-center">Author</th>
                <th className="text-center">Created At</th>
                <th className="text-center">Total Comment</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allForum.map((data, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{data.title}</td>
                    <td className="text-center">{data.author}</td>
                    <td className="text-center">{data.createdAt.split('T')[0]}</td>
                    <td className="text-center">{data.total_komentar}</td>
                    <td className="text-center">
                      <Button variant="outline-danger">
                        <BsFillTrashFill></BsFillTrashFill>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card className="my-4">
        <Card.Header className="d-flex justify-content-between">
          <h2 className="fs-4">Data Forum Diskusi</h2>
          <p>Total artikel : {allArtikel.length}</p>
        </Card.Header>
        <Card.Body>
          <Table striped>
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th className="text-center">Author</th>
                <th className="text-center">Created At</th>
                <th className="text-center">Likes</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allArtikel.map((data, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{data.title}</td>
                    <td className="text-center">{data.author}</td>
                    <td className="text-center">{data.createdAt.split('T')[0]}</td>
                    <td className="text-center">{data.vote}</td>
                    <td className="text-center">
                      <Button variant="outline-danger">
                        <BsFillTrashFill></BsFillTrashFill>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

admin.getInitialProps = async (ctx) => {
  const url = 'http://localhost:5000';

  const allArtikel = await fetch(`${url}/posts`)
    .then((res) => res.json())
    .then((res) => res.data);

  const allForum = await fetch(`${url}/forum`)
    .then((res) => res.json())
    .then((res) => res.data);

  return {
    allArtikel: allArtikel,
    allForum: allForum,
  };
};

export default admin;
