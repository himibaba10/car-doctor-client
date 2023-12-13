import axios from "axios";
import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AllServiceCard = ({ currentId }) => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios(`http://localhost:5000/other-services/${currentId}`).then((data) =>
      setServices(data.data)
    );
  }, [currentId]);
  return (
    <div className="p-10 bg-[#F3F3F3] rounded-lg">
      <h2 className="mb-5 text-[#151515] text-2xl font-bold">Services</h2>
      <div className="space-y-5">
        {services?.map((service) => (
          <div
            onClick={() => {
              navigate(`/services/${service._id}`);
            }}
            className="bg-primaryColor rounded p-4 text-white flex justify-between items-center cursor-pointer"
            key={service._id}
          >
            <span>{service.title}</span>
            <HiArrowRight />
          </div>
        ))}
      </div>
    </div>
  );
};

AllServiceCard.propTypes = {
  currentId: PropTypes.string,
};

export default AllServiceCard;
