import { ProductCard } from "../components"
import { popular } from "../constants"


const Polpular = () => {
  return (
    <>
    <div className="content-wrapper flex flex-col items-start justify-start">
     <section className="flex items-start justify-start">
        <h1 className="font-clash font-normal text-2xl md:text-3xl text-Primary">Our popular products</h1>
     </section>
     <section className="w-full h-full flex flex-wrap items-center justify-between">
          {popular.map((ceramic) => (
            <ProductCard key={ceramic.id} ceramic={ceramic} />
          ))}
        </section>
    </div>
    </>
  )
}

export default Polpular