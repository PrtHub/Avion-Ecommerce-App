import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GiThreeLeaves } from "react-icons/gi";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FeaturesCard } from "../components";

const Features = () => {
  return (
    <>
      <div className="content-wrapper flex flex-col items-center justify-center">
        <section className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="header-text">
            What makes our brand different
          </h1>
        </section>
        <section className="w-full h-full flex flex-wrap items-center justify-center lg:justify-between gap-16 lg:gap-10">
          <FeaturesCard
            icon={TbTruckDelivery}
            title="Next day as standard"
            desc="Order before 3pm and get your order
          the next day as standard"
          />
          <FeaturesCard
            icon={AiOutlineCheckCircle}
            title="Made by true artisans"
            desc="Handmade crafted goods made with
          real passion and craftmanship"
          />
          <FeaturesCard
            icon={CiMoneyCheck1}
            title="Unbeatable prices"
            desc="For our materials and quality you won’t find better prices anywhere"
          />
          <FeaturesCard
            icon={GiThreeLeaves}
            title="Recycled packaging"
            desc="We use 100% recycled packaging to ensure our footprint is manageable"
          />
        </section>
      </div>
    </>
  );
};

export default Features;
