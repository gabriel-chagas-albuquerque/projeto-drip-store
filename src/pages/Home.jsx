import Banner from "../components/Banner";
import ProductsCollections from "../components/Collections/ProductsCollections";
import ProductsSection from "../components/ProductsSection";

const Home = () => {
    return ( 
        <main>
            <Banner />
            <ProductsCollections />
            <ProductsSection />
        </main>
     );
}
 
export default Home;