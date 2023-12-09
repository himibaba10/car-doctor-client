import banner1 from "../../assets/images/banner/1.jpg";
import banner2 from "../../assets/images/banner/2.jpg";
import banner3 from "../../assets/images/banner/3.jpg";
import banner4 from "../../assets/images/banner/4.jpg";
import banner5 from "../../assets/images/banner/5.jpg";
import banner6 from "../../assets/images/banner/6.jpg";
import SingleBanner from "./SingleBanner";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <SingleBanner
        bannerId="slide1"
        bannerImg={banner1}
        prevSlide="slide6"
        nextSlide="slide2"
      />
      <SingleBanner
        bannerId="slide2"
        bannerImg={banner2}
        prevSlide="slide1"
        nextSlide="slide3"
      />
      <SingleBanner
        bannerId="slide3"
        bannerImg={banner3}
        prevSlide="slide2"
        nextSlide="slide4"
      />
      <SingleBanner
        bannerId="slide4"
        bannerImg={banner4}
        prevSlide="slide3"
        nextSlide="slide5"
      />
      <SingleBanner
        bannerId="slide5"
        bannerImg={banner5}
        prevSlide="slide4"
        nextSlide="slide6"
      />
      <SingleBanner
        bannerId="slide6"
        bannerImg={banner6}
        prevSlide="slide5"
        nextSlide="slide1"
      />
    </div>
  );
};

export default Banner;
