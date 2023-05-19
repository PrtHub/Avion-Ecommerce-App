import { useState } from "react";
import { BsPersonCircle, BsCart3 } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

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
          <ul className="hidden lg:flex items-center justify-center gap-10 font-satoshi text-base font-normal text-light-gray-100">
            <li>Plant pots</li>
            <li>Ceramics</li>
            <li>Tables</li>
            <li>Chairs</li>
            <li>Crackery</li>
            <li>Tableware</li>
            <li>Cutlery</li>
          </ul>
          <section className="flex items-center justify-center gap-3 lg:gap-5 text-Primary ">
            <BsCart3 className=" w-5 h-5" />
            <BsPersonCircle className=" w-4 h-4" />
            <div className="block lg:hidden ">
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
                    <li>Tables</li>
                    <li>Chairs</li>
                    <li>Cutlery</li>
                    <li>Crackery</li>
                    <li>Ceramics</li>
                    <li>Tableware</li>
                    <li>Plant pots</li>
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
