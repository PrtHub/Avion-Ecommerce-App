import { productbanner } from "../assets"


const Products = () => {
  return (
    <>
    <div className="w-full h-full bg-white flex flex-col ">
       <section className="w-full h-[210px] relative">
         <img src={productbanner} alt="Product-Banner" className="w-full h-full object-cover" />
         <div  className="absolute left-10 bottom-16">
         <h1 className="text-white text-3xl md:text-4xl font-clash font-normal">All Products</h1>
         </div>
       </section>
    </div>
    </>
  )
}

export default Products