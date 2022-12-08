import { Card, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BsFillTrashFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { getHeaders } from '../../utils/konstanta';
import ListArtikelComponent from '../../components/admin/listArtikelComponent';
import axios from 'axios';
import Link from 'next/link';

const admin = ({ allArtikel, allForum, allUser }) => {
  const [user, setUser] = useState([]);

  const [artikel, setArtikel] = useState([]);

  useEffect(() => {
    const getDetail = async () => {
      const headers = getHeaders();
      const profileUser = await fetch(`http://localhost:5000/user/detail`, headers);
      const result = await profileUser.json();
      setUser(result.data);

      const getArtikel = await axios.get('http://localhost:5000/posts').then((res) => res.data.data);
      setArtikel(getArtikel);
    };

    getDetail();
  }, []);

  const changeArtikel = (data) => {
    setArtikel(data);
  };

  console.log(artikel);
  return (
    <Container>
      <div className="my-4 d-flex justify-content-between">
        <h1 className="fs-2">Selamat Datang admin {user.name} !</h1>
        <div>
          <Link href="/admin/tambahAdmin" className="mx-2 my-1">
            <Button variant="outline-success">Add admin</Button>
          </Link>
          <Link href="/admin/tambahKategori">
            <Button variant="outline-success">Add Kategori</Button>
          </Link>
        </div>
      </div>
      <div className="underline mx-auto mb-4"></div>

      <ListArtikelComponent dataArtikel={allArtikel} />

      <Card className="my-4">
        <Card.Header className="d-flex justify-content-between">
          <h2 className="fs-4">Data Forum Diskusi</h2>
          <p>Total artikel : {allForum.length}</p>
        </Card.Header>
        <Card.Body>
          <Table responsive>
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th className="text-center">Author</th>
                <th className="text-center">Created At</th>
                <th className="text-center">Komentar</th>
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

      <Card>
        <Card.Header className="d-flex justify-content-between">
          <h2 className="fs-4">Data User</h2>
          <p>Total artikel : {allArtikel.length}</p>
        </Card.Header>
        <Card.Body>
          <Table responsive>
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

  // const allUser = await fetch(`${url}/user`)
  //   .then((res) => res.json())
  //   .then((res) => res.data);

  return {
    allArtikel: allArtikel,
    allForum: allForum,
    // allUser: allUser,
  };
};

export default admin;
