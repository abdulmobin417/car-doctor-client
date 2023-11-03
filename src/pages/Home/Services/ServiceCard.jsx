import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="space-y-5 max-w-[364px] p-6 border border-[#E8E8E8] rounded-[10px]">
      <img src={img} className="rounded-lg h-[208px] object-cover" alt="" />
      <h2 className="text-[#444] text-2xl font-bold">{title}</h2>
      <div className="flex justify-between items-center">
        <p className="text-[#FF3811] text-xl font-semibold">Price : ${price}</p>
        <Link to={`/serviceDetails/${_id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
              stroke="#FF3811"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
