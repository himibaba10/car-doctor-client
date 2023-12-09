import axios from "axios";
import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [displayServices, setDisplayServices] = useState(6);

  useEffect(() => {
    axios("/public/services.json").then((data) => setServices(data.data));
  }, []);
  return (
    <div className="mt-32">
      <div className="text-center">
        <span className="text-primaryColor text-xl font-bold">Service</span>
        <h2 className="my-5 text-[#151515] text-5xl font-bold leading-tight">
          Our Service Area
        </h2>
        <p className="text-[#737373] leading-7 capitalize max-w-[700px] mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {services.slice(0, displayServices).map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      {!(services.length === displayServices) && (
        <button
          onClick={() => setDisplayServices(services.length)}
          className="mx-auto block px-6 py-2.5 border-2 border-primaryColor text-primaryColor text-lg font-semibold rounded-lg"
        >
          More Services
        </button>
      )}
    </div>
  );
};

export default Services;
