import logo from "../../assets/logo2.svg";
const OfferCard = () => {
  return (
    <div className="bg-[#151515] p-12 pb-20 rounded-lg text-center">
      <img className="mx-auto h-28" src={logo} />
      <h3 className="text-white text-xl font-bold leading-9 mt-4 mb-7">
        Need Help? We Are Here To Help You
      </h3>
      <div className="bg-white px-11 py-7 rounded-lg max-h-[128px]">
        <h3 className="text-xl font-bold">
          <span className="text-primaryColor">Car Doctor</span> Special
        </h3>
        <p className="text-[#737373] mt-1 mb-3 font-bold">
          Save up to <span className="text-primaryColor">60% off</span>
        </p>
        <button className="text-white bg-primaryColor px-8 py-4 rounded text-lg font-semibold">
          Get A Quote
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
