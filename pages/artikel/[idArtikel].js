import { useRouter } from 'next/router';
import Card from 'react-bootstrap/Card';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Styles from '../../styles/artikel/detailArtikelPage.module.css';
import { useEffect, useState } from 'react';
import KomentarComponent from '../../components/komentarComponent';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import alert from '../../utils/alert';

import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

const artikel = ({ detailArtikel, comentArtikel, artikelRekomendasi }) => {
  const [token, setToken] = useState();
  const [heart, setHeart] = useState(false);
  const [vote, setVote] = useState(detailArtikel.vote);

  useEffect(() => {
    const getToken = localStorage.getItem('token');
    if (getToken) {
      setToken(getToken);
    }
  }, [token]);

  const clickHeart = (e) => {
    e.preventDefault();
    if (token) {
      if (heart === false) {
        setHeart(true);
        setVote((prev) => prev + 1);
      } else {
        setHeart(false);
        setVote((prev) => prev - 1);
      }
    } else {
      alert('error', 'error', 'silahkan login terlebih dahulu');
    }
  };

  console.log(heart);
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
                <div className={`${Styles.contentHeader}`}>
                  <h1 className="main-heading fs-1">{detailArtikel.title}</h1>
                </div>
              </div>

              <div className={`${Styles.underline} mx-auto`}></div>

              <main className={`${Styles.mainContent} p-4`}>
                <div className={`${Styles.content} p-2`}>
                  <div>
                    <Card>
                      <Card.Img variant="top" className={`${Styles.imagesCard} mb-4`} src={detailArtikel.image_large} srcSet="/artikel.jpg"></Card.Img>
                      <Card.Body className="border-top">
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="mb-1">Diterbitkan oleh : {detailArtikel.author}</p>
                            <p>{detailArtikel.createdAt}</p>
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
                          {detailArtikel.content}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>

                <aside className={`${Styles.aside}`}>
                  <div className="card">
                    <h3 className={`${Styles.title} border-bottom py-2 pb-3`}>Artikel Lainnya</h3>
                    <ol>
                      {[1, 2, 3, 4, 5].map((data, idx) => (
                        <li key={idx}>
                          <Link href="/">Artikel {data}</Link>
                        </li>
                      ))}
                    </ol>
                  </div>
                </aside>
              </main>

              <div style={{ padding: '24px' }}>
                <h1 className="main-heading">Komentar</h1>
                <div className={`${Styles.underline} mx-auto`}></div>
                <KomentarComponent datas={comentArtikel} id={detailArtikel.id} />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

artikel.getInitialProps = async (ctx) => {
  const url = 'http://localhost:5000';
  const id = ctx.query.idArtikel;

  const detailArtikel = await fetch(`${url}/posts/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);

  const comentArtikel = await fetch(`${url}/postsCom/${id}`)
    .then((res) => res.json())
    .then((res) => res.data.komentar);

  const artikelSameCategori = await fetch(`${url}/postsCat/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);

  return {
    detailArtikel: detailArtikel,
    comentArtikel: comentArtikel,
    artikelRekomendasi: artikelSameCategori,
  };
};

export default artikel;
