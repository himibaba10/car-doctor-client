import PropTypes from "prop-types";

const FeatureCard = ({ img, title }) => {
  return (
    <div className="text-center rounded-lg border border-[#E8E8E8] py-7 p-5 hover:bg-primaryColor group text-[#444] hover:text-white transition-all duration-300">
      <img
        className="h-14 group-hover:brightness-0 group-hover:invert  object-contain mx-auto transition duration-300"
        src={img}
      />
      <h3 className=" font-bold mt-4">{title}</h3>
    </div>
  );
};

FeatureCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

export default FeatureCard;
