import Button from "../Button";

const ProductCollection = ({src, alt}) => {
    
    return ( 
        <li className="relative mt-[10px]">
            <span className="absolute top-[10px] left-[20px] px-[12px] py-[5px] rounded-[29px] bg-[#E7FF86] text-[#474747] font-bold text-[14px]">30% OFF</span>
            <img src={src} alt={alt} className="" />
            <Button label='Comprar' classStyles="bg-[#F5F5F5] text-[#C92071] font-bold leading-[24px] tracking-[0.75px] px-[36px] py-[12px] rounded-[8px] absolute bottom-[20px] left-[20px] lg:left-[30px] lg:bottom-[35px] cursor-pointer" />
        </li>
     );
}
 
export default ProductCollection;