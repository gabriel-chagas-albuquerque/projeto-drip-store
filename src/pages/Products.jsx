import Filter from "../components/Filter";
import ProductsList from "../components/ProductsList";

const Products = () => {
    return ( 
        <main className="flex flex-col px-[20px] lg:px-[100px] lg:flex-row bg-gray-50">
            <Filter />
            <ProductsList route= {`product`}/>
        </main>
     );
}
 
export default Products;