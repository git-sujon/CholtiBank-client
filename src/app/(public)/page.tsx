import Header from "@/components/Layout/Header/Header";
import CurrencySupport from "@/components/Pages/Home/CurrencySupport/CurrencySupport";
import DownloadApp from "@/components/Pages/Home/DownloadApp/DownloadApp";
import Features from "@/components/Pages/Home/Features/Features";
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
      <Features />
      <DownloadApp />
      <CurrencySupport />
    </>
  );
};

export default HomePage;
