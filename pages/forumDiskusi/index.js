import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import ListDiskusiComponent from '../../components/ForumDiskusi/ListDiskusiComponent';
import PaginationElement from '../../components/PagenationComponent';
import SearchElement from '../../components/SearchComponent';

const detailDiskusi = ({ allForum, id }) => {
  const router = useRouter();

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
    <Container>
      <section className="section">
        <Container>
          <Row>
            <Col md={12}>
              <div className="d-flex justify-content-between">
                <div className="contentHeader mb-3">
                  <h3 className="main-heading">The Parentings Forum</h3>
                  <Link href="/forumDiskusi/buatDiskusi">
                    <Button className="buttonTanya">Buat Pertanyaan</Button>
                  </Link>
                </div>
                <div className="ms-3" style={{ float: 'right' }}>
                  <SearchElement dataAwal={allForum} setKonten={changeDataForum} path="forum" />
                </div>
              </div>
              <div className="underline mx-auto mb-4"></div>
              <main className="mainContent">
                <div className="content">
                  <ListDiskusiComponent allForum={dataForum} />
                </div>
              </main>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

detailDiskusi.getInitialProps = async (ctx) => {
  const url = 'http://localhost:5000';
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
