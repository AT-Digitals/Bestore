import FabricProducts from "./FabricProducts";
import ProductsImage from "../ProductsItems";

export default function FabricProductsPAge() {
  const fabricProducts = ProductsImage.filter(
    (item) => item.producttype === "Fabric"
  );
  return <FabricProducts currentItems={fabricProducts} />;
}
