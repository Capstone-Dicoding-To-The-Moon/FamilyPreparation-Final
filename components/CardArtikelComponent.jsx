import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';
import Pagination from './PagenationComponent';
import styles from '../styles/CardArtikelComponent.module.css';
import { paginate } from '../utils/paginate';
import { useState, useEffect } from 'react';

const CardArtikelComponent = ({ dataArtikel }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    const getPosts = () => {
      setPosts(dataArtikel);
    };
    getPosts();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatePosts = paginate(dataArtikel, currentPage, pageSize);

  return (
    <div className="container">
      <Row xs={1} md={4} className="g-4 justify-content-around" style={{ marginBottom: 20 }}>
        {paginatePosts.map((data, idx) => (
          <Col key={idx} sm style={{ minHeight: '388px', minWidth: '296px' }}>
            <Card className="text-center shadow">
              <Card.Img variant="top" className="border " src={data.image_large} srcSet="./artikel.jpg" style={{ height: '212px' }} />
              <Card.Body style={{ height: '250px' }} className="d-flex flex-column justify-content-around">
                <Card.Title style={{ textAlign: 'left', fontWeight: 'bold' }} className={`${styles.cutoffTextTittle} flex-grow-2 text-dark`}>
                  {data.title}
                </Card.Title>
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
