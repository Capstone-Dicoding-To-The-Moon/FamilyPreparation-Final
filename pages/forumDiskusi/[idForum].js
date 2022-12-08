import { Button, Card, Col, Container, InputGroup, Row } from 'react-bootstrap';
import { BsChatLeftText } from 'react-icons/bs';
import BreadcrumbElement from '../../components/ForumDiskusi/BreadcrumbComponent';
import ListKomentarComponent from '../../components/ForumDiskusi/ListKomentarComponent';
import InputKomentarComponent from '../../components/ForumDiskusi/inputKomentarComponent';
import { useEffect, useState } from 'react';

const detailForum = ({ dataDetailForum }) => {
  const [komentar, setKomentar] = useState([]);
  const [clickedUpVote, setClickedUpVote] = useState(true);

  useEffect(() => {
    setKomentar(dataDetailForum.komentar);
  }, dataDetailForum);

  // digunakan untuk menambah komentar
  const addKomentar = (data) => {
    setKomentar(data);
  };
  // digunakan untuk penanda upvote
  const upVote = (data) => {
    setClickedUpVote(data);
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
                <div class="content">
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title>{dataDetailForum.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        <span style={{ marginRight: 20 }}>{dataDetailForum.createdAt.split('T')[0]}</span>
                        <span>
                          <BsChatLeftText /> {dataDetailForum.komentar.length - 1} Komentar
                        </span>
                      </Card.Subtitle>

                      <div class="card mb-3" style={{ maxWidth: 1200, backgroundColor: 'Gainsboro' }}>
                        <div className="row g-0">
                          <div className="col-md-1">
                            <img src="/profile.png" className="img-fluid" style={{ width: 70, margin: 12 }}></img>
                          </div>
                          <div className="col-md-8">
                            <Card.Body>
                              <h5 className="card-title">{dataDetailForum.author} (author) </h5>
                              <Card.Subtitle className="mb-3 text-muted">
                                <span style={{ marginRight: 20 }}> {dataDetailForum.createdAt.split('T')[0]} </span>
                              </Card.Subtitle>
                              <Card.Text>{dataDetailForum.komentar[0].content}</Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </div>

                      <hr />
                      <div className="card mb-3" style={{ maxWidth: 1200, border: 'none' }}>
                        <ListKomentarComponent dataKomentar={komentar} setKomentar={addKomentar} idPage={dataDetailForum.id} />
                      </div>
                      <hr />

                      <div className="card mb-3" style={{ maxWidth: 1200, border: 'none' }}>
                        <InputKomentarComponent setKomentar={addKomentar} id={dataDetailForum.id} />
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
  const url = 'http://localhost:5000';
  const id = ctx.query.idForum;

  const dataDetailForum = await fetch(`${url}/forumDis/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);

  return {
    dataDetailForum: dataDetailForum,
  };
};

export default detailForum;
