import Banner from "../components/Banner";
import ProductsCollections from "../components/Collections/ProductsCollections";
import ProductsList from "../components/ProductsList";
import SpecialOffer from "../components/SpecialOffer";

const Home = () => {
    return ( 
        <div>
            <Banner />
            <ProductsCollections />
            <ProductsList />
            <SpecialOffer />
        </div>
     );
}
 
export default Home;