import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Styles from '../styles/HeroComponent.module.css';


export default function HeroComponent({ tittle }) {
  return (
    <div className={`${Styles.heroImage}`}>
      <img className={`${Styles.images}`} src="/Hero-img.png" alt="Hero Element" />
      <Carousel.Caption>
        <Card bsPrefix={`${Styles.cardCaptionCard}`}>
          <Card.Body bsPrefix={`${Styles.cardBodyCard}`}>
            <Card.Text className={`${Styles.cardText}`}>{tittle}</Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Caption>
    </div>
  );
}
