import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Image1 from "./Image1";
import Image2 from "./Image2";
import classes from "./MyCarousel.module.css";

{
}
function MyCarousel(props) {
  return (
    <div className={classes.mother} style={{ margin: props.margin }}>
      <Carousel>
        <Carousel.Item>
          <Image1 text="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image2 text="Second slide" />
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
}

export default MyCarousel;
