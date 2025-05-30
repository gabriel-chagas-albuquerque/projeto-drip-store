import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductsList = ({limite}) => {
  const products = [
    {
      id: 1,
      image: "./produc-image-1.jpeg",
      category: "tênis",
      subcategory: "casual",
      marca: "Nike",
      genero: "unissex",
      estado: "novo",
      title: "K-Swiss V8 - Masculino",
      priceBefore: 200,
      price: 100,
    },
    {
      id: 2,
      image: "./produc-image-2.jpeg",
      category: "tênis",
      subcategory: "casual",
      marca: "Nike",
      genero: "unissex",
      estado: "novo",
      title: "K-Swiss V8 - Masculino",
      priceBefore: 200,
      price: 100,
    },
    {
      id: 3,
      image: "./produc-image-3.jpeg",
      category: "tênis",
      subcategory: "casual",
      marca: "Nike",
      genero: "unissex",
      estado: "novo",
      title: "K-Swiss V8 - Masculino",
      priceBefore: 200,
      price: 100,
    },
    {
      id: 4,
      image: "./produc-image-4.jpeg",
      category: "tênis",
      subcategory: "casual",
      marca: "Nike",
      genero: "unissex",
      estado: "novo",
      title: "K-Swiss V8 - Masculino",
      priceBefore: 200,
      price: 100,
    },
    {
      id: 5,
      image: "./produc-image-5.jpeg",
      category: "tênis",
      subcategory: "casual",
      marca: "Nike",
      genero: "unissex",
      estado: "novo",
      title: "K-Swiss V8 - Masculino",
      priceBefore: 200,
      price: 100,
    },
    {
      id: 6,
      image: "./produc-image-1.jpeg",
      category: "tênis",
      subcategory: "casual",
      marca: "Nike",
      genero: "unissex",
      estado: "novo",
      title: "K-Swiss V8 - Masculino",
      priceBefore: 200,
      price: 100,
    },
    {
      id: 7,
      image: "./produc-image-2.jpeg",
      category: "tênis",
      subcategory: "casual",
      marca: "Nike",
      genero: "unissex",
      estado: "novo",
      title: "K-Swiss V8 - Masculino",
      priceBefore: 200,
      price: 100,
    },
    {
      id: 8,
      image: "./produc-image-3.jpeg",
      category: "tênis",
      subcategory: "casual",
      marca: "Nike",
      genero: "unissex",
      estado: "novo",
      title: "K-Swiss V8 - Masculino",
      priceBefore: 200,
      price: 100,
    },
    {
      id: 9,
      image: "./produc-image-4.jpeg",
      category: "tênis",
      subcategory: "casual",
      marca: "Nike",
      genero: "unissex",
      estado: "novo",
      title: "K-Swiss V8 - Masculino",
      priceBefore: 200,
      price: 100,
    },
    {
      id: 10,
      image: "./produc-image-5.jpeg",
      category: "tênis",
      subcategory: "casual",
      marca: "Nike",
      genero: "unissex",
      estado: "novo",
      title: "K-Swiss V8 - Masculino",
      priceBefore: 200,
      price: 100,
    },
  ];
  return (
      <ul className="flex justify-center flex-wrap gap-[9px] mb-[40px] lg:mb-[120px] sm:gap-[24px]">
        {limite ? products.filter(({id}) => id <= limite).map(({id, image, category, title, priceBefore, price}) => {
          return(
            <li key={id} className="flex">
              <ProductCard
                image={image}
                category={category}
                title={title}
                priceBefore={priceBefore}
                price={price}
              />
            </li>
          )
        }) : products.map(({id, image, category, title, priceBefore, price}) => {
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
  );
};

export default ProductsList;
