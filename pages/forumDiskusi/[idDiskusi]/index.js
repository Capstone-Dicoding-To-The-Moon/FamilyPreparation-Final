import Link from 'next/link';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import PaginationElement from '../../../components/PagenationComponent';
import SearchElement from '../../../components/SearchComponent';

const detailDiskusi = () => {
  const router = useRouter();
  const idDiskusi = router.query.idDiskusi;

  return (
    <div className="container">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mainHeader mb-3">
                <div className="contentHeader mb-3">
                  <h3 className="main-heading">The Parentings Forum</h3>
                </div>
                <div className="ms-3 search">
                  <SearchElement />
                </div>
              </div>
              <div className="underline mx-auto mb-4"></div>
              {/* <Breadcrumb /> */}
              <main className="mainContent">
                <div class="content">
                  <Card className="mb-3">
                    <Card.Body className="text-center">
                      <Table responsive="sm" style={{ textAlign: 'left' }}>
                        <thead>
                          <tr>
                            <th style={{ width: 700 }}>Topics</th>
                            <th>Views</th>
                            <th style={{ width: 200 }}>Last Post</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <Link className="nav-link" href="/">
                                Let's discuss about pregnancy here. Gynecolog, Hospital, baby shower etc
                              </Link>
                            </td>
                            <td>384</td>
                            <td>2022-07-01 00:23:57 by antonio456</td>
                          </tr>
                          <tr>
                            <td>
                              <Link className="nav-link" href="/">
                                Let's discuss about pregnancy here. Gynecolog, Hospital, baby shower etc
                              </Link>
                            </td>
                            <td>384</td>
                            <td>2022-07-01 00:23:57 by antonio456</td>
                          </tr>
                          <tr>
                            <td>
                              <Link className="nav-link" href="/">
                                Let's discuss about pregnancy here. Gynecolog, Hospital, baby shower etc
                              </Link>
                            </td>
                            <td>384</td>
                            <td>2022-07-01 00:23:57 by antonio456</td>
                          </tr>
                          <tr>
                            <td>
                              <Link className="nav-link" href="/">
                                Let's discuss about pregnancy here. Gynecolog, Hospital, baby shower etc
                              </Link>
                            </td>
                            <td>384</td>
                            <td>2022-07-01 00:23:57 by antonio456</td>
                          </tr>
                          <tr>
                            <td>
                              <Link className="nav-link" href="/">
                                Let's discuss about pregnancy here. Gynecolog, Hospital, baby shower etc
                              </Link>
                            </td>
                            <td>384</td>
                            <td>2022-07-01 00:23:57 by antonio456</td>
                          </tr>
                        </tbody>
                      </Table>
                      <PaginationElement className="" />
                    </Card.Body>
                  </Card>
                </div>
              </main>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default detailDiskusi;
