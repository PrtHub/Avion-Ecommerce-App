import {
  About,
  Ceramics,
  Features,
  Hero,
  Polpular,
  Signin,
} from "../container";

const Home = () => {
  return (
    <>
      <div className="w-full h-full">
        <Hero />
        <Features />
        <Ceramics />
        <Polpular />
        <Signin />
        <About />
      </div>
    </>
  );
};

export default Home;
