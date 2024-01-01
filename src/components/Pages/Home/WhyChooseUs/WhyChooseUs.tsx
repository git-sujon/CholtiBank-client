import BestExperience from "./BestExperience";
import ImagePartWhyChooseUs from "./ImagePartWhyChooseUs";

const WhyChooseUs = () => {
  return (
    <div className="pt-20 mx-auto max-w-screen-2xl px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <ImagePartWhyChooseUs />
      <BestExperience />
    </div>
  );
};

export default WhyChooseUs;
