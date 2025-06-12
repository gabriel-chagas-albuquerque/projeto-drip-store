import Slider from "react-slick";
import CarouselSlide from "../Carousel/CarouselSlide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselProductSlider = ({dots=false, infinite=true, autoplay=true, speed=1000, autoplaySpeed=3000, arrows=true }) => {
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

  function SampleNextArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color:'green',width:'100px'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width:'100px'}}
      onClick={onClick}
    />
  );
}


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
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    dotsClass: "slick-dots static",
    appendDots: (dots) => (
      <div>
        <ul className="w-full"> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="slider-container w-full pb-[53px]">
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

export default CarouselProductSlider;
