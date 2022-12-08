import Slider from 'react-slick';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Styles from '../styles/CardArtikelComponent.module.css';
import Link from 'next/link';

const CardSliderComponent = ({ data }) => {
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
        {data.map((item, index) => {
          return (
            <Card key={index}>
              <div style={{ width: '100%' }}>
                <Card.Img variant="top" className="img-fluid" src="/Hero-img.png" srcSet="/artikel.jpg" style={{ height: '150px' }} />
              </div>
              <Card.Body>
                <Card.Title className={`${Styles.cutoffTextTittle} mb-4`}>{item.title}</Card.Title>
                <Link href={`/artikel/${item.id}`}>
                  <Button variant="primary" bsPrefix={`${Styles.cardBtn}`}>
                    Read More
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </Slider>
    </div>
  );
};

export default CardSliderComponent;
