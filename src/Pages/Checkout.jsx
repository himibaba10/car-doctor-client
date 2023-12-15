import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import SharedHeader from "../Components/Shared/SharedHeader";
import bannerImg from "../assets/images/banner/4.jpg";
import axios from "axios";
import SweetAlert2 from "react-sweetalert2";

const Checkout = () => {
  const [swalProps, setSwalProps] = useState({});
  const { user } = useContext(AuthContext);
  const { title, img, price } = useLoaderData();

  const handleCheckoutForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const fullName = form.firstName.value + " " + form.lastName.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const bookingDetail = {
      name: fullName,
      email: user.email,
      phone,
      message,
      product: title,
      img,
      price,
      status: "Pending",
    };

    axios
      .post("http://localhost:5000/bookings", bookingDetail)
      .then((res) => {
        if (res.data.insertedId) {
          setSwalProps({
            title: "Hurray!",
            text: `You ordered ${title}!`,
            icon: "success",
            show: true,
          });
          form.reset();
        }
      })
      .catch(console.error);
  };

  return (
    <div>
      <SharedHeader
        title="Service Details"
        img={bannerImg}
        breadcrumb="Home/Checkout"
      />
      <h1 className="my-14 text-5xl text-center font-bold">
        Checkout for <span className="text-primaryColor">{title}</span>
      </h1>
      <form
        onSubmit={handleCheckoutForm}
        className="mb-32 p-24 bg-[#F3F3F3] grid grid-cols-2 gap-6 rounded-lg"
      >
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          defaultValue={user.email}
          className="input input-bordered w-full disabled:bg-white"
          disabled
        />
        <textarea
          className="textarea textarea-bordered col-span-2 min-h-[250px] resize-none"
          name="message"
          placeholder="Your message"
        ></textarea>
        <input
          className="bg-primaryColor col-span-2 text-white py-3.5 rounded font-medium cursor-pointer"
          type="submit"
          value="Order Confirm"
        />
      </form>
      <SweetAlert2 {...swalProps} />
    </div>
  );
};

export default Checkout;
