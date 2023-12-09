import additionalImg1 from "../../assets/icons/calendar.svg";
import additionalImg2 from "../../assets/icons/phone chat.svg";
import additionalImg3 from "../../assets/icons/map.svg";

const AdditionalInfo = () => {
  return (
    <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10 bg-[#151515] rounded-lg py-24 px-[72px] text-white">
      <div className="flex items-center gap-5">
        <img className="h-10 object-contain" src={additionalImg1} />
        <div className="space-y-1">
          <span className="font-medium">We are open monday-friday</span>
          <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img className="h-10 object-contain" src={additionalImg2} />
        <div className="space-y-1">
          <span className="font-medium">Have a question?</span>
          <h3 className="text-2xl font-bold">+2546 251 2658</h3>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <img className="h-10 object-contain" src={additionalImg3} />
        <div className="space-y-1">
          <span className="font-medium">Need a repair? Our address</span>
          <h3 className="text-2xl font-bold">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
