import { Button, Card, Col, Container, InputGroup, Row } from 'react-bootstrap';
import { BsChatLeftText, BsFillTrashFill } from 'react-icons/bs';
import BreadcrumbElement from '../../components/ForumDiskusi/BreadcrumbComponent';
import ListKomentarComponent from '../../components/ForumDiskusi/ListKomentarComponent';
import InputKomentarComponent from '../../components/ForumDiskusi/InputKomentarComponent';
import { useEffect, useState } from 'react';
import { getAPI_URL, getHeaders } from '../../utils/konstanta';
import axios from 'axios';
import Head from 'next/head';
import { deleteData } from '../../utils/fetchApi';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

const detailForum = ({ dataDetailForum, id }) => {
  const [komentar, setKomentar] = useState([]);
  const [user, setUser] = useState([]);
  const author = dataDetailForum.user.name;
  const authorEmail = dataDetailForum.user.email;
  const router = useRouter();
  useEffect(() => {
    const getDetail = async () => {
      const headers = getHeaders();
      const profileUser = await axios
        .get(`https://familypreparation.up.railway.app/user/detail`, headers)
        .then((res) => res.data.data)
        .catch((err) => 'undefined');
      setUser(profileUser);
    };

    getDetail();
    setKomentar(dataDetailForum.komentar);
  }, []);
  // digunakan untuk menambah komentar
  const addKomentar = (data) => {
    setKomentar(data);
  };

  const clickDelete = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Apakah anda yakin untuk menghapus forum ini?',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Ya',
      denyButtonText: `Tidak`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Data berhasil dihapus', '', 'success');
        const result = await deleteData('forum', id);
        router.push('/forumDiskusi');
      }
    });
  };
  return (
    <Container>
      <section className="section">
        <Container>
          <Row>
            <Col md={12}>
              <div className="mainHeader mb-3">
                <div className="contentHeader mb-3">
                  <h3 className="main-heading">The Parentings Forum</h3>
                </div>
              </div>
              <div className="underline mx-auto mb-4"></div>
              <BreadcrumbElement />
              <main className="mainContent">
                <div className="content">
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title className="fs-2 mb-3">
                        {dataDetailForum.title}
                        {user.email != authorEmail ? (
                          <></>
                        ) : (
                          <Button variant="outline-danger" className="fs-6 py-0 ms-3" onClick={(e) => clickDelete(e)}>
                            <BsFillTrashFill className="p-0 m-0"></BsFillTrashFill>
                          </Button>
                        )}
                      </Card.Title>
                      <Card.Subtitle className="my-2 text-muted">
                        <span style={{ marginRight: 20 }}>{dataDetailForum.createdAt.split('T')[0]}</span>
                        <span>
                          <BsChatLeftText /> {dataDetailForum.komentar.length} Komentar
                        </span>
                      </Card.Subtitle>

                      <div className="card mb-3" style={{ maxWidth: 1200, backgroundColor: 'Gainsboro' }}>
                        <div className="row g-0">
                          <div className="col-md-1">
                            <img src="/profile.png" className="img-fluid" style={{ width: 70, margin: 12 }}></img>
                          </div>
                          <div className="col-md-8">
                            <Card.Body>
                              <h5 className="card-title">{author} (author) </h5>
                              <Card.Subtitle className="mb-3 text-muted">
                                <span style={{ marginRight: 20 }}> {dataDetailForum.createdAt.split('T')[0]} </span>
                              </Card.Subtitle>
                              <Card.Text>{dataDetailForum.content}</Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </div>

                      <hr />
                      <div className="card mb-3" style={{ maxWidth: 1200, border: 'none' }}>
                        <ListKomentarComponent dataKomentar={komentar} setKomentar={addKomentar} />
                      </div>
                      <hr />

                      <div className="card mb-3" style={{ maxWidth: 1200, border: 'none' }}>
                        <InputKomentarComponent setKomentar={addKomentar} id={dataDetailForum.id} user={user} />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </main>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

detailForum.getInitialProps = async (ctx) => {
  const url = getAPI_URL();
  const id = ctx.query.idForum;

  const dataDetailForum = await fetch(`${url}/forumDis/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);

  return {
    dataDetailForum: dataDetailForum,
    id: id,
  };
};

export default detailForum;
