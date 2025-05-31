import Button from "./Button";

const SpecialOffer = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row-reverse items-center justify-between bg-white py-12 px-6 md:px-16">
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-pink-600 font-semibold mb-2">Oferta especial!</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Air Jordan edição de colecionador
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          voluptatibus ipsum aperiam reiciendis harum minima optio, laborum
          maxime labore obcaecati consequuntur adipisci! Ex nulla, veritatis
          quod officia rerum sed accusantium.
        </p>
        <Button
          label="Ver Ofertas"
          classStyles="bg-pink-600 text-white py-2 px-12 rounded hover:bg-pink-700 transition duration-300"
        />
      </div>

      <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
        <img
          src="/jordan-special-offer.jpg"
          alt="Air Jordan edição de colecionador"
          className="max-w-s md:max-w-md"
        />
      </div>
    </section>
  );
};

export default SpecialOffer;
