import Slider from 'react-slick';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Styles from '../styles/CardArtikelComponent.module.css';
import Link from 'next/link';
import Image from 'next/image';
import defaultPic from '../public/artikel.jpg';

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
              <div style={{ height: '212px', position: 'relative' }}>
                <Image src={defaultPic} fill alt="Picture of the artikel" sizes="" />
              </div>
              <Card.Body>
                <div className="mb-4">
                  <Card.Title className={`${Styles.cutoffTextTittle} mb-1`}>{item.title}</Card.Title>
                  <p className="mb-0">author : {item.author}</p>
                  <p>release date : {item.createdAt.split('T')[0]}</p>
                </div>
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
