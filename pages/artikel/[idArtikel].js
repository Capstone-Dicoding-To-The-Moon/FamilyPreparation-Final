import { useRouter } from 'next/router';
import Card from 'react-bootstrap/Card';
import Head from 'next/head';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Styles from '../../styles/artikel/detailArtikelPage.module.css';

const artikel = () => {
  const router = useRouter();
  const idArtikel = router.query.idArtikel;

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
                  <h3 className="main-heading">Menghadapi Anak Sensitif yang Mudah Menangis</h3>
                </div>
              </div>

              <div className={`${Styles.underline} mx-auto`}></div>

              <main className={`${Styles.mainContent} p-4`}>
                <div className={`${Styles.content} p-2`}>
                  <div className="col-md-12">
                    <Card>
                      <Card.Img variant="top" className={`${Styles.imagesCard} mb-4`} src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></Card.Img>
                      <Card.Body className="border-top">
                        <Card.Text style={{ textAlign: 'justify' }}>
                          Sebentar-sebentar menangis. Menghadapi anak yang mudah menangis memang tidak mudah.Untuk balita sensitif, menangis masih menjadi salah satu bentuk komunikasi. Mereka tidak bisa menyampaikan apa yang mereka maksud
                          sehingga pecahlah tangisannya. Misalnya saja apabila dalam sebuah permainan, teman-temannya mendapatkan bola biru yang juga ia inginkan, sementara ia mendapatkan bola merah. Maka ia akan menangis.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <aside className={`${Styles.aside}`}>
                  <div class="card">
                    <h3 className={`${Styles.title} border-bottom py-2 pb-3`}>Artikel Lainnya</h3>
                    <div className={`${Styles.linkArtikel} container d-flex flex-column align-items-center mb-2`}>
                      <a>a</a>
                      <a>a</a>
                      <a>a</a>
                      <a>a</a>
                      <a>a</a>
                    </div>
                  </div>
                </aside>
              </main>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default artikel;
