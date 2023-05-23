import { About1, About2 } from "../assets";

const About = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-start justify-center gap-20 px-10 xl:px-0 py-10" id="about">
        <section className="w-full flex items-center justify-center">
          <h1 className="w-full text-center md:max-w-2xl header-text ">
            A brand built on the love of craftmanship, quality and outstanding
            customer service
          </h1>
        </section>
        <div className="w-full h-full flex flex-col items-center justify-center gap-0 lg:gap-2">
          <section className="w-full h-full flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-5 lg:gap-10">
            <div className="h-[480px] flex flex-col items-start justify-start lg:justify-between gap-10 p-5 lg:p-10">
              <section className=" max-w-md flex flex-col items-start justify-start gap-5">
                <h1 className="font-clash font-normal text-xl md:text-2xl text-Primary">
                  From a studio in London to a global brand with over 400
                  outlets
                </h1>
                <p className="para">
                  When we started Avion, the idea was simple. Make high quality
                  furniture affordable and available for the mass market.
                </p>
                <p className="para">
                  Handmade, and lovingly crafted furniture and homeware is what
                  we live, breathe and design so our Chelsea boutique become the
                  hotbed for the London interior design community.
                </p>
              </section>
              <section className="flex items-start justify-start">
                <button className="text-Primary text-base font-satoshi font-normal bg-light-gray">
                  Get in touch
                </button>
              </section>
            </div>
            <section className="w-full h-full sm:w-[600px] sm:h-[400px] lg:w-[710px] lg:h-[480px] ">
              <img src={About1} alt="" className="w-full h-full object-cover" />
            </section>
          </section>

          <section className="w-full h-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-5 lg:gap-10">
            <section className="w-full h-full sm:w-[600px] sm:h-[400px] lg:w-[710px] lg:h-[480px] ">
              <img src={About2} alt="" className="w-full h-full object-cover" />
            </section>
            <div className="h-[480px] flex flex-col items-start justify-start lg:justify-between gap-10 p-5 lg:p-10">
              <section className=" max-w-md flex flex-col items-start justify-start gap-5">
                <h1 className="font-clash font-normal text-xl md:text-2xl text-Primary">
                  Our service isn’t just personal, it’s actually hyper
                  personally exquisite
                </h1>
                <p className="font-satoshi font-normal text-sm md:text-base text-light-gray-100">
                  When we started Avion, the idea was simple. Make high quality
                  furniture affordable and available for the mass market.
                </p>
                <p className="font-satoshi font-normal text-sm md:text-base text-light-gray-100">
                  Handmade, and lovingly crafted furniture and homeware is what
                  we live, breathe and design so our Chelsea boutique become the
                  hotbed for the London interior design community.
                </p>
              </section>
              <section className="flex items-start justify-start">
                <button className="text-Primary text-base font-satoshi font-normal bg-light-gray">
                  Get in touch
                </button>
              </section>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
