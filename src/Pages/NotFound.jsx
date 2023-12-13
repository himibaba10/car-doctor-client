import Header from "../Components/Shared/Header";
import notFoundImg from "../assets/images/notFound/notFound.png";

const NotFound = () => {
  return (
    <div>
      <Header />
      <img className="max-w-full mx-auto" src={notFoundImg} />
    </div>
  );
};

export default NotFound;
