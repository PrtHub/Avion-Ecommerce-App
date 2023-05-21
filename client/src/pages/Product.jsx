import { useParams } from "react-router-dom";
import { AllProducts } from "../constants";

const Product = () => {
  const { id } = useParams();
  const selectedProduct = AllProducts.find(product => product.id === parseInt(id));
  return (
    <>
      <div className="content-wrapper">
       {selectedProduct.name}
       <img src={selectedProduct.icon} alt="" />
      </div>
    </>
  );
};

export default Product;
