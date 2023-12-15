import { RxCross1 } from "react-icons/rx";
import PropTypes from "prop-types";

const ServiceRow = ({ myService, handleServiceDelete }) => {
  const { _id, img, product, price, status } = myService;

  return (
    <tr className="flex justify-between items-center">
      <th>
        <div
          onClick={() => handleServiceDelete(_id)}
          className="bg-black inline-block p-2 rounded-full cursor-pointer hover:scale-110 transition"
        >
          <RxCross1 size="20" color="white" />
        </div>
      </th>
      <td>
        <img
          className="w-36 aspect-square object-cover rounded-lg"
          src={img}
          alt=""
        />
      </td>
      <td className="text-[#444] text-xl font-semibold w-1/3">{product}</td>
      <td className="text-[#444] text-xl font-semibold flex-1">{price}</td>
      <td className="bg-primaryColor text-white rounded-xl text-xl px-5 py-2 inline-block">
        {status || "Pending"}
      </td>
    </tr>
  );
};

ServiceRow.propTypes = {
  myService: PropTypes.object,
  handleServiceDelete: PropTypes.func,
};

export default ServiceRow;
