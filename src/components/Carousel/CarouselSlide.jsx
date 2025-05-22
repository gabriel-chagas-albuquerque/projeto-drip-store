import Button from "../Button";

const CarouselSlide = ({ id, src }) => {
  return (
    <div className="flex flex-col justify-center items-center px-3 lg:flex-row-reverse">
      <img src={src} alt={`Imagem ${id}`} className="lg:w-[50%]" />
      <div className="flex flex-col items-center justify-center mt-[20px] lg:w-[50%]">
        <p className="text-sm leading-[22px] tracking-[0.75px] text-[#C92071] font-bold lg:text-[#F6AA1C]">
          Melhores ofertas personalizadas
        </p>
        <h2 className="max-w-[300px] mt-[10px] mb-[20px] text-4xl text-center leading-[50px] tracking-[1px] font-extrabold">
          Queima de Estoque Nike 🔥
        </h2>
        <p className="max-w-[325px] text-center tracking-[0.25px] text-sm leading-[22px] font-medium text-[#474747]">
          Consequat culpa exercitation mollit nisi excepteur do do tempor
          laboris eiusmod irure consectetur.
        </p>
        <Button
          label="Ver Ofertas"
          classStyles="w-[335px] h-[48px] bg-[#C92071] text-[#F5F5F5] rounded-lg font-bold text-base text-center my-[40px] tracking-[0.75px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CarouselSlide;
