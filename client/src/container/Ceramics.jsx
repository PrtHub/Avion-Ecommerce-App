import { Link } from "react-router-dom";
import { ProductCard } from "../components";
import { ceremics } from "../constants";

const Ceramics = () => {
  return (
    <>
      <div className="content-wrapper flex flex-col items-start justify-start">
        <section className="flex items-start justify-start">
          <h1 className="font-clash font-normal text-2xl md:text-3xl text-Primary">
            New ceramics
          </h1>
        </section>

        <section className="w-full h-full flex flex-wrap items-center justify-between">
          {ceremics.map((ceramic) => (
            <ProductCard key={ceramic.id} ceramic={ceramic} />
          ))}
        </section>
        <Link
          to="/products"
          className="w-full flex items-center justify-center"
        >
          <button className="bg-light-gray text-Primary font-satoshi font-normal text-base px-6 py-3 outline-none border-none ">
            View collection
          </button>
        </Link>
      </div>
    </>
  );
};

export default Ceramics;
