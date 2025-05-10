import Button from "./Button";

const Banner = () => {
  return (
    <div>
        
      <div className="flex flex-col items-center font-[inter]">
        <p className="text-sm leading-[22px] tracking-[0.75px] text-[#C92071] font-bold">
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

export default Banner;
