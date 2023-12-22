import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutPage from "../pages/About/Aboutpage";
import AbstractProducts from "../pages/Products/ProductsCategories/SubProducts/Patterns/Abstract/AbstractProduct";
import AllProductsPage from "../pages/Products/ProductsCategories/AllProductsPage";
import AppLayout from "../common-components/AppLayout";
import AviaryProducts from "../pages/Products/ProductsCategories/SubProducts/Patterns/Aviary/AviaryProducts";
import BlogAbout from "../pages/Blog/BlogAbout";
import Blogpage from "../pages/Blog/Blogpage";
import BlueProduct from "../pages/Products/ProductsCategories/SubProducts/BlueProduct";
import ColoursProductsPage from "../pages/Products/ProductsCategories/ColoursProductsPage";
import ContactPage from "../pages/Contact/Contactpage";
import FabricProductsPAge from "../pages/Products/ProductsCategories/FabricProductsPage";
import FloralProducts from "../pages/Products/ProductsCategories/SubProducts/Patterns/Floral/FloralProducts";
import GreenProduct from "../pages/Products/ProductsCategories/SubProducts/GreenProduct";
import Homepage from "../pages/Home/Homepage";
import LinenProducts from "../pages/Products/ProductsCategories/SubProducts/LineProducts/LinenProducts";
import LycocellProduct from "../pages/Products/ProductsCategories/SubProducts/LycocellProduct";
import OrganicCottonWovens from "../pages/Products/ProductsCategories/SubProducts/OrganicCottonWovens/OrganicCottonWovens";
import PatternsProducts from "../pages/Products/ProductsCategories/PatternsProducts";
import PeaceSilkProduct from "../pages/Products/ProductsCategories/SubProducts/PeaceSilkProduct";
import PolysterProducts from "../pages/Products/ProductsCategories/SubProducts/PolysterProducts";
import ProductDetailPage from "../pages/Products/ProductDetailPage/ProductDetails";
import ProductPageLayout from "../common-components/ProductPageLayout";
import RecycledCotton from "../pages/Products/ProductsCategories/SubProducts/RecycledCotton";
import RecycledKnitProducts from "../pages/Products/ProductsCategories/SubProducts/RecycledKnit/RecycledProducts";
import RedProduct from "../pages/Products/ProductsCategories/SubProducts/RedProduct";
import SignUpNewsLetter from "../pages/Home/Sign-Up/SignUpwithLetter";
import SignatureProductsPAge from "../pages/Products/ProductsCategories/SignatureProductPage";
import WaterRepllentRept from "../pages/Products/ProductsCategories/SubProducts/WaterRepllentRept/WaterRepllentRept";
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
              path={routes.FABRIC_PRODUCT_1}
              element={<OrganicCottonWovens />}
            />
            <Route
              path={routes.FABRIC_PRODUCT_2}
              element={<RecycledKnitProducts />}
            />
            <Route
              path={routes.FABRIC_PRODUCT_3}
              element={<PolysterProducts />}
            />
            <Route
              path={routes.SIGNATURE_PRODUCT}
              element={<SignatureProductsPAge />}
            />
            <Route path={routes.FABRIC_PRODUCT_4} element={<LinenProducts />} />
            <Route path={routes.PRODUCT_RED} element={<RedProduct />} />
            <Route path={routes.PRODUCT_BLUE} element={<BlueProduct />} />
            <Route path={routes.PRODUCT_GREEN} element={<GreenProduct />} />
            <Route
              path={routes.LYCOCELL_PRODUCT}
              element={<LycocellProduct />}
            />
            <Route
              path={routes.PEACESILK_PRODUCT}
              element={<PeaceSilkProduct />}
            />
            <Route path={routes.RECYCLED_COTTON} element={<RecycledCotton />} />
            <Route
              path={routes.LYCOCELL_PRODUCT}
              element={<LycocellProduct />}
            />
            <Route
              path={routes.PEACESILK_PRODUCT}
              element={<PeaceSilkProduct />}
            />

            <Route
              path={routes.FABRIC_PRODUCT_8}
              element={<WaterRepllentRept />}
            />
            <Route
              path={routes.PATTERNS_PRODUCT_1}
              element={<FloralProducts />}
            />
            <Route
              path={routes.PATTERNS_PRODUCT_2}
              element={<AviaryProducts />}
            />
            <Route
              path={routes.PATTERNS_PRODUCT_3}
              element={<AbstractProducts />}
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
