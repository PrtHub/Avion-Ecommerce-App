import { Link, useParams } from "react-router-dom";
import { AllProducts } from "../constants";
import { ProductCard } from "../components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartReducer";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [goToCart, setGoToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const selectedProduct = AllProducts.find(
    (product) => product.id === parseInt(id)
  );

  const similarProducts = AllProducts.filter((product) => {
    if (Array.isArray(product.tag)) {
      return (
        product.tag.includes(selectedProduct.tag) &&
        product.id !== selectedProduct.id
      );
    } else {
      return (
        product.tag === selectedProduct.tag && product.id !== selectedProduct.id
      );
    }
  });

  const filteredProducts = similarProducts.slice(0, 4);

  const handleQuantity = (operation) => {
    setQuantity((prevQuantity) =>
      operation === "i" ? prevQuantity + 1 : prevQuantity - 1
    );
  };

  const title = selectedProduct.name || "";
  const price = selectedProduct.price || "";
  const image = selectedProduct.icon || selectedProduct.icon1;

  console.log(image, title);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: selectedProduct.id,
        title,
        price,
        image,
        quantity,
      })
    ),
      setGoToCart(true);
  };

  return (
    <>
      <div className="content-wrapper flex flex-col items-center justify-start gap-20">
        <section className="w-full h-full flex flex-col lg:flex-row items-start  lg:items-center justify-start gap-10 lg:gap-20">
          <section className="w-full h-full sm:w-[407px] sm:h-[461px] md:w-[507px] md:h-[561px]">
            <img
              src={selectedProduct.icon || selectedProduct.icon1}
              alt=""
              className="w-full h-full object-cover"
            />
          </section>
          <section className="flex flex-col justify-start items-start gap-10">
            <div className="flex flex-col items-start justify-start gap-4">
              <h1 className="font-clash font-normal text-3xl md:text-4xl text-Primary">
                {selectedProduct.name}
              </h1>
              <p className="font-satoshi font-normal text-Primary text-2xl">
                &#8377; {selectedProduct.price}
              </p>
            </div>
            <div className="max-w-xl flex flex-col justify-start items-start gap-4">
              <h3 className="font-clash font-normal text-xl text-Primary">
                Product description
              </h3>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                doloremque sapiente, tenetur nesciunt mollitia quaerat neque
                dolores blanditiis, autem, id officiis dolore nihil dolor
                assumenda dolorem. Quod dolorum excepturi quo.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <h3 className="font-clash font-normal text-Primary text-xl">
                Qunatity
              </h3>
              <div className="flex items-center justify-start gap-4 font-satoshi font-normal text-base text-Primary">
                <span
                  className={`border-[1px] border-light-gray-100 px-4 py-2 cursor-pointer ${
                    quantity <= 1 ? "opacity-50 pointer-events-none" : ""
                  }`}
                  onClick={() => handleQuantity("d")}
                >
                  -
                </span>
                <p>{quantity}</p>
                <span
                  className="border-[1px] border-light-gray-100 px-4 py-2 cursor-pointer"
                  onClick={() => handleQuantity("i")}
                >
                  +
                </span>
              </div>
            </div>
            <div className="flex items-center justify-start">
              {goToCart ? (
                <Link to="/cart" className="button">
                  Go to cart
                </Link>
              ) : (
                <button
                  className="button"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              )}
            </div>
          </section>
        </section>
        <section
          className="w-full h-full flex flex-col
         items-center justify-center gap-10"
        >
          <h1 className="font-clash font-normal text-2xl text-Primary">
            You may also like
          </h1>
          <section className="w-full h-full flex flex-wrap items-center justify-center gap-10 xl:gap-4">
            {filteredProducts.map((ceramic) => (
              <ProductCard key={ceramic.id} ceramic={ceramic} />
            ))}
          </section>
        </section>
      </div>
    </>
  );
};

export default Product;
