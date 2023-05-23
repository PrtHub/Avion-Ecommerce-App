import { Banner } from "../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <header className="w-full xl:w-[1260px] h-full mx-auto flex items-center justify-center px-7 xl:px-0 py-10">
        <section className="w-full h-[440px] bg-Primary flex flex-col items-start justify-between gap-10 p-10">
          <div className="flex flex-col items-start justify-start gap-10">
            <h1 className="w-full sm:max-w-lg font-clash font-normal text-3xl sm:text-4xl text-white">
              The furniture brand for the future, with timeless designs
            </h1>
            <Link
              to="/products"
              className="hidden md:block bg-white bg-opacity-20 font-satoshi font-normal text-light-gray px-5 py-2 hover:bg-opacity-25 transition-all duration-200 focus:bg-opacity-25 outline-none cursor-pointer"
            >
              View Collection
            </Link>
          </div>
          <div className="w-full sm:max-w-xl flex flex-col items-start justify-start gap-10">
            <p className="font-satoshi text-sm sm:text-base text-white">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
            <Link
              to="/products"
              className="flex md:hidden w-full items-center justify-center bg-white bg-opacity-20 font-satoshi font-normal text-light-gray px-5 py-2 hover:bg-opacity-25 transition-all duration-200 focus:bg-opacity-25 outline-none cursor-pointer"
            >
              View Collection
            </Link>
          </div>
        </section>
        <section className="w-[620px] h-[440px] hidden md:block">
          <img src={Banner} alt="" className="w-full h-full object-cover" />
        </section>
      </header>
    </>
  );
};

export default Hero;
