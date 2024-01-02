import Image from "next/image";
import CardBenefits from "./CardBenefits";

const ThreeCards = () => {
  return (
    <div className="pt-20 mx-auto max-w-screen-2xl px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-20">
        <CardBenefits />
      <div className="">
        <Image
          src={"/homePage/cards/card-1.png"}
          width={500}
          height={500}
          alt="Download CholtiBank App"
        />
      </div>
    
    </div>
  );
};

export default ThreeCards;
