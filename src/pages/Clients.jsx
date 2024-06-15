import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaQuoteLeft } from "react-icons/fa";
import imgavatar from "../img/avatar.png";
import { useTranslation } from "react-i18next";

export default function Clients() {
  const { t } = useTranslation();
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  const swipstl = "bg-[#FFFFFF]  rounded-[10px] ";
  const swiperData = [
    {
      img: imgavatar,
      title: t("swiperCustomer.title"),
      title2: t("swiperCustomer.titleSpan"),
      text: t("swiperCustomer.texts"),
    },
    {
      img: imgavatar,
      title: t("swiperCustomer.title"),
      title2: t("swiperCustomer.titleSpan"),
      text: t("swiperCustomer.texts"),
    },
    {
      img: imgavatar,
      title: t("swiperCustomer.title"),
      title2: t("swiperCustomer.titleSpan"),
      text: t("swiperCustomer.texts"),
    },
    {
      img: imgavatar,
      title: t("swiperCustomer.title"),
      title2: t("swiperCustomer.titleSpan"),
      text: t("swiperCustomer.texts"),
    },
  ];
  return (
    <>
      <div
        id="clients"
        className="bg-[#FFFFFF] mt-[60px] rounded-[16px] flex justify-between items-center 
            max-lg:mt-[40px] max-sm:mt-[32px] p-[40px] max-lg:p-[32px_20px] max-md:p-[32px_20px] max-sm:p-[16px_14px] gap-[24px] max-md:gap-[16px]"
      >
        <h1 className="text-[38px] lg:whitespace-nowrap font-[600] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[18px] ">
          {t("clients.text")}
        </h1>
        <div className="border-[1px] border-[#E4E4E4] w-[35%] fleg-grow"></div>
        <p className="text-[18px] md:whitespace-nowrap text-[#222222] max-lg:text-[16px] max-sm:text-[10px] ">
          {t("clients.texts")}
        </p>
      </div>
      <div className="mt-[24px] ">
        <Swiper
          slidesPerView={"auto"}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".prevArrow",
            nextEl: ".nextArrow",
          }}
          modules={[Navigation]}
          loop
          className="mySwiper"
        >
          {swiperData.map((data, i) => (
            <SwiperSlide key={i} className={swipstl}>
              <div className="p-[24px_24px_48px_24px]  flex flex-col justify-between items-center">
                <div
                  className="w-full flex justify-between items-center 
                            "
                >
                  <div className="rounded-[50%] overflow-hidden">
                    <img src={data.img} alt="" />
                  </div>
                  <div>
                    <h1 className="text-[16px] font-[600]">{data.title}</h1>
                    <p className="text-[12px] text-[#898989]">{data.title2}</p>
                  </div>
                  <div className="text-[#181F77] text-[34px] max-sm:text-[28px]">
                    <FaQuoteLeft />
                  </div>
                </div>
                <p
                  className="text-[12px] leading-[20px] mt-[28px] 
                             max-sm:mt-[18px] max-sm:text-[11px]"
                >
                  {data.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className="m-auto  h-[50px] mt-[40px] flex justify-center items-center gap-[20px] 
                 max-sm:h-[24px] max-sm:gap-[10px] max-sm:mt-[20px]"
      >
        <div className="prevArrow w-[50px] h-[50px] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center text-[24px]
                max-sm:w-[24px] max-sm:h-[24px] max-sm:text-[14px] cursor-pointer "
        >
          <GoArrowLeft />
        </div>
        <div className="nextArrow w-[50px] h-[50px] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center text-[24px]
                max-sm:w-[24px] max-sm:h-[24px] max-sm:text-[14px] cursor-pointer "
        >
          <GoArrowRight />
        </div>
      </div>
      <div
        className="bgimg4  h-[450px] m-auto mt-[60px] max-lg:mt-[40px] max-sm:mt-[32px] relative rounded-[10px]
             max-lg:h-[397px]
             max-sm:h-[242px] "
      >
        <h1
          className="w-[625px] font-[600] text-[36px] leading-[50px] text-[#FFFFFF] absolute bottom-[30px] left-[30px]
                max-lg:bottom-[20px] max-lg:left-[20px]
                max-sm:w-[278px]  max-sm:bottom-[20px] max-sm:left-[14px] max-sm:text-[16px] max-sm:leading-[19px]"
        >
          {t("clients.text2")}
        </h1>
      </div>
    </>
  );
}
