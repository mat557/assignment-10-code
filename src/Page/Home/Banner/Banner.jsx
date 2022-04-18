import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../img/banner-1.jpg";
import banner2 from "../../../img/banner-2.jpg";
import banner3 from "../../../img/banner-3.jpg";
import './Banner.css';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100 "src={banner1} alt="First slide" />
          <Carousel.Caption className="title-part">
            <h3 className="size-font">The Emazon</h3>
            <p className="p-size">The largest rainforest having an area of 3 million km².</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption className="title-part">
            <h3 className="size-font">Valdivian Temperate</h3>
            <p className="p-size">A south americans forest with a large amount of area with 248,100 km²</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption className="title-part">
            <h3 className="size-font">Congo Rainforest</h3>
            <p className="p-size">
              This is forest is in Congo ,Africa . The total area of this forest is 3 million km².
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
