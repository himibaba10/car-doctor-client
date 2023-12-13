import PropTypes from "prop-types";
import titleBg from "../../assets/icons/titleBg.svg";

const SharedHeader = ({ title, img, breadcrumb }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="bg-center bg-cover px-12 py-32 relative text-white rounded-lg overflow-hidden"
    >
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"></div>
      <h1 className="relative text-5xl font-bold">{title}</h1>
      <span
        style={{ backgroundImage: `url(${titleBg})` }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[length:100%] bg-no-repeat px-10 py-2 bg-bottom"
      >
        {breadcrumb}
      </span>
    </div>
  );
};

SharedHeader.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  breadcrumb: PropTypes.string,
};

export default SharedHeader;
