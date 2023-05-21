/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductCard = ({ ceramic }) => {
  return (
    <>
      <div className={`${ceramic.icon1 ? 'w-[603px]': ' w-[300px]'} h-[460px] bg-white flex flex-col items-start justify-start gap-2`}>
        <Link to={`/product/${ceramic.id}`}>
          {ceramic.icon1 ? (
            <img
              src={ceramic.icon1}
              alt="ceramic image"
              className="w-full h-[375px] object-cover"
            />
          ) : (
            <img
              src={ceramic.icon}
              alt="ceramic image"
              className="w-full h-[375px] object-cover"
            />
          )}
        </Link>
        <h3 className="font-clash font-normal text-xl text-Primary">
          {ceramic.name}
        </h3>
        <p className="font-satoshi font-normal text-lg text-Primary">
          &#8377;{ceramic.price}
        </p>
      </div>
    </>
  );
};

export default ProductCard;
