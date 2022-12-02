import Slider from 'react-slick';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../styles/CardArtikelComponent.module.css';

const CardSliderComponent = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
          return (
            <Card key={index}>
              <Card.Img variant="top" src="/artikel.jpg" />
              <Card.Body>
                <Card.Title className="mb-4">Card Title</Card.Title>
                <Button variant="primary" bsPrefix={`${styles.cardBtn}`}>
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </Slider>
    </div>
  );
};

export default CardSliderComponent;
