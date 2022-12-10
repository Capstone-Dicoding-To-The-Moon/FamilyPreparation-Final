import HeroComponent from '../../components/HeroComponent';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { Col, Row, Container, Image } from 'react-bootstrap';
import Head from 'next/head';
import Styles from '../../styles/about/aboutPage.module.css';

const about = () => {
  return (
    <>
      <Head>
        <title>The Parentings - About Us</title>
      </Head>
      <div style={{ minHeight: '100vh' }} className="text-dark">
        <Container className="py-3">
          <HeroComponent tittle="About Us" />
          <main className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="underline mx-auto"></div>

                  <section className="border-bottom border-3 py-4">
                    <Container>
                      <Row>
                        <Col lg={4}>
                          <div className={`${Styles.teampic} border`} style={{ margin: '0 auto' }}>
                            <Image src="./favicon.png" className="img-fluid" alt="team1" />
                          </div>
                        </Col>
                        <Col className={`${Styles.aboutBrand}`}>
                          <h1 className="my-2">The Parentings</h1>
                          <p>
                            The Parentings merupakan aplikasi yang bertujuan untuk membantu persiapan dalam berumah tangga bagi mereka yang akan/sedang menjalin hubungan rumah tangga, dengan dapat <b>membaca/mengirimkan artikel </b>
                            tentang pengalaman berkeluarga mereka ataupun menggunakan <b>forum diskusi </b> untuk saling bertukar pikiran
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </section>

                  <section>
                    <Container>
                      <div className={`${Styles.sectionTittle} my-3`}>
                        <h2>About us</h2>
                        <p>
                          Kami adalah sekumpulan mahasiswa Studi Independent MSIB angkatan 3 yang berasal dari kampus kampus berbeda serta mengambil stack front-end dan back-end yang masih terus belajar untuk meningkatkan kemampuan kami
                          dibidang front-end dan back-end
                        </p>
                      </div>

                      <Row>
                        {/* team 1 */}
                        <Col lg={6} mt={4} className="my-2">
                          <div className={`${Styles.member} d-flex  shadow`}>
                            <div className={`${Styles.teampic}`}>
                              <Image src="./profile_Dewa.jpg" className="img-fluid" alt="team1" height={'20px'} />
                            </div>
                            <div className={`${Styles.memberInfo}`}>
                              <h4 style={{ fontWeight: '700', marginBottom: '5px', fontSize: '20px' }}>Dewa Putra Hernanda</h4>
                              <span className="border-top" style={{ display: 'block', fontSize: '15px', paddingBottom: '10px', position: 'relative', fontWeight: '500' }}>
                                Front End Developer
                              </span>

                              <div className="fs-5">
                                <a href="https://github.com/dewa-nanda" target="_blank">
                                  <BsGithub></BsGithub>
                                </a>

                                <a href="https://www.instagram.com/dewa_ndn/" target="_blank" className="mx-2">
                                  <BsInstagram></BsInstagram>
                                </a>

                                <a href="https://www.linkedin.com/in/dewa-putra-hernanda-147a99202/" target="_blank">
                                  <BsLinkedin></BsLinkedin>
                                </a>
                              </div>
                            </div>
                          </div>
                        </Col>

                        {/* team 2 */}
                        <Col lg={6} mt={4} className="my-2">
                          <div className={`${Styles.member} d-flex  shadow`}>
                            <div className={`${Styles.teampic}`}>
                              <Image src="./profile_resa.jpg" className="img-fluid" alt="team1" />
                            </div>
                            <div className={`${Styles.memberInfo}`}>
                              <h4 style={{ fontWeight: '700', marginBottom: '5px', fontSize: '20px' }}>Resa Fajar Sukma</h4>
                              <span className="border-top" style={{ display: 'block', fontSize: '15px', paddingBottom: '10px', position: 'relative', fontWeight: '500' }}>
                                Back End Developer
                              </span>

                              <div className="fs-5">
                                <a href="https://github.com/Jarsters" target="_blank">
                                  <BsGithub></BsGithub>
                                </a>

                                <a href="#" className="mx-2" target="_blank">
                                  <BsInstagram></BsInstagram>
                                </a>

                                <a href="https://www.linkedin.com/in/resa-fajar-sukma-a847b6112/" target="_blank">
                                  <BsLinkedin></BsLinkedin>
                                </a>
                              </div>
                            </div>
                          </div>
                        </Col>

                        {/* team 3 */}
                        <Col lg={6} mt={4} className="my-2">
                          <div className={`${Styles.member} d-flex  shadow`}>
                            <div className={`${Styles.teampic}`}>
                              <Image src="./profile_desi.jpg" className="img-fluid" alt="team1" />
                            </div>
                            <div className={`${Styles.memberInfo}`}>
                              <h4 style={{ fontWeight: '700', marginBottom: '5px', fontSize: '20px' }}>Desi Sihamita</h4>
                              <span className="border-top" style={{ display: 'block', fontSize: '15px', paddingBottom: '10px', position: 'relative', fontWeight: '500' }}>
                                Front End Developer
                              </span>

                              <div className="fs-5">
                                <a href="https://github.com/desihamita" target="_blank">
                                  <BsGithub></BsGithub>
                                </a>

                                <a href="https://www.instagram.com/desihamita_/" className="mx-2" target="_blank">
                                  <BsInstagram></BsInstagram>
                                </a>

                                <a href="https://www.linkedin.com/in/desi-sihamita-a031411b5/" target="_blank">
                                  <BsLinkedin></BsLinkedin>
                                </a>
                              </div>
                            </div>
                          </div>
                        </Col>

                        {/* team 4 */}
                        <Col lg={6} mt={4} className="my-2">
                          <div className={`${Styles.member} d-flex  shadow`}>
                            <div className={`${Styles.teampic}`}>
                              <Image src="./profile_J.jpeg" className="img-fluid" alt="team1" />
                            </div>
                            <div className={`${Styles.memberInfo}`}>
                              <h4 style={{ fontWeight: '700', marginBottom: '5px', fontSize: '20px' }}>Annisa Janiar Husein</h4>
                              <span className="border-top" style={{ display: 'block', fontSize: '15px', paddingBottom: '10px', position: 'relative', fontWeight: '500' }}>
                                Front End Developer
                              </span>

                              <div className="fs-5">
                                <a href="https://github.com/janiarhs" target="_blank">
                                  <BsGithub></BsGithub>
                                </a>

                                <a href="https://www.instagram.com/janiar.hs/" className="mx-2" target="_blank">
                                  <BsInstagram></BsInstagram>
                                </a>

                                <a href="https://www.linkedin.com/in/annisa-janiar-husein/" target="_blank">
                                  <BsLinkedin></BsLinkedin>
                                </a>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </section>
                </div>
              </div>
            </div>
          </main>
        </Container>
      </div>
    </>
  );
};

export default about;
