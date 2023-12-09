import PropTypes from "prop-types";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div className="border-2 border-[#E8E8E8] rounded-lg p-6">
      <img
        className="h-52 w-full object-cover rounded-lg"
        src={img}
        alt={`Image of ${title}`}
      />
      <h3 className="my-5 text-[#444] text-2xl font-bold">{title}</h3>
      <div className="flex justify-between items-center text-primaryColor text-xl font-semibold">
        <span>Price: ${price}</span>
        <Link to={`/services/${_id}`}>
          <HiArrowRight className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
