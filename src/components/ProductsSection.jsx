import { Link } from "react-router-dom";
import ProductsList from "./ProductsList";

const ProductsSection = () => {
    return ( 
        <section className="px-[20px] lg:px-[100px] bg-[#F5F5F5]">
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
        <ProductsList limite={8} />
      </section>
     );
}
 
export default ProductsSection;