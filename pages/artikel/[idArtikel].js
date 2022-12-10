import { useRouter } from 'next/router';
import Card from 'react-bootstrap/Card';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Styles from '../../styles/artikel/detailArtikelPage.module.css';
import { useEffect, useState } from 'react';
import KomentarComponent from '../../components/KomentarComponent';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import alert from '../../utils/alert';
import { getHeaders } from '../../utils/konstanta';
import { getAPI_URL } from '../../utils/konstanta';
import { BsSuitHeart, BsSuitHeartFill, BsFillTrashFill } from 'react-icons/bs';
import { deleteData } from '../../utils/fetchApi';
import Swal from 'sweetalert2';
import Image from 'next/image';
import defaultPic from '../../public/artikel.jpg';

const artikel = ({ detailArtikel, id }) => {
  // router
  const router = useRouter();

  const [token, setToken] = useState();
  const [heart, setHeart] = useState(false);
  const [vote, setVote] = useState(detailArtikel?.vote);
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState([]);

  const authorEmail = detailArtikel?.user?.email;

  useEffect(() => {
    if (!detailArtikel) {
      alert('error', 'error', 'Tidak terdapat artikel dengan id yang diminta');
      router.push('/artikel');
    }
  }, []);

  useEffect(() => {
    const getToken = localStorage.getItem('token');
    const profile = localStorage.getItem('user');
    if (getToken) {
      setToken(getToken);
    }
    if (profile) {
      setProfile(profile);
    }
    const getDetail = async () => {
      const headers = getHeaders();
      const profileUser = await axios
        .get(`https://familypreparation.up.railway.app/user/detail`, headers)
        .then((res) => res.data.data)
        .catch((err) => 'undefined');
      setUser(profileUser);
    };

    getDetail();
  }, []);

  const clickHeart = async (e) => {
    e.preventDefault();
    const data = { id: id };
    const headers = getHeaders();
    if (token) {
      if (heart === false) {
        await axios
          .put('https://familypreparation.up.railway.app/postsUpVote', data, headers)
          .then((res) => {
            setHeart(true);
          })
          .catch((err) => {
            console.error(err);
            alert('error', 'Ooopss!!', `${err.response.status} ${err.response.statusText}`);
          });

        const updateVote = await axios.get(`https://familypreparation.up.railway.app/posts/${id}`).then((r) => r.data.data.vote);

        setVote(updateVote);
      } else {
        // postsDownVote
        if (vote !== 0) {
          await axios
            .put('https://familypreparation.up.railway.app/postsDownVote', data, headers)
            .then((res) => {
              setHeart(false);
            })
            .catch((err) => {
              console.error(err);
              alert('error', 'Ooopss!!', `${err.response.status} ${err.response.statusText}`);
            });
          const updateVote = await axios.get(`https://familypreparation.up.railway.app/posts/${id}`).then((r) => r.data.data.vote);
          setVote(updateVote);
        }
      }
    } else {
      alert('error', 'error', 'silahkan login terlebih dahulu');
    }
  };

  const clickDelete = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Apakah anda yakin untuk menghapus artikel ini?',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Ya',
      denyButtonText: `Tidak`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Data berhasil dihapus', '', 'success');
        const result = await deleteData('posts', id);
        router.push('/artikel');
      }
    });
  };

  return (
    <>
      <Head>
        <title>The Parentings - Artikel</title>
      </Head>

      <Container>
        <section className="section">
          <Row>
            <Col md={12}>
              <div className={`${Styles.mainHeader}`}>
                <div className={`${Styles.contentHeader} d-flex`}>
                  <h1 className="main-heading fs-1">{detailArtikel.title}</h1>
                  {user.email != authorEmail && user.roleId != 1 ? (
                    <></>
                  ) : (
                    <div className="mx-3 d-flex flex-column justify-content-center">
                      <Button variant="outline-danger" className="p-1 mt-1 fs-6" onClick={(e) => clickDelete(e)}>
                        <BsFillTrashFill></BsFillTrashFill>
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className={`${Styles.underline} mx-auto`}></div>

              <main className={`${Styles.mainContent} p-4`}>
                <div className={`${Styles.content} p-2`}>
                  <div>
                    <Card>
                      <div style={{ height: '352px', position: 'relative' }}>
                        <Image src={defaultPic} srcSet={defaultPic} alt="Gambar Artikel" fill sizes="" />
                      </div>
                      <Card.Body className="border-top">
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="mb-1">Diterbitkan oleh : {detailArtikel?.user?.name}</p>
                            <p>{detailArtikel?.createdAt?.split('T')[0]}</p>
                          </div>

                          <div className="d-flex flex-column">
                            <Button className="p-0 bg-transparent border-0" onClick={(e) => clickHeart(e)}>
                              <p className="mb-1 fs-6 text-dark" style={{ color: '#F76C2F' }}>
                                {heart ? <BsSuitHeartFill style={{ color: '#F76C2F' }}></BsSuitHeartFill> : <BsSuitHeart style={{ color: '#F76C2F' }}></BsSuitHeart>}
                              </p>
                            </Button>
                            <p className="text-center">{vote}</p>
                          </div>
                        </div>
                        <Card.Text style={{ textAlign: 'justify' }} className="fs-6 border-top pt-3">
                          {detailArtikel?.content}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>

                <aside className={`${Styles.aside}`}>
                  <div className="card">
                    <h3 className={`${Styles.title} border-bottom py-2 pb-3`}>Artikel {detailArtikel?.kategori?.title} Lainnya</h3>
                    <ol className="mx-2">
                      {detailArtikel?.kategori?.kategori_post.map((data, idx) => (
                        <div key={idx}>
                          {data.post.id == id ? (
                            <></>
                          ) : (
                            <li className="my-1">
                              <Link href={`/artikel/${data.postId}`}>Artikel {data.post.title}</Link>
                            </li>
                          )}
                        </div>
                      ))}
                    </ol>
                  </div>
                </aside>
              </main>

              <div style={{ padding: '24px' }}>
                <h1 className="main-heading">Komentar</h1>
                <div className={`${Styles.underline} mx-auto`}></div>
                {detailArtikel ? <KomentarComponent datas={detailArtikel?.komentar} id={detailArtikel?.id} /> : ''}
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

artikel.getInitialProps = async (ctx) => {
  const url = getAPI_URL();
  const id = ctx.query.idArtikel;

  // Pake data ini
  const detailArtikel = await fetch(`${url}/postsCom/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);

  return {
    detailArtikel: detailArtikel,
    id: id,
  };
};

export default artikel;
