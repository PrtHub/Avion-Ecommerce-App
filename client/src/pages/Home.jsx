import { About, Ceramics, Hero, Polpular, Signin, Spaciality } from "../container"


const Home = () => {
  return (
    <>
    <div className="w-full h-full">
      <Hero/>
      <Spaciality/>
      <Ceramics/>
      <Polpular/>
      <Signin/>
      <About/>
    </div>
    </>
  )
}

export default Home