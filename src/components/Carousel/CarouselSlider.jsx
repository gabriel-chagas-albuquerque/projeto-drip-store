import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"
import CarouselSlide from "./CarouselSlide";

const CarouselSlider = () => {
  const imagesCarousel = [
    {
      id: 1,
      src: "./home-slide-1.jpeg",
    },
    {
      id: 2,
      src: "./home-slide-2.jpeg",
    },
    {
      id: 3,
      src: "./home-slide-3.jpeg",
    },
    {
      id: 4,
      src: "./home-slide-4.jpeg",
    },
    {
      id: 5,
      src: "./home-slide-5.jpeg",
    },
    {
      id: 6,
      src: "./home-slide-6.jpeg",
    },
    {
      id: 7,
      src: "./home-slide-7.jpeg",
    },
    {
      id: 8,
      src: "./home-slide-8.jpeg",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "slick-dots static",
    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="slider-container w-screen">
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
