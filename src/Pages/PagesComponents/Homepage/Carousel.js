import React from "react";
import Carousel from "react-bootstrap/Carousel";
import javascriptimg from "../../Assets/Images/javascript.png";
import htmlcss from "../../Assets/Images/html5-css3.webp";
import reactjs from "../../Assets/Images/reactjs.png";

const Carusel = () => {
  const carusel_info = [
    {
      key: "1st",
      img: javascriptimg,
      title: "Javascript",
      description: "Skill Level: Intermediate",
    },
    {
      key: "2nd",
      img: htmlcss,
      title: "HTML And CSS",
      description: "Skill Level: Junior",
    },
    {
      key: "3rd",
      img: reactjs,
      title: "ReactJS",
      description: "Skill Level: Junior",
    },
  ];

  return (
    <div>
      <Carousel>
        {carusel_info.map((slide) => (
          <Carousel.Item key={slide.key}>
            <img className="d-block w-100" src={slide.img} alt="First slide" />
            <Carousel.Caption>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Carusel;
