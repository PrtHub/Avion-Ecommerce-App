/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'

const ProductCard = ({ ceramic }) => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    window.scrollTo(0, 0);
    navigate(`/product/${ceramic.id}`)
  }
  return (
    <>
      <motion.div
       whileHover={{
        scale: 1.05,
      }}
      className={`${ceramic.icon1 ? 'w-[603px]': ' w-[300px]'} h-[460px] bg-white flex flex-col items-start justify-start gap-2`}>
        <div onClick={handleNextPage}>
          {ceramic.icon1 ? (
            <img
              src={ceramic.icon1}
              alt="ceramic image"
              className="w-full h-[375px] object-cover cursor-pointer"
            />
          ) : (
            <img
              src={ceramic.icon}
              alt="ceramic image"
              className="w-full h-[375px] object-cover cursor-pointer"
            />
          )}
        </div>
        <h3 className="font-clash font-normal text-xl text-Primary">
          {ceramic.name}
        </h3>
        <p className="font-satoshi font-normal text-lg text-Primary">
          &#8377;{ceramic.price}
        </p>
      </motion.div>
    </>
  );
};

export default ProductCard;
