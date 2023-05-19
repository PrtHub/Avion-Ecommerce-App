import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GiThreeLeaves } from "react-icons/gi";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FeaturesCard } from "../components";

const Features = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center py-10">
        <h1 className="font-clash font-normal text-2xl text-Primary">What makes our brand different</h1>
      </div>
      <section className="w-full xl:w-[1260px] h-full mx-auto flex flex-wrap items-center justify-between gap-10 px-7 xl:px-0 p-5">
        <FeaturesCard
          icon={TbTruckDelivery}
          title="Next day as standard"
          para="Order before 3pm and get your order
          the next day as standard"
        />
        <FeaturesCard
          icon={AiOutlineCheckCircle}
          title="Made by true artisans"
          para="Handmade crafted goods made with
          real passion and craftmanship"
        />
        <FeaturesCard
          icon={CiMoneyCheck1}
          title="Unbeatable prices"
          para="For our materials and quality you won’t find better prices anywhere"
        />
        <FeaturesCard
          icon={GiThreeLeaves}
          title="Recycled packaging"
          para="We use 100% recycled packaging to ensure our footprint is manageable"
        />
      </section>
    </>
  );
};

export default Features;
