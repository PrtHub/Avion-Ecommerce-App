import { productbanner } from "../assets";

const Products = () => {
  return (
    <>
      <div className="w-full h-full bg-white flex flex-col ">
        <section className="w-full h-[210px] relative">
          <img
            src={productbanner}
            alt="Product-Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-10 bottom-16">
            <h1 className="text-white text-3xl md:text-4xl font-clash font-normal">
              All Products
            </h1>
          </div>
        </section>
        <section className="content-wrapper flex flex-col items-start justify-start">
          <section className="flex items-center justify-start gap-10">
            <select
              id="category"
              className="w-28 bg-white font-satoshi font-normal text-base text-Primary hover:text-light-gray-100 transition-all duration-200 cursor-pointer py-1"
            >
              <option value="Product-type">Product type</option>
              <option value="furniture">Furniture</option>
              <option value="sofas">Sofas</option>
              <option value="chair">Chairs</option>
              <option value="homeware">Homeware</option>
              <option value="lights">Lights</option>
            </select>
            <select
              id="price"
              className="w-16 bg-white font-satoshi font-normal text-base text-Primary hover:text-light-gray-100 transition-all duration-200 cursor-pointer py-1"
            >
              <option value="all">Brand</option>
              <option value="brand">Robert Smith</option>
              <option value="brand">Liam Gallagher</option>
              <option value="brand">Biggie Smalls</option>
              <option value="brand">Thom Yorke</option>
            </select>
            <select
              id="price"
              className="w-16 bg-white font-satoshi font-normal text-base text-Primary hover:text-light-gray-100 transition-all duration-200 cursor-pointer py-1"
            >
              <option value="all">Price</option>
              <option value="price">100 - 500</option>
              <option value="price">500 - 1000</option>
              <option value="price">1000 - 5000</option>
              <option value="price">5000 - 10000</option>
              <option value="price">10000+</option>
            </select>
          </section>
        </section>
      </div>
    </>
  );
};

export default Products;
