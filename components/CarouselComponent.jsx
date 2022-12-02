import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import styles from '../styles/CarouselComponent.module.css';

const CarouselComponent = () => {
  return (
    <div className="Container pb-4">
      <Carousel>
        <Carousel.Item>
          <img className={`${styles.dblock}`} src="Hero-img.png" alt="Second slide" />

          <Carousel.Caption>
            <Card bsPrefix={`${styles.carouselCaptionCard}`}>
              <Card.Body bsPrefix={`${styles.carouselBodyCard}`}>
                <Card.Text className={`${styles.cardText}`}>Praesent commodo cursus magna.</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className={`${styles.dblock}`} src="Hero-img2.png" alt="Second slide" />

          <Carousel.Caption>
            <Card bsPrefix={`${styles.carouselCaptionCard}`}>
              <Card.Body bsPrefix={`${styles.carouselBodyCard}`}>
                <Card.Text className={`${styles.cardText}`}>Praesent commodo cursus magna.</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className={`${styles.dblock}`} src="Hero-img3.png" alt="Third slide" />

          <Carousel.Caption>
            <Card bsPrefix={`${styles.carouselCaptionCard}`}>
              <Card.Body bsPrefix={`${styles.carouselBodyCard}`}>
                <Card.Text className={`${styles.cardText}`} >Praesent commodo cursus magna.</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
