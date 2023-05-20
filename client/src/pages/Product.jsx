import { AllProducts } from "../constants"

const Product = () => {
  return (
    <>
    {AllProducts.map((ceremic) => (
      <div key={ceremic.id}></div>
    ))}
    </>
  )
}

export default Product