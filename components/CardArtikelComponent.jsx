import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';
import Pagination from './PagenationComponent';
import styles from '../styles/CardArtikelComponent.module.css';
import { paginate } from '../utils/paginate';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import defaultPic from '../public/artikel.jpg';
import { BsSuitHeartFill } from 'react-icons/bs';

const CardArtikelComponent = ({ dataArtikel, totalContent }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = totalContent;

  useEffect(() => {
    const getPosts = () => {
      setPosts(dataArtikel);
    };
    getPosts();
  }, dataArtikel);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatePosts = paginate(dataArtikel, currentPage, pageSize);

  return (
    <div className="container">
      <Row xs={1} md={4} className="g-1 justify-content-around">
        {paginatePosts.map((data, idx) => (
          <Col key={idx} sm style={{ minHeight: '388px', minWidth: '260px' }}>
            <Card className="text-center shadow" style={{ marginBottom: 20, marginRight: 12 }}>
              <Card.Header style={{ height: '212px', width: '100%', position: 'relative' }}>
                <Image src={defaultPic} srcSet={defaultPic} fill sizes="" alt="Picture of the artikel" />
              </Card.Header>
              <Card.Body style={{ height: '200px' }} className="d-flex flex-column justify-content-around">
                <div>
                  <Card.Title style={{ textAlign: 'left', fontWeight: 'bold' }} className={`${styles.cutoffTextTittle} flex-grow-2 text-dark mb-1`}>
                    {data.title}
                  </Card.Title>

                  <p className="text-start mb-1">
                    <BsSuitHeartFill style={{ color: 'F76C2F' }}> </BsSuitHeartFill> {data.vote}
                  </p>
                </div>
                <Card.Text style={{ textAlign: 'left' }} className={`${styles.cutoffText}`}>
                  {data.content}
                </Card.Text>
                <Card.Link href={`/artikel/${data.id}`} bsPrefix={`${styles.cardBtn}`} style={{ width: '50%', margin: '0 auto' }}>
                  Read More
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Pagination items={posts.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange} />
    </div>
  );
};

export default CardArtikelComponent;
