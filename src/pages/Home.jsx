import Banner from "../components/Banner";
import ProductsCollections from "../components/Collections/ProductsCollections";
import ProductsList from "../components/ProductsList";

const Home = () => {
    return ( 
        <div>
            <Banner />
            <ProductsCollections />
            <ProductsList />
        </div>
     );
}
 
export default Home;