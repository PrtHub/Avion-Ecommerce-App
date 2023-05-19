import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiFillSkype,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-full bg-Primary">
        <div className="content-wrapper flex flex-col items-start justify-center">
          <section className="w-full h-full text-white flex flex-wrap-reverse md:flex-wrap items-start justify-between lg:justify-center gap-10 lg:gap-28">
            <ul className="flex flex-col items-start justify-start gap-3 font-satoshi font-normal text-sm">
              <h1 className="text-base">Menu</h1>
              <li>New Arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
            <ul className="flex flex-col items-start justify-start gap-3 font-satoshi font-normal text-sm">
              <h1 className="text-base">Our company</h1>
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Return policy</li>
            </ul>
            <ul className="flex flex-col items-start justify-start gap-3 font-satoshi font-normal text-sm">
              <h1 className="text-base">Categories</h1>
              <li>Ceramics</li>
              <li>Tables</li>
              <li>Chairs</li>
              <li>Crackery</li>
              <li>Tableware</li>
              <li>Cutlery</li>
            </ul>
            
            <div className="flex flex-col items-start justify-start gap-3">
              <h1 className="font-clash font-normal text-base ">
                Join our mailing list
              </h1>
              <form className="font-satoshi flex items-center">
                <input
                  type="text"
                  placeholder="your@email.com"
                  className="w-full sm:w-64 h-12 bg-white bg-opacity-20 placeholder:text-white text-white px-4 py-2 outline-none border-none"
                />
                <button className="w-28 h-12 bg-white text-Primary text-base px-4 py-2">Sign up</button>
              </form>
            </div>
          </section>
         
          <section className="w-full h-full flex items-center justify-center md:justify-between flex-wrap border-t-2 border-t-[#4E4D93] pt-5 ">
          <h1 className="text-white text-sm font-satoshi font-normal">Copyright&copy;2023 Avion LTD</h1>
          <div className="hidden md:flex items-center justify-center gap-4 text-white">
           <AiFillLinkedin className="w-5 h-5"/>
           <AiFillFacebook  className="w-5 h-5"/>
           <AiOutlineTwitter className="w-5 h-5"/>
           <AiFillInstagram className="w-5 h-5"/>
           <AiFillSkype className="w-5 h-5"/>
           <BsPinterest className="w-5 h-5"/>
          </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
