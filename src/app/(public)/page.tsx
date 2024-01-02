import Header from "@/components/Layout/Header/Header";
import CurrencySupport from "@/components/Pages/Home/CurrencySupport/CurrencySupport";
import DownloadApp from "@/components/Pages/Home/DownloadApp/DownloadApp";
import FAQ from "@/components/Pages/Home/FAQ/FAQ";
import Features from "@/components/Pages/Home/Features/Features";
import HeroBanner from "@/components/Pages/Home/HeroBanner/HeroBanner";
import ManageMoney from "@/components/Pages/Home/ManageMoney/ManageMoney";
import RegisterAccountSteps from "@/components/Pages/Home/RegisterAccountSteps/RegisterAccountSteps";
import ThreeCards from "@/components/Pages/Home/ThreeCards/ThreeCards";
import WhyChooseUs from "@/components/Pages/Home/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <WhyChooseUs />
      <ManageMoney />
      <Features />
      <CurrencySupport />
      <ThreeCards />
      <RegisterAccountSteps />
      <DownloadApp />
      <FAQ />
    </>
  );
};

export default HomePage;
