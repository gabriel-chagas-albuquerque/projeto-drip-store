import Banner from "../components/Banner";
import ProductsCollections from "../components/Collections/ProductsCollections";
import ProductsSection from "../components/ProductsSection";

const Home = () => {
    return ( 
        <div>
            <Banner />
            <ProductsCollections />
            <ProductsSection />
        </div>
     );
}
 
export default Home;