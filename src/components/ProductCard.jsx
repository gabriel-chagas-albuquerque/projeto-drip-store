import { Link } from "react-router-dom";

const ProductCard = ({image, category, title, priceBefore, price}) => {
    return ( 
        <Link to={'product/:id'}>
            <div className="w-[163px] md:w-[292px]">
               <img src={image} alt="Imagem produto" className="mb-[11px]" />
               <h5 className="capitalize text-xs text-[#8F8F8F] lg:text-lg">{category}</h5>
               <h3 className="text-sm  text-[#474747] lg:text-2xl text-ellipsis overflow-hidden whitespace-nowrap">{title}</h3>
               <div className="flex gap-[8px] lg:text-2xl">
                   <h4 className="line-through text-[#8F8F8F]">{`$${priceBefore}`}</h4>
                   <h4 className="text-[#1F1F1F]">{`$${price}`}</h4>
               </div>
            </div>
        </Link>
     );
}
 
export default ProductCard;