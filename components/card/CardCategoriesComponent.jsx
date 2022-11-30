import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../../styles/CardCategoriesComponent.module.css';

const CardCategoriesComponent = (props) => {
  const dataCategories = props.dataCategoeries;
  return (
    <Container xs={5} md={5} className="my-3 py-3 no">
      <Row xs={5} md={5} className="justify-content-between">
        {dataCategories.map(
          (categorie, idx) => (
            {},
            (
              <Col key={idx} className={`${styles.colStyle}`}>
                <Link href={`?sort=${categorie}`}>
                  <Card className={`text-white Larger shadow`}>
                    <Card.Img src="./cardCategorie.png" className={styles.img} alt="Card image" />

                    <Card.ImgOverlay className="row align-items-end">
                      <Card.Title className={`text-center ${styles.bgCostum} text-body border border-secondary mb-2`}>{categorie}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
            )
          )
        )}
      </Row>
    </Container>
  );
};

export default CardCategoriesComponent;
