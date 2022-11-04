import Image from "next/image";

import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";
import styles from "../styles/Featured.module.css";
const Featured = () => {
  return (
    <div className={styles.container}>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/slider1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>This is first slide</h3>
            <p>Our Hospitality</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/slider2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>This is second slide</h3>
            <p>Our Food Best </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/slider3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>This is third slide</h3>
            <p>You'll be satisfied</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Featured;
