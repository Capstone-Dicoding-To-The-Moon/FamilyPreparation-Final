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
import ListUserComponent from '../../components/admin/ListUserComponent';

const admin = () => {
  const router = useRouter();
  const [user, setUser] = useState([]);

  const [artikel, setArtikel] = useState([]);
  const [forum, setForum] = useState([]);
  const [allUser, setAllUser] = useState([]);

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

      const getUser = await axios.get('https://familypreparation.up.railway.app/user', headers).then((res) => res.data.data);
      setAllUser(getUser);
    };

    getData();
  }, []);

  const changeArtikel = (data) => {
    setArtikel(data);
  };

  const changeForum = (data) => {
    setForum(data);
  };

  const changeUser = (data) => {
    setAllUser(data);
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

      <ListUserComponent dataUser={allUser} setUser={changeUser} />
    </Container>
  );
};

export default admin;
