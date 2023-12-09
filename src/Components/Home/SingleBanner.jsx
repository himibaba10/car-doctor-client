import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import PropTypes from "prop-types";

const SingleBanner = ({ bannerId, bannerImg, prevSlide, nextSlide }) => {
  return (
    <div
      id={bannerId}
      className="carousel-item relative w-full rounded-lg overflow-hidden"
    >
      <img src={bannerImg} className="h-[600px] w-full object-cover" />
      <div className="w-full h-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"></div>
      <div className="absolute top-1/2 -translate-y-1/2 left-24 space-y-7 text-white max-w-[470px]">
        <h2 className="text-6xl font-bold leading-tight">
          Affordable Price For Car Servicing
        </h2>
        <p className="text-base leading-7 capitalize">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div className="space-x-5 ">
          <button className="btn text-white bg-primaryColor border-none px-6">
            Discover More
          </button>
          <button className="btn px-6 text-white bg-transparent">
            Latest project
          </button>
        </div>
      </div>
      <div className="absolute flex justify-end gap-5 transform right-12 bottom-12">
        <a
          href={`#${prevSlide}`}
          className="btn btn-circle bg-[rgba(255,255,255,0.20);] w-[60px] h-[60px] border-none"
        >
          <HiArrowLeft color="white" className="text-2xl" />
        </a>
        <a
          href={`#${nextSlide}`}
          className="btn btn-circle w-[60px] h-[60px] border-none bg-primaryColor"
        >
          <HiArrowRight color="white" className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

SingleBanner.propTypes = {
  bannerId: PropTypes.string,
  bannerImg: PropTypes.string,
  prevSlide: PropTypes.string,
  nextSlide: PropTypes.string,
};

export default SingleBanner;
