import aboutimg1 from "../../assets/images/about_us/person.jpg";
import aboutimg2 from "../../assets/images/about_us/parts.jpg";

const AboutSection = () => {
  return (
    <div className="mt-32 flex flex-col md:flex-row">
      <div className="flex-1 relative">
        <img
          className="w-[460px] rounded-lg h-[473px] object-cover object-[30%]"
          src={aboutimg1}
          alt="Person image"
        />
        <img
          className="w-1/2 aspect-square object-cover border-8 border-white rounded-lg absolute right-20 -bottom-10"
          src={aboutimg2}
          alt="Parts image"
        />
      </div>
      <div className="flex-1">
        <div className="max-w-[490px]">
          <span className="text-primaryColor text-xl font-bold">About Us</span>
          <h2 className="mt-5 mb-7 text-[#151515] text-5xl font-bold pr-20 leading-tight">
            We are qualified & of experience in this field
          </h2>
          <p className="text-[#737373] leading-7 capitalize">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.{" "}
          </p>
          <p className="mt-5 mb-7 text-[#737373] leading-7 capitalize">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <button className="btn text-white bg-primaryColor border-none px-6">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
