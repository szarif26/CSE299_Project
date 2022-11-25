import React from 'react';
import { Carousel } from 'react-bootstrap';

import image3 from '../../../src/Assets/Campusshuttlenew_2000w.jpeg';
import image2 from '../../../src/Assets/Kashundi.png.webp';
import image1 from '../../../src/Assets/student-education.jpeg';
import classes from "./Banner.css";

const Banner = () => {
  return (
    <div className={classes.board1}>
    <Carousel fade={false} pause={true}>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hello</h3>
          <p>Hello</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Hello</h3>
          <p>Hello</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Hello</h3>
          <p>Hello</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner;