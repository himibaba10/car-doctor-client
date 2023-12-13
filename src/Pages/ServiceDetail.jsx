import { useLoaderData, useNavigate } from "react-router-dom";
import SharedHeader from "../Components/Shared/SharedHeader";
import bannerImg from "../assets/images/banner/4.jpg";
import AllServiceCard from "../Components/ServiceDetail/AllServiceCard";
import Download from "../Components/ServiceDetail/Download";
import OfferCard from "../Components/ServiceDetail/OfferCard";

const ServiceDetail = () => {
  const navigate = useNavigate();
  const { description, facility, img, title, _id, price } = useLoaderData();

  const handleProceedCheckout = (id) => {
    navigate(`/checkout?id=${id}`);
  };

  return (
    <div>
      <SharedHeader
        title="Service Details"
        img={bannerImg}
        breadcrumb="Home/Service Details"
      />
      <div className="my-32 grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <img
            className="h-[400px] w-full object-cover rounded-lg"
            src={img}
            alt={`Image of ${title}`}
          />
          <h1 className="mt-12 mb-7 text-[#151515] text-4xl font-bold">
            {title}
          </h1>
          <p className="text-[#737373] leading-7 mb-7">{description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facility.map((fac, idx) => (
              <div
                className="p-10 rounded-lg border-t-2 border-t-primaryColor bg-[#F3F3F3] "
                key={idx}
              >
                <h3 className="text-[#444] text-xl font-bold mb-2.5">
                  {fac.name}
                </h3>
                <p className="text-[#737373] capitalize leading-7">
                  {fac.details}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-7">
          <AllServiceCard currentId={_id} />
          <Download />
          <OfferCard />
          <p className="text-[#151515] text-4xl font-bold">Price ${price}</p>
          <button
            onClick={() => handleProceedCheckout(_id)}
            className="text-white bg-primaryColor w-full py-4 rounded text-lg font-semibold"
          >
            Proceed Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
