import { BsBagCheckFill } from 'react-icons/bs'

const Success = () => {
  return (
    <>
    <div className="content-wrapper flex items-center justify-center py-20">
       <section className="w-auto h-60 bg-light-gray flex flex-col items-center justify-center gap-4" >
          <BsBagCheckFill className='text-Primary w-10 h-10'/> 
          <h1 className='text-Primary text-4xl font-clash font-medium'>Thank You for Purchasing </h1>
          <p className='max-w-sm text-center text-light-gray-100 font-normal font-satoshi'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima nostrum porro dolore deserunt similique.</p>
          <button className='bg-Primary text-white font-satoshi font-normal px-6 py-3'>Continue Shopping</button>
       </section>
    </div>
    </>
  )
}

export default Success