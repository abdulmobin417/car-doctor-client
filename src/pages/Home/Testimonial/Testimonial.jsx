import ReviewSlider from "./ReviewSlider";

const Testimonial = () => {
  return (
    <div>
      <div className="space-y-5 mb-12 text-center">
        <p className="text-[#FF3811] text-xl font-bold">Testimonial</p>
        <h1 className="text-[#151515] text-[45px] font-bold">
          What Customer Says
        </h1>
        <p className="text-[#737373] max-w-[717px] mx-auto capitalize">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which {"don't"} look even slightly
          believable.{" "}
        </p>
      </div>
      <div>
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Testimonial;