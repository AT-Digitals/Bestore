import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutPage from "../pages/About/Aboutpage";
import AppLayout from "../common-components/AppLayout";
import Blogpage from "../pages/Blog/Blogpage";
import ContactPage from "../pages/Contact/Contactpage";
import Homepage from "../pages/Home/Homepage";
import ProductsPage from "../pages/Products/Productspage";
import SignUpNewsLetter from "../pages/Home/Sign-Up/SignUpwithLetter";
import routes from "./routes";
import BlogAbout from "../pages/Blog/BlogAbout";
import ProductBag from "../pages/Products/ProductBag";

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
          <Route path={routes.PRODUCT_BAG} element={<ProductBag />} />
        </Route>
      </Routes>
    </Router>
  );
}
