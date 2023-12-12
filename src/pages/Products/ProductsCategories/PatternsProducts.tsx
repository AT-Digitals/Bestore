import HomeDecorProducts from "./HomeDecorProducts";
import ProductsImage from "../ProductsItems";

export default function PatternsProducts() {
  const homeProducts = ProductsImage.filter(
    (item) => item.producttype === "Colours"
  );

  return <HomeDecorProducts currentItems={homeProducts} />;
}
