import ImagePart from "./ImagePart";
import TextAndButtonPart from "./TextAndButtonPart";

const HeroBanner = () => {
  return (
    <div
      className=" bg-gradient-to-r from-yellow-100"

      // className="py-16 mx-auto max-w-screen-2xl px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-x-20 bg-[url('/homePage/home-loan.png')]  bg-cover bg-center bg-no-repeat"
    >
      <div className="mx-auto max-w-screen-2xl py-20  px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-x-20">
        <TextAndButtonPart />
        <ImagePart />
      </div>
    </div>
  );
};

export default HeroBanner;
