import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"
import CarouselSlide from "./CarouselSlide";
import { useContext } from "react";
import { homeSlidesContext } from "../../contexts/HomeSlidesContext";

const CarouselSlider = ({dots=true, infinite=true, autoplay=true, speed=1000, autoplaySpeed=3000, arrows=false }) => {
  
  const imagesCarousel = useContext(homeSlidesContext)  
  const tamanhoTela = window.screen.width
  const draggable = tamanhoTela > 765 ? false : true
  const settings = {
    dots: dots,
    infinite: infinite,
    speed: speed,
    autoplay: autoplay,
    draggable: draggable,
    autoplaySpeed: autoplaySpeed,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: arrows,
    dotsClass: "slick-dots static",
    appendDots: (dots) => (
      <div>
        <ul className="w-full"> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="slider-container w-[80%] pb-[53px] m-auto">
      <Slider {...settings}>
        {imagesCarousel.homeSlides.map((imageCarousel) => {
          return (
            <CarouselSlide
              key={imageCarousel.id}
              id={imageCarousel.id}
              src={imageCarousel.src}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
