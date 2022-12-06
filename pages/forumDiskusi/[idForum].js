import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsChatLeftText } from 'react-icons/bs';
import BreadcrumbElement from '../../components/ForumDiskusi/BreadcrumbComponent';
import ListKomentarComponent from '../../components/ForumDiskusi/ListKomentarComponent';

const detailForum = ({ listKomentar }) => {
  console.log(listKomentar);
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
                      <Card.Title>Judul Diskusi</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        <span style={{ marginRight: 20 }}>11-11-2022 00:10</span>
                        <span>
                          <BsChatLeftText /> 13 Komentar
                        </span>
                      </Card.Subtitle>

                      <div class="card mb-3" style={{ maxWidth: 1200, backgroundColor: 'Gainsboro' }}>
                        <div className="row g-0">
                          <div className="col-md-1">
                            <img src="/profile.png" className="img-fluid" style={{ width: 70, margin: 12 }}></img>
                          </div>
                          <div className="col-md-8">
                            <Card.Body>
                              <h5 className="card-title">Nama Author</h5>
                              <Card.Subtitle className="mb-3 text-muted">
                                <span style={{ marginRight: 20 }}>Jum’at 11 November 2022 00:10 </span>
                              </Card.Subtitle>
                              <Card.Text>
                                Ini Pertanyaan? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur officiis ipsa ab nihil iure nulla quisquam officia. Quibusdam, rerum perferendis? Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quis quo laudantium ipsam consectetur tempore quidem quas doloribus expedita quia perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, natus earum ut tempore sed
                                voluptatibus repudiandae beatae fugit ratione eligendi.
                              </Card.Text>
                            </Card.Body>
                          </div>
                        </div>
                      </div>

                      <hr />
                      <div class="card mb-3" style={{ maxWidth: 1200, border: 'none' }}>
                        <ListKomentarComponent />
                      </div>
                      <hr />
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
  const id = ctx.query.idArtikel;

  const listKomentar = await fetch(`${url}/komentar_forum`)
    .then((res) => res.json())
    .then((res) => res.data);

  return {
    listKomentar: listKomentar,
  };
};
export default detailForum;
