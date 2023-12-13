import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import SharedHeader from "../Components/Shared/SharedHeader";
import bannerImg from "../assets/images/banner/4.jpg";

const Bookings = () => {
  const [myServices, setMyServices] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios(`http://localhost:5000/bookings?email=${user.email}`).then((res) =>
      setMyServices(res.data)
    );
  }, [user]);
  return (
    <div>
      <SharedHeader
        title="Service Details"
        img={bannerImg}
        breadcrumb="Home/Checkout"
      />
      <h1>This is bookings page: {myServices.length}</h1>
    </div>
  );
};

export default Bookings;
