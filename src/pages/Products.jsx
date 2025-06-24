import Filter from "../components/Filter";
import ProductsList from "../components/ProductsList";

const Products = () => {
    return ( 
        <main className="flex flex-col lg:flex-row">
            <Filter />
            <ProductsList route={'product/:id'} />
        </main>
     );
}
 
export default Products;