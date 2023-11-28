import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutPage from "../pages/About/Aboutpage";
import AppLayout from "../common-components/AppLayout";
import BlogAbout from "../pages/Blog/BlogAbout";
import Blogpage from "../pages/Blog/Blogpage";
import ClothingSample from "../pages/Products/ProductsCategories/ClothingSample";
import ContactPage from "../pages/Contact/Contactpage";
import FabricSampleProducts from "../pages/Products/ProductsCategories/FabricSampleProduct";
import HomeDecorSample from "../pages/Products/ProductsCategories/HomeDecorSampleProduct";
import Homepage from "../pages/Home/Homepage";
import ProductDetailPage from "../pages/Products/ProductDetailPage/ProductDetails";
import ProductsPage from "../pages/Products/Productspage";
import SignUpNewsLetter from "../pages/Home/Sign-Up/SignUpwithLetter";
import routes from "./routes";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={routes.ROOT} element={<AppLayout />}>
          <Route path={routes.ROOT} element={<Homepage />} />
          <Route path={routes.HOME} element={<Homepage />} />

          <Route path={routes.PRODUCTS} element={<ProductsPage />} />
          <Route path={routes.ABOUT} element={<AboutPage />} />
          <Route path={routes.CONTACT} element={<ContactPage />} />
          <Route path={routes.BLOG} element={<Blogpage />} />
          <Route path={routes.SIGN_UP} element={<SignUpNewsLetter />} />
          <Route path={routes.BLOG_ABOUT} element={<BlogAbout />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />

          <Route path={routes.CLOTHING_PRODUCT} element={<ClothingSample />} />
          <Route
            path={routes.HOME_DECOR_PRODUCT}
            element={<HomeDecorSample />}
          />
          <Route
            path={routes.FABRIC_PRODUCT}
            element={<FabricSampleProducts />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
