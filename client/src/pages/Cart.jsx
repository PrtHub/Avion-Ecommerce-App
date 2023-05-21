

const Cart = () => {
  return (
    <>
    <div className="w-full lg:w-[950px] h-full mx-auto flex flex-col items-start justify-start gap-10 py-20 px-10 lg:px-0">
      <section className="flex items-start justify-start">
        <h1 className="font-clash font-normal text-3xl text-Primary">
           Your shopping cart
        </h1>
      </section>
      <section className="w-full flex flex-col items-center justify-center gap-5">
         <div className="w-full flex items-center justify-between text-Primary text-sm font-satoshi font-normal">
          <p>Product</p>
          <p>Quantity</p>
          <p>Price</p>
         </div>
         <div>
          
         </div>
      </section>
    </div>
    </>
  )
}

export default Cart