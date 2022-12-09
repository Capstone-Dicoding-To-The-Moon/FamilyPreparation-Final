import { Card, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BsFillTrashFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { getAPI_URL, getHeaders } from '../../utils/konstanta';
import ListArtikelComponent from '../../components/admin/ListArtikelComponent';
import axios from 'axios';
import Link from 'next/link';
import ListForumDiskusiComponent from '../../components/admin/ListForumDiskusiComponent';
import { useRouter } from 'next/router';

const admin = ({ allArtikel, allForum, allUser }) => {
  const router = useRouter();
  const [user, setUser] = useState([]);

  const [artikel, setArtikel] = useState([]);
  const [forum, setForum] = useState([]);

  useEffect(() => {
    const roleId = JSON.parse(localStorage.getItem('user'))?.roleId;
    if (roleId !== 1) {
      router.push('/');
    }

    const getData = async () => {
      const headers = getHeaders();
      const profileUser = await fetch(`https://familypreparation.up.railway.app/user/detail`, headers);
      const result = await profileUser.json();
      setUser(result.data);

      const getArtikel = await axios.get('https://familypreparation.up.railway.app/posts').then((res) => res.data.data);
      setArtikel(getArtikel);

      const getForum = await axios.get('https://familypreparation.up.railway.app/forum').then((res) => res.data.data);
      setForum(getForum);
    };

    getData();
  }, []);

  const changeArtikel = (data) => {
    setArtikel(data);
  };

  const changeForum = (data) => {
    setForum(data);
  };

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

      <ListArtikelComponent dataArtikel={artikel} setArtikel={changeArtikel} />

      <ListForumDiskusiComponent dataForum={forum} setForum={changeForum} />

      {/* <Card>
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
      </Card> */}
    </Container>
  );
};

admin.getInitialProps = async (ctx) => {
  const url = getAPI_URL();

  const allArtikel = await fetch(`${url}/posts`)
    .then((res) => res.json())
    .then((res) => res.data);

  // const allForum = await fetch(`${url}/forum`)
  //   .then((res) => res.json())
  //   .then((res) => res.data);

  // const allUser = await fetch(`${url}/user`)
  //   .then((res) => res.json())
  //   .then((res) => res.data);

  return {
    allArtikel: allArtikel,
    // allForum: allForum,
    // allUser: allUser,
  };
};

export default admin;
