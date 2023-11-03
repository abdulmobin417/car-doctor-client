import About from "../About/About";
import ChooseUs from "../ChooseUs/ChooseUs";
import Header from "../Header/Header";
import Hotline from "../Hotline/Hotline";
import OurTeam from "../OurTeam/OurTeam";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="space-y-[130px] mb-[130px]">
      <Header />
      <About />
      <Services />
      <Hotline />
      <Products />
      <OurTeam />
      <ChooseUs />
      <Testimonial />
    </div>
  );
};

export default Home;
