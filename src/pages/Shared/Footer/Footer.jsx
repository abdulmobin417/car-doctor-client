import logo from "../../../assets/footerLogo.png";
import google from "../../../assets/icons/google.png";
import twitter from "../../../assets/icons/twitter.png";
import instagram from "../../../assets/icons/instagram.png";
import linkedin from "../../../assets/icons/linkedin.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#151515] py-[130px] px-8 text-center lg:text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 justify-items-center gap-6">
        <div className="space-y-5 flex flex-col items-center lg:items-start">
          <img src={logo} className="w-[75px]" alt="" />
          <p className="text-[#E8E8E8] max-w-[283px]">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial.
          </p>
          <div className="flex gap-2">
            <div className="bg-[#5e5d5d86] p-3 w-9 rounded-full">
              <img src={google} alt="" />
            </div>
            <div className="bg-[#5e5d5d86] p-3 w-9 rounded-full">
              <img src={twitter} alt="" />
            </div>
            <div className="bg-[#5e5d5d86] p-3 w-9 rounded-full">
              <img src={instagram} alt="" />
            </div>
            <div className="bg-[#5e5d5d86] p-3 w-9 rounded-full">
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="text-[#FFF] text-xl font-semibold mb-10">About</h2>
          <div className="text-[#F3F3F3] leading-10 flex flex-col">
            <Link>Home</Link>
            <Link>Service</Link>
            <Link>Contact</Link>
          </div>
        </div>
        <div className="">
          <h2 className="text-[#FFF] text-xl font-semibold mb-10">Company</h2>
          <div className="text-[#F3F3F3] leading-10 flex flex-col">
            <Link>Why Car Doctor</Link>
            <Link>About</Link>
          </div>
        </div>
        <div className="">
          <h2 className="text-[#FFF] text-xl font-semibold mb-10">Support</h2>
          <div className="text-[#F3F3F3] leading-10 flex flex-col">
            <Link>Support Center</Link>
            <Link>Feedback</Link>
            <Link>Accesbility</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
