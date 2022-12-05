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
      <div style={{ minHeight: '100vh' }}>
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
                            cznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum
                            oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </section>

                  <section>
                    <Container>
                      <div className={`${Styles.sectionTittle} my-3`}>
                        <h2>Team</h2>
                        <p>
                          Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później
                          zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z
                          zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker
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
                              <h4 style={{ fontWeight: '700', marginBottom: '5px', fontSize: '20px', color: 'tomato' }}>Dewa Putra Hernanda</h4>
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
                              <Image src="./profile.png" className="img-fluid" alt="team1" />
                            </div>
                            <div className={`${Styles.memberInfo}`}>
                              <h4 style={{ fontWeight: '700', marginBottom: '5px', fontSize: '20px', color: 'tomato' }}>Resa Fajar Sukma</h4>
                              <span className="border-top" style={{ display: 'block', fontSize: '15px', paddingBottom: '10px', position: 'relative', fontWeight: '500' }}>
                                Back End Developer
                              </span>

                              <div className="fs-5">
                                <a href="#">
                                  <BsGithub></BsGithub>
                                </a>

                                <a href="#" className="mx-2">
                                  <BsInstagram></BsInstagram>
                                </a>

                                <a href="#">
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
                              <Image src="./profile.png" className="img-fluid" alt="team1" />
                            </div>
                            <div className={`${Styles.memberInfo}`}>
                              <h4 style={{ fontWeight: '700', marginBottom: '5px', fontSize: '20px', color: 'tomato' }}>Desi Sihamita</h4>
                              <span className="border-top" style={{ display: 'block', fontSize: '15px', paddingBottom: '10px', position: 'relative', fontWeight: '500' }}>
                                Front End Developer
                              </span>

                              <div className="fs-5">
                                <a href="#">
                                  <BsGithub></BsGithub>
                                </a>

                                <a href="#" className="mx-2">
                                  <BsInstagram></BsInstagram>
                                </a>

                                <a href="#">
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
                              <Image src="./profile_J.PNG" className="img-fluid" alt="team1" />
                            </div>
                            <div className={`${Styles.memberInfo}`}>
                              <h4 style={{ fontWeight: '700', marginBottom: '5px', fontSize: '20px', color: 'tomato' }}>Annisa Janiar Husein</h4>
                              <span className="border-top" style={{ display: 'block', fontSize: '15px', paddingBottom: '10px', position: 'relative', fontWeight: '500' }}>
                                Front End Developer
                              </span>

                              <div className="fs-5">
                                <a href="#">
                                  <BsGithub></BsGithub>
                                </a>

                                <a href="#" className="mx-2">
                                  <BsInstagram></BsInstagram>
                                </a>

                                <a href="#">
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
