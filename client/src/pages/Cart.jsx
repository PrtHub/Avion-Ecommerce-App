import { cup } from "../assets";

const Cart = () => {
  return (
    <>
      <div className="w-full lg:w-[950px] h-full mx-auto flex flex-col items-start justify-start gap-10 py-20 px-10 lg:px-0">
        <section className="flex items-start justify-start">
          <h1 className="font-clash font-normal text-3xl text-Primary">
            Your shopping cart
          </h1>
        </section>
        <section className="w-full flex items-start justify-between gap-5">
          <section className="w-full flex flex-col items-start justify-center gap-5">
            <p className="text-Primary text-sm font-satoshi font-normal">
              Product
            </p>
            <section className="flex items-start justify-start gap-4">
              <div className="w-[133px] h-[166px] sm:w-[160px] sm:h-[184px] md:w-[160px] md:h-[154px] lg:w-[119px] lg:h-[134px]">
                <img src={cup} alt="" className="w-full h-full object-cover" />
              </div>
              <div className=" h-[166px] sm:h-[184px] flex flex-col items-start justify-between md:justify-start gap-2">
                <h1 className="font-clash font-normal text-lg text-Primary">
                  White Cup
                </h1>
                <p className="max-w-[170px] sm:max-w-[180px] font-satoshi font-normal text-Primary text-xs sm:text-sm md:text-xs lg:text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, error?
                </p>
                <p className="font-satoshi font-normal text-Primary text-base">
                  Price
                </p>
                <p className="md:hidden w-[180px] text-center font-satoshi font-normal text-Primary text-base">
                  1
                </p>
              </div>
            </section>
          </section>
          <section className="w-full hidden md:flex flex-col items-center justify-center gap-16">
            <p className="text-Primary text-sm font-satoshi font-normal">
              Quantity
            </p>
            <p className="text-base font-normal text-Primary font-satoshi">1</p>
          </section>
          <section className="w-full hidden md:flex flex-col items-center justify-center gap-16">
            <p className="text-Primary text-sm font-satoshi font-normal">
              Price
            </p>
            <p className="text-base font-normal text-Primary font-satoshi">
              1121
            </p>
          </section>
        </section>
        <section className="w-full h-full flex flex-col justify-end items-end gap-4">
          <p className="text-xl text-[#4E4D93]  font-clash font-normal">
            Subtotal <span className="text-Primary">£210</span>
          </p>
          <p className="text-[#4E4D93] text-sm font-satoshi font-normal">Taxes and shipping are calculated at checkout</p>
          <button className="bg-Primary text-white font-satoshi font-normal text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-3 ">
            Go to checkout
          </button>
        </section>
      </div>
    </>
  );
};

export default Cart;
