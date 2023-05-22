import { useState } from "react";
import { BsPersonCircle, BsCart3 } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="w-full h-full bg-white relative">
        <div className="w-full h-full flex items-center justify-between gap-10 px-7 lg:px-10 py-5">
          <section className="flex items-center justify-center">
            <h1 className="capitalize font-clash text-Dark-Primary text-xl md:text-2xl">
              Avion
            </h1>
          </section>
          <ul className="hidden md:flex items-center justify-center gap-10 font-satoshi text-base font-normal text-light-gray-100">
            <Link to="/">
              <li>Home</li>
            </Link>
            <a href="#about">
              <li>About</li>
            </a>
            <Link to="/products">
              <li>Products</li>
            </Link>
            <a href="#signin">
              <li>Singin</li>
            </a>
          </ul>
          <section className="flex items-center justify-center gap-3 lg:gap-5 text-Primary ">
            <Link to='/cart' className="relative">
            <BsCart3 className=" w-5 h-5" />
            <span className="w-5 h-5 absolute -top-4 -right-3 bg-Primary text-white rounded-full flex justify-center items-center">0</span>
            </Link>
            <BsPersonCircle className=" w-4 h-4" />
            <div className="block md:hidden ">
              {toggleMenu ? (
                <MdClose
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setToggleMenu(false)}
                />
              ) : (
                <HiOutlineMenu
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setToggleMenu(true)}
                />
              )}
              {toggleMenu && (
                <div className="fixed top-0 right-0 w-40 h-fit slideAnimation">
                  <MdClose
                    className="w-5 h-5 cursor-pointer absolute top-5 right-7"
                    onClick={() => setToggleMenu(false)}
                  />
                  <ul className=" bg-light-gray flex flex-col items-start justify-center gap-10 py-10 font-satoshi text-base font-normal text-light-gray-100">
                    <Link to="/">
                      <li>Home</li>
                    </Link>
                    <a href="#about">
                      <li>About</li>
                    </a>
                    <Link to="/products">
                      <li>Products</li>
                    </Link>
                    <a href="#signin">
                      <li>Singin</li>
                    </a>
                  </ul>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Navbar;
