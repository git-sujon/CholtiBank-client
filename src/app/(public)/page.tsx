import Header from "@/components/Layout/Header/Header";
import HeroBanner from "@/components/Pages/Home/HeroBanner/HeroBanner";
import ManageMoney from "@/components/Pages/Home/ManageMoney/ManageMoney";
import WhyChooseUs from "@/components/Pages/Home/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <WhyChooseUs />
      <ManageMoney />
    </>
  );
};

export default HomePage;
