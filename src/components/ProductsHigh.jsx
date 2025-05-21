import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductsList = ({limite=8}) => {
  const products = [
    {
      id: 1,
      image: "./produc-image-1.jpeg",
      category: "tênis",
      title: "K-Swiss V8 - Masculino",
      priceBefore: 200,
      price: 100,
    },
    {
      id: 2,
      image: "./produc-image-2.jpeg",
      category: "tênis",
      title: "K-Swiss V8 - Masculino",
      priceBefore: 200,
      price: 100,
    },
    {
      id: 3,
      image: "./produc-image-3.jpeg",
      category: "tênis",
      title: "K-Swiss V8 - Masculino",
      priceBefore: 200,
      price: 100,
    },
    {
      id: 4,
      image: "./produc-image-4.jpeg",
      category: "tênis",
      title: "K-Swiss V8 - Masculino",
      priceBefore: 200,
      price: 100,
    },
    {
      id: 5,
      image: "./produc-image-5.jpeg",
      category: "tênis",
      title: "K-Swiss V8 - Masculino",
      priceBefore: 200,
      price: 100,
    },
  ];
  return (
    <div className="px-[20px] lg:px-[100px] bg-[#F5F5F5]">
      <div className="flex justify-between items-center mb-[20px]">
        <h4 className="font-[inter] text-base lg:text-2xl tracking-[0.75px] font-bold">
          Produtos em alta
        </h4>
        <Link
          to="/products"
          className="flex items-center gap-[10px] text-[#C92071]"
        >
          <h4 className="text-[inter] font-medium text-sm lg:text-lg tracking-[0.25px]">
            Ver todos
          </h4>
          <img src="./arrow.png" alt="Seta para a direita" />
        </Link>
      </div>
      <ul className="flex justify-center flex-wrap gap-[9px] mb-[40px] lg:mb-[120px] sm:gap-[24px]">
        {products.map(({id, image, category, title, priceBefore, price}) => {
          return (
            <li key={id} className="flex">
              <ProductCard
                image={image}
                category={category}
                title={title}
                priceBefore={priceBefore}
                price={price}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
