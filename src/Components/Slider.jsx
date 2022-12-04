import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/467367026/photo/perfect-sky-and-ocean.jpg?s=612x612&w=0&k=20&c=LZYFRxIhuKQom3l-kR3TLN7GikSJYJz9NRglQ3nngBw="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Ocean</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-block w-100"
          src="https://cdn.britannica.com/34/231234-050-5B2280BB/volcanic-eruption-Antigua-Guatemala-volcano.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Volcano</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
