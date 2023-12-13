import AboutSection from "../Components/Home/AboutSection";
import AdditionalInfo from "../Components/Home/AdditionalInfo";
import Banner from "../Components/Home/Banner";
import Features from "../Components/Home/Features";
import Services from "../Components/Home/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutSection />
      <Services />
      <AdditionalInfo />
      <Features />
    </div>
  );
};

export default Home;
