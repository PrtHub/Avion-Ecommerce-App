/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'

const ProductCard = ({ ceramic }) => {
  return (
    <>
    <div className="w-[305px] h-[462px] bg-white flex flex-col items-start justify-start gap-2">
        <Link to={`/product/:${ceramic.id}`}>
        <img src={ceramic.icon} alt="ceramic image" className="w-full h-[375px] object-cover"/> 
        </Link>
       <h3 className="font-clash font-normal text-xl text-Primary">{ceramic.name}</h3>
       <p className="font-satoshi font-normal text-lg text-Primary">&#8377;{ceramic.price}</p>
    </div>
    </>
  )
}

export default ProductCard