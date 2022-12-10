import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListDiskusiComponent from '../../components/ForumDiskusi/ListDiskusiComponent';
import PaginationElement from '../../components/PagenationComponent';
import SearchElement from '../../components/SearchComponent';
import { getAPI_URL } from '../../utils/konstanta';
import { paginate } from '../../utils/paginate';

const detailDiskusi = ({ allForum }) => {
  const [dataForum, setDataForum] = useState([]);
  useEffect(() => {
    const getDataForum = () => {
      setDataForum(allForum);
    };
    getDataForum();
  }, []);

  const changeDataForum = (data) => {
    setDataForum(data);
  };

  return (
    <>
      <Head>
        <title>The Parentings - Forum Diskusi</title>
      </Head>
      <Container>
        <section className="section">
          <Container>
            <Row>
              <Col md={12}>
                <div className="d-flex justify-content-between">
                  <div className="contentHeader mb-3 ">
                    <h3 className="main-heading">The Parentings Forum</h3>
                    <Link href="/forumDiskusi/buatDiskusi">
                      <Button className="buttonTanya">Buat Pertanyaan</Button>
                    </Link>
                  </div>
                  <div className="ms-3" style={{ float: 'Right' }}>
                    <SearchElement dataAwal={allForum} setKonten={changeDataForum} path="forum" />
                  </div>
                </div>
                <div className="underline mx-auto mb-4"></div>
                <main className="mainContent">
                  <div className="content">
                    {dataForum.length !== 0 ? (
                      <ListDiskusiComponent allForum={dataForum} totalContent={5} />
                    ) : (
                      <>
                        <Card className="mb-3">
                          <Card.Body>
                            <img src="./404 Error-pana.svg" height={'340px'} width={'100%'}></img> <h1 className="text-center fs-3">Maaf forum diskusi yang anda cari tidak ditemukan</h1>
                          </Card.Body>
                        </Card>
                      </>
                    )}
                  </div>
                </main>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    </>
  );
};

detailDiskusi.getInitialProps = async (ctx) => {
  const url = getAPI_URL();
  const id = ctx.query.idArtikel;

  const allForum = await fetch(`${url}/forum`)
    .then((res) => res.json())
    .then((res) => res.data);

  return {
    allForum: allForum,
    id: id,
  };
};

export default detailDiskusi;
