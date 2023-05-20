import { useState } from "react";
import { productbanner } from "../assets";
import { ProductCard } from "../components";
import { AllProducts } from "../constants";


const Products = () => {
  const [selectedTags, setSelectedTags] = useState("");
  const [selectedDesigner, setSelectedDesigner] = useState("");

  const handleFilterChange = (event) => {
    const { id, value } = event.target;
    if (id === "category") {
      setSelectedTags(value.split(","));
    } else if (id === "designer") {
      setSelectedDesigner(value);
    }
  };

  const filteredProducts = AllProducts.filter((product) => {
    const tagMatch =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => {
        if (typeof product.tag === "string") {
          return product.tag.toLowerCase() === tag.toLowerCase().trim();
        } else if (Array.isArray(product.tag)) {
          return product.tag.some(
            (productTag) =>
              productTag.toLowerCase() === tag.toLowerCase().trim()
          );
        }
        return false;
      });
    const designerMatch =
      selectedDesigner === "" ||
      product.designer.toLowerCase() === selectedDesigner.toLowerCase().trim();
    return tagMatch && designerMatch;
  });

  const displayProducts =
    filteredProducts.length > 0 ? filteredProducts : AllProducts;
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
              value={selectedTags}
              onChange={handleFilterChange}
            >
              <option value="">Product type</option>
              <option value="furniture">Furniture</option>
              <option value="chair">Chairs</option>
              {/* <option value="homeware">Homeware</option> */}
              <option value="light">Lights</option>
              <option value="vase">Vases</option>
              <option value="sofa">Sofas</option>
              <option value="cup">Cups</option>
            </select>
            <select
              id="designer"
              className="w-28 bg-white font-satoshi font-normal text-base text-Primary hover:text-light-gray-100 transition-all duration-200 cursor-pointer py-1"
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
          <section className="w-full h-full flex flex-wrap items-center justify-center lg:justify-start  gap-10 xl:gap-4">
            {displayProducts.map((ceramic) => (
              <ProductCard key={ceramic.id} ceramic={ceramic} />
            ))}
          </section>
        </section>
      </div>
    </>
  );
};

export default Products;
