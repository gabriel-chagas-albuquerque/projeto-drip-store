import IconsCollection from "./IconsCollection";
import ProductCollection from "./ProductCollection";


const ProductsCollections = () => {

    const collectionsList = [
        {
            id:1,
            src: "./collection-1.png",
            alt: 'Drop Supreme'
        },

         {
            id:2,
            src: "./collection-2.png",
            alt: 'Coleção Adidas'
        },

         {
            id:3,
            src: "./collection-3.png",
            alt: 'Novo Beats Bass'
        }
    ]


  return (
    <section className="pl-[20px] lg:px-[100px] bg-[#F5F5F5] flex flex-col">
      <h3 className="font-bold leading-[24px] text-base tracking-[0.75px] lg:text-[24px] lg:tracking-[0.75px] lg:leading-[38px]">Coleções em destaque</h3>
      <ul className="flex justify-center flex-wrap gap-[10px] mb-[80px] lg:flex-row lg:mb-[100px]">
        {collectionsList.map(({id, src, alt}) => {
         return(
            <ProductCollection key={id} src={src} alt={alt} />
         )
        })}
      </ul>
      <IconsCollection dimension='40' />
    </section>
  );
};

export default ProductsCollections;
