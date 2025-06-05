import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import ProductsLayout from "../layouts/ProductsLayout";

const AppRoutes = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<PageLayout />}>
                    <Route index element= {<Home />} />
                    <Route path='/products' element={<ProductsLayout />}>
                        <Route index element={<Products />} />
                        <Route path="product/:id" element={<ProductDetails />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
     );
}
 
export default AppRoutes;