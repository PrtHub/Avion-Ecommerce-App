import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { removeItem, resetCart, updateQuantity } from "../redux/CartReducer";
import { toast } from "react-toastify";

const Cart = () => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const totalPrice = () => {
    let total = 0;

    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
  };

  const goBack = () => {
    window.scrollTo(0, 0);
    window.history.back();
  };

  const handleClick = () => {
    dispatch(resetCart(products.id));
    if (products.length === 0) {
      return toast.warning("Please select a product");
    } else {
      naviagte("/success");
    }
  };

  return (
    <>
      <div className="w-full lg:w-[950px] h-full mx-auto flex flex-col items-start justify-start gap-10 py-20 px-5 sm:px-10 lg:px-0">
        <section className="flex items-start justify-start">
          <h1 className="font-clash font-normal text-2xl sm:text-3xl text-Primary">
            Your shopping cart
          </h1>
        </section>
        {products.length === 0 ? (
          <p className="text-Primary text-base sm:text-lg">
            No products added to the cart.
          </p>
        ) : (
          products.map((item) => (
            <section
              className="w-full flex items-start justify-center sm:justify-between sm:gap-5"
              key={item.title}
            >
              <section className="w-full flex flex-col items-start justify-center gap-5">
                <p className="hidden md:block text-Primary text-sm font-satoshi font-normal">
                  Product
                </p>
                <section className="flex items-start justify-start gap-4">
                  <div className="w-[133px] h-[166px] sm:w-[160px] sm:h-[184px] md:w-[150px] md:h-[164px]">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className=" h-[166px] sm:h-[184px] flex flex-col items-start justify-between md:justify-start gap-2">
                    <h1 className="font-clash font-normal text-lg text-Primary">
                      {item.title}
                    </h1>
                    <p className="max-w-[160px] sm:max-w-[180px] font-satoshi font-normal text-Primary text-xs sm:text-sm md:text-xs lg:text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Earum, error?
                    </p>
                    <p className="font-satoshi font-normal text-Primary text-base">
                      {item.price}
                    </p>
                    <div className="md:hidden w-[180px] flex items-center gap-2 text-center font-satoshi font-normal text-Primary text-base">
                      <button
                        className={`border-Primary border-[1px] px-2 flex items-center justify-center ${
                          item.quantity <= 1
                            ? "opacity-50 pointer-events-none"
                            : ""
                        }`}
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <p className="text-base font-normal text-Primary font-satoshi">
                        {item.quantity}
                      </p>
                      <button
                        className="border-Primary border-[1px] px-2 flex items-center justify-center"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </section>
              </section>
              <section className="w-full hidden md:flex flex-col items-center justify-center gap-16">
                <p className="text-Primary text-sm font-satoshi font-normal">
                  Quantity
                </p>
                <div className="flex items-center gap-4">
                  <button
                    className={`border-Primary border-[1px] px-2 flex items-center justify-center ${
                      item.quantity<=1 ? "opacity-50 pointer-events-none" : ""
                    }`}
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <p className="text-base font-normal text-Primary font-satoshi">
                    {item.quantity}
                  </p>
                  <button
                    className="border-Primary border-[1px] px-2 flex items-center justify-center"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </section>
              <section className="w-full hidden md:flex flex-col items-center justify-center gap-16">
                <p className="text-Primary text-sm font-satoshi font-normal">
                  Price
                </p>
                <p className="text-base font-normal text-Primary font-satoshi">
                  {item.price}
                </p>
              </section>
              <section className="mt-10 md:mt-20">
                <AiOutlineDelete
                  className="text-2xl text-Primary cursor-pointer"
                  onClick={() => dispatch(removeItem(item.id))}
                />
              </section>
            </section>
          ))
        )}
        <section className="w-full h-full flex items-end">
          <button className=" flex items-center gap-1 button" onClick={goBack}>
            <BsArrowLeft /> Back
          </button>
          <section className="w-full h-full flex flex-col justify-end items-end gap-4">
            <p className="text-lg sm:text-xl text-[#4E4D93] font-clash font-normal">
              Subtotal:{" "}
              <span className="text-Primary">&#8377; {totalPrice()}</span>
            </p>
            <p className="text-[#4E4D93] text-sm font-satoshi font-normal">
              Taxes and shipping are calculated at checkout
            </p>
            <button className="button" onClick={handleClick}>
              Purchase now
            </button>
          </section>
        </section>
      </div>
    </>
  );
};

export default Cart;
