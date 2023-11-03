import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="">
        <div className="flex flex-wrap gap-y-20 justify-center text-center lg:text-left">
          <div className="lg:w-1/2 relative">
            <img
              src={person}
              className="w-3/4 h-full sm:h-[373px] md:h-[473px] object-cover rounded-lg shadow-2xl"
            />
            <img
              src={parts}
              className="w-1/2 absolute h-full sm:h-[242px] md:h-[322px] object-cover right-10 md:right-20 md:top-3/4 -translate-y-1/2  rounded-lg border-8 border-white shadow-2xl"
            />
          </div>
          <div className="mt-20 md:mt-0">
            <h3 className="text-xl text-[#FF3811] font-bold mb-5">About Us</h3>
            <h1 className="text-[45px] font-bold max-w-[376px] leading-[55px] mb-8 mx-auto lg:mx-0">
              We are qualified & of experience in this field
            </h1>
            <div className="max-w-[489px] text-[#737373] capitalize">
              <p className="mb-5">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which {"don't"} look even
                slightly believable.
              </p>
              <p className="mb-8">
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which {"don't"} look even slightly
                believable.
              </p>
            </div>
            <button className="bg-[#FF3811] rounded text-[#FFF] text-lg font-semibold px-6 py-4">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
