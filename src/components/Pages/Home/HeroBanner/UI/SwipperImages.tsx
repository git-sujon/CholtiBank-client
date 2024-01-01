"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { servicesData } from "@/constants/swiperData";
import Image from "next/image";
import ConvertBidEndTimeToRemainingTime from "@/utils/ConvertTimeToRemainingTime";
import { CiLock } from "react-icons/ci";

const SwiperImages = () => {
  return (
    <div className="mt-10 lg:mt-0 max-w-sm">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="nftSwiper"
      >
        {servicesData.map((services) => (
          <SwiperSlide key={services.id}>
            <div className="relative grid h-full w-full  overflow-hidden rounded-xl bg-clip-border text-secondary">
              <div
                // className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-orange-300 shadow-none`}
                className={`absolute inset-0 m-0  rounded-none bg-transparent  bg-cover bg-clip-border bg-center shadow-none`}
                style={{ backgroundImage: `url(${services.imageUrl})` }}
              ></div>
              <div className="relative   flex flex-col justify-between">
                {/* <div>
                  <h2 className=" block  text-2xl font-bold leading-[1.5]">
                    {services.serviceName}
                  </h2>
                  <h5 className=" block font-semibold text-lg ">
                    {services.tagname}
                  </h5>
                </div>
                <div className="flex justify-center items-center ">
                  <div className="size-32">{services.icon}</div>
                </div> */}
                {/* <div className="flex items-center justify-between mb-2 bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-lg p-2">
                  <div className="flex flex-col gap-y-1">
                    <h6 className="font-bold text-base">Offer End</h6>
                    <div className="flex items-center gap-x-1">
                      <CiLock />
                      <p className="text-xl font-bold">
                        {services.currentBidPrice} 
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1">
                    <h6 className="font-bold text-base">Ends in</h6>
                    <div className="flex items-center gap-x-1">
                      <ConvertBidEndTimeToRemainingTime
                        bidEndTime={services.bidEndTime}
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperImages;
