import { useNavigate } from "react-router-dom";
import { ProductCard } from "../components";
import { popular } from "../constants";

const Polpular = () => {
  const navigate = useNavigate();

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
    navigate("/products");
  };

  return (
    <>
      <div className="content-wrapper flex flex-col items-start justify-start">
        <section className="flex items-start justify-start">
          <h1 className="header-text">
            Our popular products
          </h1>
        </section>
        <section className="w-full h-full flex flex-wrap items-center justify-center lg:justify-start xl:justify-between gap-10 xl:gap-0">
          {popular.map((ceramic) => (
            <ProductCard key={ceramic.id} ceramic={ceramic} />
          ))}
        </section>
        <div
          onClick={handleScrollTop}
          className="w-full flex items-center justify-center"
        >
          <button className="bg-light-gray text-Primary font-satoshi font-normal text-base px-6 py-3 outline-none border-none ">
            View collection
          </button>
        </div>
      </div>
    </>
  );
};

export default Polpular;
