import { IoDocumentTextOutline } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi2";
import PropTypes from "prop-types";

const DownloadFile = ({ name }) => {
  return (
    <div className="flex items-center gap-3">
      <IoDocumentTextOutline className="text-3xl" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-[#A2A2A2]">Download</p>
      </div>
      <HiArrowRight className="bg-primaryColor p-3 text-5xl rounded" />
    </div>
  );
};
DownloadFile.propTypes = {
  name: PropTypes.string,
};

const Download = () => {
  return (
    <div className="bg-[#151515] rounded-lg p-10 text-white space-y-5">
      <h2 className="text-2xl font-bold">Download</h2>
      <DownloadFile name="Our Brochure" />
      <DownloadFile name="Company Details" />
    </div>
  );
};

export default Download;
