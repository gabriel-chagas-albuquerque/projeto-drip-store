import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"
import CarouselSlide from "./CarouselSlide";

const CarouselSlider = () => {
  const imagesCarousel = [
    {
      id: 1,
      src: "./home-slide.png",
    },
    {
      id: 2,
      src: "./home-slide.png",
    },
    {
      id: 3,
      src: "./home-slide.png",
    },
    {
      id: 4,
      src: "./home-slide.png",
    }
  ];
  const tamanhoTela = window.screen.width
  const draggable = tamanhoTela > 765 ? false : true
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    draggable: draggable,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "slick-dots static",
    appendDots: (dots) => (
      <div>
        <ul className="w-full"> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="slider-container w-full ">
      <Slider {...settings}>
        {imagesCarousel.map((imageCarousel) => {
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
