import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutPage from "../pages/About/Aboutpage";
import AllProductsPage from "../pages/Products/ProductsCategories/AllProductsPage";
import AppLayout from "../common-components/AppLayout";
import BlogAbout from "../pages/Blog/BlogAbout";
import Blogpage from "../pages/Blog/Blogpage";
import ColoursProductsPage from "../pages/Products/ProductsCategories/ColoursProductsPage";
import ContactPage from "../pages/Contact/Contactpage";
import CottonProducts from "../pages/Products/ProductsCategories/SubProducts/CottonProducts";
import FabricProductsPAge from "../pages/Products/ProductsCategories/FabricProductsPage";
import Homepage from "../pages/Home/Homepage";
import PatternsProducts from "../pages/Products/ProductsCategories/PatternsProducts";
import PolysterProducts from "../pages/Products/ProductsCategories/SubProducts/PolysterProducts";
import ProductDetailPage from "../pages/Products/ProductDetailPage/ProductDetails";
import ProductPageLayout from "../common-components/ProductPageLayout";
import SignUpNewsLetter from "../pages/Home/Sign-Up/SignUpwithLetter";
import SilkProducts from "../pages/Products/ProductsCategories/SubProducts/SilkProduct";
import routes from "./routes";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={routes.ROOT} element={<AppLayout />}>
          <Route path={routes.ROOT} element={<Homepage />} />
          <Route path={routes.HOME} element={<Homepage />} />

          <Route path={routes.ABOUT} element={<AboutPage />} />
          <Route path={routes.CONTACT} element={<ContactPage />} />
          <Route path={routes.BLOG} element={<Blogpage />} />
          <Route path={routes.SIGN_UP} element={<SignUpNewsLetter />} />
          <Route path={routes.BLOG_ABOUT} element={<BlogAbout />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path={routes.PRODUCTS} element={<ProductPageLayout />}>
            <Route path={routes.PRODUCTS} element={<AllProductsPage />} />

            <Route
              path={routes.HOME_DECOR_PRODUCT}
              element={<PatternsProducts />}
            />
            <Route
              path={routes.FABRIC_PRODUCT}
              element={<FabricProductsPAge />}
            />
            <Route
              path={routes.CLOTHING_PRODUCT}
              element={<ColoursProductsPage />}
            />
            <Route
              path={routes.FABRIC_PRODUCT_COTTON}
              element={<CottonProducts />}
            />
            <Route
              path={routes.FABRIC_PRODUCT_SILK}
              element={<SilkProducts />}
            />
            <Route
              path={routes.FABRIC_PRODUCT_POLY}
              element={<PolysterProducts />}
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
