import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import SharedHeader from "../Components/Shared/SharedHeader";
import bannerImg from "../assets/images/bookings/bookingImg.png";
import ServiceRow from "../Components/Booking/ServiceRow";
import SweetAlert2 from "react-sweetalert2";

const Bookings = () => {
  const [swalProps, setSwalProps] = useState({});
  const [myServices, setMyServices] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios(`http://localhost:5000/bookings?email=${user.email}`, {
      withCredentials: true,
    })
      .then((res) => {
        setMyServices(res.data);
      })
      .catch(console.error);
  }, [user]);

  const handleServiceDelete = (id) => {
    axios
      .delete("http://localhost:5000/bookings/delete", {
        data: { id },
      })
      .then((res) => {
        if (res.data.deletedCount > 0) {
          const remainingServices = myServices.filter(
            (service) => service._id !== id
          );
          setMyServices(remainingServices);
          setSwalProps({
            title: "Hurray!",
            text: `Successfully deleted the product`,
            icon: "success",
            show: true,
          });
        }
      })
      .catch(console.error);
  };

  return (
    <div>
      <SharedHeader
        title="My Bookings"
        img={bannerImg}
        breadcrumb="Home/Bookings"
      />
      <div className="my-32">
        {myServices.length ? (
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {myServices.map((myService) => (
                  <ServiceRow
                    handleServiceDelete={handleServiceDelete}
                    key={myService._id}
                    myService={myService}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="text-center text-5xl font-semibold">
            Your cart is currently empty
          </h1>
        )}
      </div>
      <SweetAlert2 {...swalProps} />
    </div>
  );
};

export default Bookings;
