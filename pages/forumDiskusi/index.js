import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const forumDiskusi = () => {
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
                <div className="ms-3">
                  <Button className="buttonTanya" variant="secondary">
                    <Link href="/forumDiskusi/buatDiskusi">Buat Pertanyaan</Link>
                  </Button>
                </div>
              </div>

              <div className="underline mx-auto mb-4"></div>

              <main className="mainContent">
                <div className="content">
                  <Card className="mb-3">
                    <Card.Body>
                      <Table responsive="sm" style={{ textAlign: 'left' }}>
                        <thead>
                          <tr>
                            <th style={{ width: 600 }}>Parenting</th>
                            <th>Topics</th>
                            <th>Views</th>
                            <th style={{ width: 200 }}>Last Post</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ borderStyle: 'none' }}>
                              <Link className="nav-link" href="/forumDiskusi/1">
                                Pregnancy
                              </Link>
                            </td>
                            <td style={{ borderStyle: 'none' }}>231</td>
                            <td style={{ borderStyle: 'none' }}>11846</td>
                            <td style={{ borderStyle: 'none' }}>2022-07-01 00:23:57 by antonio456</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>

                  <Card className="mb-3">
                    <Card.Body>
                      <Table responsive="sm" style={{ textAlign: 'left' }}>
                        <thead>
                          <tr>
                            <th style={{ width: 600 }}>Parenting</th>
                            <th>Topics</th>
                            <th>Views</th>
                            <th style={{ width: 200 }}>Last Post</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ borderStyle: 'none' }}>
                              <Link className="nav-link" href="/forumDiskusi/1">
                                Pregnancy
                              </Link>
                            </td>
                            <td style={{ borderStyle: 'none' }}>231</td>
                            <td style={{ borderStyle: 'none' }}>11846</td>
                            <td style={{ borderStyle: 'none' }}>2022-07-01 00:23:57 by antonio456</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>

                  <Card className="mb-3">
                    <Card.Body>
                      <Table responsive="sm" style={{ textAlign: 'left' }}>
                        <thead>
                          <tr>
                            <th style={{ width: 600 }}>Parenting</th>
                            <th>Topics</th>
                            <th>Views</th>
                            <th style={{ width: 200 }}>Last Post</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ borderStyle: 'none' }}>
                              <Link className="nav-link" href="/forumDiskusi/1">
                                Pregnancy
                              </Link>
                            </td>
                            <td style={{ borderStyle: 'none' }}>231</td>
                            <td style={{ borderStyle: 'none' }}>11846</td>
                            <td style={{ borderStyle: 'none' }}>2022-07-01 00:23:57 by antonio456</td>
                          </tr>
                        </tbody>
                      </Table>
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

export default forumDiskusi;
