import { useState } from "react";
import { productbanner } from "../assets";
import { ProductCard } from "../components";
import { AllProducts } from "../constants";

const Products = () => {
  const [selectedTags, setSelectedTags] = useState("");
  const [selectedDesigner, setSelectedDesigner] = useState("");
  const [selectedRange, setSelectedRange] = useState("");

  const handleFilterChange = (event) => {
    const { id, value } = event.target;
    if (id === "category") {
      setSelectedTags(value);
    } else if (id === "designer") {
      setSelectedDesigner(value);
    } else if (id === "range") {
      setSelectedRange(value);
    }
  };

  const filteredProducts = AllProducts.filter((product) => {
    const tagMatch =
      selectedTags.length === "" ||
      product.tag.toLowerCase() === selectedTags.toLowerCase().trim();
    const designerMatch =
      selectedDesigner === "" ||
      product.designer.toLowerCase() === selectedDesigner.toLowerCase().trim();
    const rangeMatch =
      selectedRange === "" ||
      product.range.toLowerCase() === selectedRange.toLowerCase().trim();
    return tagMatch && designerMatch && rangeMatch;
  });

  const displayProducts =
    filteredProducts?.length > 0 ? filteredProducts : AllProducts;
  return (
    <>
      <div className="w-full h-full bg-white flex flex-col z-10">
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
          <section className="w-full h-full flex items-center justify-center sm:justify-start gap-5 sm:gap-10 sm:overflow-auto">
            <select
              id="category"
              className="w-28 bg-white font-satoshi font-normal text-sm sm:text-base text-Primary hover:text-light-gray-100 transition-all duration-200 cursor-pointer py-1"
              value={selectedTags}
              onChange={handleFilterChange}
            >
              <option value="all">Product type</option>
              <option value="furniture">Furniture</option>
              <option value="light">Lights</option>
              <option value="ceramic">Ceramics</option>
            </select>
            <select
              id="designer"
              className="w-20 sm:w-24 bg-white font-satoshi font-normal text-sm sm:text-base text-Primary hover:text-light-gray-100 transition-all duration-200 cursor-pointer py-1"
              value={selectedDesigner}
              onChange={handleFilterChange}
            >
              <option value="all">Designer</option>
              <option value="Robert">Robert Smith</option>
              <option value="Liam">Liam Gallagher</option>
              <option value="Biggie">Biggie Smalls</option>
              <option value="Thom">Thom Yorke</option>
            </select>
            <select
              id="range"
              className="w-16 bg-white font-satoshi font-normal text-sm sm:text-base text-Primary hover:text-light-gray-100 transition-all duration-200 cursor-pointer py-1"
              value={selectedRange}
              onChange={handleFilterChange}
            >
              <option value="all">Price</option>
              <option value="100 - 500">100 - 500</option>
              <option value="500 - 1000">500 - 1000</option>
              <option value="1000 - 3000">1000 - 3000</option>
              <option value="3000 - 5000">3000 - 5000</option>
              <option value="5000+">5000+</option>
            </select>
          </section>
          <section className="w-full h-full flex flex-wrap items-center justify-center lg:justify-start  gap-10 xl:gap-4">
            {displayProducts?.map((ceramic) => (
              <ProductCard key={ceramic.id} ceramic={ceramic} />
            ))}
          </section>
        </section>
      </div>
    </>
  );
};

export default Products;
