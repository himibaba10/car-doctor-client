import FeatureCard from "./FeatureCard";
import personImg from "../../assets/icons/group.svg";
import clockImg from "../../assets/icons/Group 38729.svg";
import supportImg from "../../assets/icons/person.svg";
import equipmentImg from "../../assets/icons/Wrench.svg";
import guaranteeImg from "../../assets/icons/check.svg";
import deliveryImg from "../../assets/icons/deliveryt.svg";

const Features = () => {
  return (
    <div className="my-32">
      <div className="text-center">
        <span className="text-primaryColor text-xl font-bold">
          Core Features
        </span>
        <h2 className="my-5 text-[#151515] text-5xl font-bold leading-tight">
          Why Choose Us
        </h2>
        <p className="text-[#737373] leading-7 capitalize max-w-[700px] mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
        <FeatureCard img={personImg} title="Expert Team" />
        <FeatureCard img={clockImg} title="Timely Delivery" />
        <FeatureCard img={supportImg} title="24/7 Support" />
        <FeatureCard img={equipmentImg} title="Best Equipment" />
        <FeatureCard img={guaranteeImg} title="100% Guarantee" />
        <FeatureCard img={deliveryImg} title="Timely Delivery" />
      </div>
    </div>
  );
};

export default Features;
