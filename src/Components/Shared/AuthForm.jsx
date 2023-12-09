import PropTypes from "prop-types";
import authImg from "../../assets/images/login/login.svg";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const AuthForm = ({ objective }) => {
  const { createUser, signInUser, user, setUser, loading } =
    useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (objective === "Sign Up") {
      const name = form.name.value;
      createUser(email, password)
        .then((res) => {
          updateProfile(res.user, {
            displayName: name,
          }).then(() => {
            setUser(res.user);
          });
        })
        .catch((err) => console.error(err));
    } else {
      signInUser(email, password).then((res) => setUser(res.user));
    }
  };

  if (loading) {
    return (
      <span className="loading loading-spinner text-primaryColor w-10 block mx-auto"></span>
    );
  }

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-between flex-col md:flex-row">
      <div className="w-[45%] mt-20">
        <img src={authImg} alt="" />
      </div>
      <div className="w-[50%]">
        <form
          onSubmit={handleFormSubmit}
          className="border-2 rounded-lg p-[75px]"
        >
          <h2 className="text-[#444] text-4xl text-center font-semibold mb-12">
            {objective}
          </h2>
          {objective === "Sign Up" && (
            <label htmlFor="name">
              <span className="text-[#444] text-lg font-semibold mb-2 inline-block">
                Name
              </span>
              <input
                className="w-full border-2 p-3 rounded-md"
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
              />
            </label>
          )}
          <label className="my-5 block" htmlFor="email">
            <span className="text-[#444] text-lg font-semibold mb-2 inline-block">
              Email
            </span>
            <input
              className="w-full border-2 p-3 rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
          </label>
          <label htmlFor="password">
            <span className="text-[#444] text-lg font-semibold mb-2 inline-block">
              Password
            </span>
            <input
              className="w-full border-2 p-3 rounded-md"
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
            />
          </label>
          <input
            className="w-full bg-primaryColor text-white text-xl font-semibold py-4 rounded-lg my-11 cursor-pointer"
            type="submit"
            value={objective}
          />
          <span className="block text-center text-[#444] text-lg font-medium">
            Or {objective} with
          </span>
          <div className="flex justify-center gap-3 text-xl mt-7 mb-12">
            <div className="h-10 aspect-square bg-gray-200 rounded-full flex justify-center items-center">
              <FaFacebookF />
            </div>
            <div className="h-10 aspect-square bg-gray-200 rounded-full flex justify-center items-center">
              <FaLinkedinIn />
            </div>
            <div className="h-10 aspect-square bg-gray-200 rounded-full flex justify-center items-center">
              <FaGoogle />
            </div>
          </div>
          <span className="text-[#737373] text-lg block text-center">
            {objective === "Sign Up"
              ? "Already have an account? "
              : "New to Car Doctor? "}
            <Link
              className="text-primaryColor font-semibold"
              to={`/${objective === "Sign Up" ? "login" : "signup"}`}
            >
              {objective === "Sign Up" ? "Login" : "Sign Up"}
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

AuthForm.propTypes = {
  objective: PropTypes.string,
};

export default AuthForm;
