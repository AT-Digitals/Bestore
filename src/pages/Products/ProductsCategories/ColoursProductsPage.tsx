import ClothingCategories from "./ClothingProducts";
import ProductsImage from "../ProductsItems";

export default function ColoursProductsPage() {
  const clothingProducts = ProductsImage.filter(
    (item) => item.producttype === "Patterns"
  );
  return <ClothingCategories currentItems={clothingProducts} />;
}
