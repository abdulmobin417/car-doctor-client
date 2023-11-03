import ServiceCard from "./ServiceCard";
import useServices from "../../../hooks/useServices";

const Services = () => {
  const services = useServices();

  return (
    <div>
      <div className="text-center space-y-5 mb-12">
        <h2 className="text-[#FF3811] text-xl font-bold">Service</h2>
        <h1 className="text-[#151515] text-[45px] font-bold">
          Our Service Area
        </h1>
        <p className="text-[#737373] max-w-[717px] mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which {"don't"} look even slightly
          believable.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <button className="text-[#FF3811] border border-[#FF3811] px-6 py-4 rounded font-semibold">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
