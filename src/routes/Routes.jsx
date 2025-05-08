import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";

const AppRoutes = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<PageLayout />}>
                    <Route index element= {<Home />} />
                    <Route path='/products' element={<Products />} />
                </Route>
            </Routes>
        </BrowserRouter>
     );
}
 
export default AppRoutes;