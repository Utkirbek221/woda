import React from "react";
import image from "../img/bgimg2.png";
import { GoArrowUpRight, GoArrowLeft, GoArrowRight } from "react-icons/go";
import chegirma from "../img/Chegirma.png";
import sms from "../img/sms.png";
import internet from "../img/internet.png";
import car from "../img/car.png";
import xalqbank from "../img/XALQ_BANKI-01 1.png";
import OTYY from "../img/OTYY-01 1.png";
import turonbank from "../img/Turon_Bank-01 1.png";
import viva from "../img/6672135 1.png";
import garantbank from "../img/GarantBank-01 1.png";
import birga from "../img/article-original 1.png";
import hokim from "../img/1622674150 1.png";
import { GoArrowUp } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  // const prevRef = React.useRef(null);
  // const nextRef = React.useRef(null);
  const swipstl = "bg-[#FFFFFF]  h-[520px] rounded-[10px] ";
  const swiperData = [
    {
      title: t("swiper.title"),
      titleSpan: t("swiper.titleSpan"),
      texts: t("swiper.texts"),
      image: image,
    },
    {
      title: t("swiper.title"),
      titleSpan: t("swiper.titleSpan"),
      texts: t("swiper.texts"),
      image: image,
    },
  ];
  const imgstl =
    "max-w-[227px] max-h-[115px] max-lg:max-w-[245px] max-lg:max-h-[128px] max-md:max-w-[150px] max-md:max-h-[65px]";
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".prevarrow",
          nextEl: ".nextarrow",
        }}
        // onSwiper={(swiper) => {
        //   swiper.params.navigation.prevEl = prevRef.current;
        //   swiper.params.navigation.nextEl = nextRef.current;
        //   swiper.navigation.init();
        //   swiper.navigation.update();
        // }}
        modules={[Navigation]}
        loop
        className="mySwiper mt-[20px] rounded-[10px] "
      >
        {swiperData.map((data, i) => (
          <SwiperSlide key={i} className={swipstl}>
            <div className="bgimg  px-[60px] py-[85px] max-xl:px-[45px] max-xl:py-[65px] m-auto  rounded-[10px] flex justify-between text-[#FFFFFE] max-lg:px-[24px] max-lg:py-[32px]">
              <div className="relative z-[1] max-w-[590px] max-md:max-w-[100%] max-md:w-[100%] max-xl:max-w-[480px] max-lg:w-[390px]">
                <h1
                  className="text-[48px] leading-[55px] font-[700] max-xl:text-[44px] 
                    max-lg:text-[36px] max-lg:leading-[54px] 
                     max-md:w-[100%]  max-md:leading-[30px] max-md:text-[24px]"
                >
                  {data.title}{" "}
                  <span className="text-[#F1FE5B]">{data.titleSpan}</span>
                </h1>
                <p className="pt-[25px] text-[16px] max-xl:text-[15px]  max-md:pt-[15px] max-md:mb-[250px] max-md:text-[13px] max-lg:w-[370px] max-md:w-[100%]">
                  {data.texts}
                </p>
                <button
                  className="p-[14px_9px] h-[39px] bg-[#FDFDFF] text-[#25539A] flex gap-2 items-center rounded-[8px] mt-[60px] 
                                max-md:w-[100%] max-md:h-[36px] max-md:justify-center"
                >
                  <p>{t("swiper.link")}</p>
                  <span className="text-[22px]">
                    <GoArrowUpRight />
                  </span>
                </button>
              </div>
              <div className=" absolute right-[100px] bottom-0 max-xl:right-[55px] max-lg:right-[10px] max-md:right-0 max-md:left-0 max-md:bottom-[-30px]">
                <img
                  className="w-auto h-[458px] max-xl:h-[420px] max-lg:h-[360px] max-md:mx-auto "
                  src={data.image}
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="m-auto  h-[50px] mt-[40px]  flex justify-center items-center gap-[20px]
             max-sm:h-[24px] max-sm:gap-[10px] max-sm:mt-[20px]"
      >
        <div
          // ref={prevRef}
          className="prevarrow w-[50px] cursor-pointer  h-[50px] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center text-[24px]
                max-sm:w-[24px] max-sm:h-[24px] max-sm:text-[14px] "
        >
          <GoArrowLeft />
        </div>
        <div
          // ref={nextRef}
          className="nextarrow w-[50px] cursor-pointer h-[50px] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center text-[24px]
                max-sm:w-[24px] max-sm:h-[24px] max-sm:text-[14px] "
        >
          <GoArrowRight />
        </div>
      </div>
      <div
        id="about"
        className="grid grid-cols-2 lg:grid-cols-3 md:grid-rows-1 grid-rows-2 gap-[30px] max-lg:gap-[15px] max-sm:gap-[9px] mt-[60px] max-lg:mt-[40px] max-sm:mt-[32px]  "
      >
        <div className="p-[38px] max-md:p-[14px]  max-lg:p-[20px] col-span-2 md:col-span-1 bg-[#FFFFFF] rounded-[16px] ">
          <p
            className="text-[#828282] text-[16px] font-[600] 
                        max-sm:text-[12px]"
          >
            {t("about.tex")}
          </p>
          <h1 className="text-[28px] mt-[10px] max-sm:text-[18px] max-sm:leading-[20px]">
            WODA – {t("about.text")}
          </h1>
          <p
            className="text-[#434343] font-[400] text-[14px] mt-[40px] 
                        max-sm:text-[13px] max-sm:mt-[14px]"
          >
            {t("about.texts")}
          </p>
          <p
            className="text-[#434343] font-[400] text-[14px] mt-[40px] 
                        max-sm:text-[13px] max-sm:mt-[12px]"
          >
            {t("about.texts2")}
          </p>
          <button
            className="w-[168px] h-[39px] rounded-[8px] gap-[6px] flex justify-center items-center mt-[100px] border-[1px] border-[#E0E0E0]
                        max-sm:mt-[40px]"
          >
            <p>{t("about.texts3")}</p>
            <span>
              <GoArrowUpRight />
            </span>
          </button>
        </div>
        <div className="flex flex-col flex-grow gap-[30px] max-lg:gap-[15px] max-sm:gap-[9px] ">
          <div className=" max-sm:gap-y-0 gap-y-4 flex-1  bg-[#FFFFFF] rounded-[16px]  max-lg:p-[20px] max-md:p-[14px] p-[30px] flex flex-col ">
            <div
              className="text-[#FFFFFF] w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex items-center justify-center text-[35px]
                            max-sm:w-[41px] max-sm:h-[41px] "
            >
              <img
                src={chegirma}
                alt=""
                className="max-sm:w-[23px] max-sm:h-[23px]"
              />
            </div>
            <p className="text-[24px] mt-auto max-sm:text-[16px]">
              {t("about.texts4")}
            </p>
          </div>
          <div
            className=" max-sm:gap-y-0 gap-y-4 flex-1  bg-[#FFFFFF] rounded-[16px]  max-lg:p-[20px] max-md:p-[14px] p-[30px]  flex flex-col
                     max-sm:mt-[0px] "
          >
            <div
              className="text-[#FFFFFF] w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex items-center justify-center text-[35px]
                            max-sm:w-[41px] max-sm:h-[41px] "
            >
              <img
                src={internet}
                alt=""
                className="max-sm:w-[23px] max-sm:h-[23px]"
              />
            </div>
            <p className="text-[24px] mt-auto max-sm:text-[16px]  max-sm:leading-[21px] ">
              {t("about.texts5")}
            </p>
          </div>
        </div>
        <div className="flex md:col-span-2 lg:col-span-1 lg:flex-col flex-col md:flex-row gap-[30px] max-lg:gap-[15px] max-sm:gap-[9px] ">
          <div className="max-sm:gap-y-0 gap-y-4 flex-1  bg-[#FFFFFF] rounded-[16px]  max-lg:p-[20px] max-md:p-[14px] p-[30px] flex flex-col ">
            <div
              className="text-[#FFFFFF] w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex items-center justify-center text-[35px]
                            max-sm:w-[41px] max-sm:h-[41px]"
            >
              <img
                src={sms}
                alt=""
                className="max-sm:w-[23px] max-sm:h-[23px] "
              />
            </div>
            <p className="text-[24px] mt-auto max-sm:text-[16px] max-sm:leading-[1.2] ">
              {t("about.texts6")}
            </p>
          </div>
          <div
            className="max-sm:gap-y-0 gap-y-4 flex-1  bg-[#FFFFFF] rounded-[16px]  max-lg:p-[20px] max-md:p-[14px] p-[30px] flex flex-col
                     max-sm:mt-[0px]  "
          >
            <div
              className="text-[#FFFFFF] w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex items-center justify-center text-[35px]
                            max-sm:w-[41px] max-sm:h-[41px] "
            >
              <img
                src={car}
                alt=""
                className="max-sm:w-[23px] max-sm:h-[23px]"
              />
            </div>
            <p className="text-[24px] mt-auto max-sm:text-[16px] max-sm:leading-[21px] max-lg:mt-[80px] max-md:mt-auto">
              {t("about.texts7")}
            </p>
          </div>
        </div>
      </div>
      <div className="m-auto mt-[50px] text-[#FFFFFF]">
        <div className="bg-[#0E2A75] rounded-[16px] flex justify-center items-center ">
          <div className="w-full flex justify-between items-center m-[40px] max-lg:m-[32px_20px] gap-[24px] max-md:gap-[16px] max-md:m-[18px_14px] max-sm:m-[18px_14px]">
            <h1
              className="text-[38px] md:whitespace-nowrap
                        max-lg:text-[32px]
                        max-md:text-[18px]
                        max-sm:text-[18px]"
            >
              {t("about.text2")}
            </h1>
            <div className="w-[50%] border-[1px] border-[#E4E4E4] flex-grow "></div>
            <p
              className="text-[18px] md:whitespace-nowrap
                        max-lg:text-[16px]
                        max-md:text-[10px]
                        max-sm:text-[10px] "
            >
              {t("about.texts8")}
            </p>
          </div>
        </div>
        <div className="mt-[24px] flex justify-center items-center bg-white rounded-[16px]">
          <div className="flex justify-center items-center flex-wrap gap-[20px] m-[55px_36px] max-lg:m-[43px_28px] max-sm:m-[10px_7px]">
            <img
              className={`${imgstl} max-md:max-w-[125px]`}
              src={xalqbank}
              alt=""
            />
            <img
              className={`${imgstl} max-md:max-h-[50px]`}
              src={OTYY}
              alt=""
            />
            <img
              className={`${imgstl} max-md:max-w-[100px] max-md:max-h-[45px]`}
              src={turonbank}
              alt=""
            />
            <img
              className={`${imgstl} max-md:max-w-[50px] max-md:max-h-[45px]`}
              src={viva}
              alt=""
            />
            <img
              className={`${imgstl} max-md:max-w-[100px] max-md:max-h-[45px]`}
              src={garantbank}
              alt=""
            />
            <img
              className={`${imgstl} max-md:max-w-[80px] max-md:max-h-[30px]`}
              src={birga}
              alt=""
            />
            <img
              className={`${imgstl} max-md:max-w-[110px] max-md:max-h-[35px]`}
              src={hokim}
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="bgimg2 h-[450px]  m-auto mt-[60px] max-lg:mt-[40px] bg-[#FFFFFF] rounded-[10px]
             max-lg:h-[397px]
             max-sm:h-[242px] relative"
      >
        <h1
          className="text-[36px] text-[#FFFFFF] absolute bottom-4 left-9
                max-sm:text-[16px] max-sm:bottom-3 max-sm:left-5 max-w-[572px] max-md:max-w-[380px] max-md:text-[25px] max-sm:max-w-[50%]"
        >
          {t("about.text3")}
        </h1>
      </div>
      <div className="bg-[#0E2A75] rounded-[16px] m-auto mt-[50px] text-[#FFFFFF] flex justify-center items-center ">
        <div className="w-full m-auto justify-center items-center gap-[56px] max-sm:flex-col p-[38px] max-sm:p-[14px_14px_24px_14px] grid grid-cols-2 max-md:grid-cols-1 ">
          <div className="">
            <div
              className="flex justify-between items-center text-[18px] border-b-2 border-[#FFFFFF] pb-[16px]
                                max-lg:text-[14px]
                                max-sm:text-[12px]"
            >
              <p>{t("about.texts9")}</p>
              <p>{t("about.texts10")}</p>
            </div>
            <div className="flex justify-between items-center mt-[56px] max-lg:mt-[27px] max-sm:mt-[20px]">
              <p
                className="text-[64px] font-[600] 
                                max-lg:text-[44px]
                                max-md:text-[32px]
                                max-sm:text-[32px]"
              >
                12000L +
              </p>
              <p className="flex justify-center items-center gap-1 text-[30px] max-sm:text-[20px]">
                <span>
                  <GoArrowUp />
                </span>
                26%
              </p>
            </div>
          </div>
          <div className=" ">
            <div
              className="flex justify-between items-center text-[18px] border-b-2 border-[#FFFFFF] pb-[16px]
                                max-lg:text-[14px]
                                max-sm:text-[12px]"
            >
              <p>{t("about.texts9")}</p>
              <p>{t("about.texts10")}</p>
            </div>
            <div className="flex justify-between items-center mt-[56px] max-lg:mt-[27px] max-sm:mt-[20px]">
              <p
                className="text-[64px] font-[600] 
                                max-lg:text-[44px]
                                max-md:text-[38px]
                                max-sm:text-[32px]"
              >
                120 +
              </p>
              <p className="flex justify-center items-center gap-1 text-[30px] max-sm:text-[20px]">
                <span>
                  <GoArrowUp />
                </span>
                28%
              </p>
            </div>
          </div>
          <div className=" ">
            <div
              className="flex justify-between items-center text-[18px] border-b-2 border-[#FFFFFF] pb-[16px]
                                max-lg:text-[14px]
                                
                                max-sm:text-[12px]"
            >
              <p>{t("about.texts9")}</p>
              <p>{t("about.texts10")}</p>
            </div>
            <div className="flex justify-between items-center mt-[56px] max-lg:mt-[27px]  max-sm:mt-[20px]">
              <p
                className="text-[64px] font-[600] 
                                max-lg:text-[44px]
                                max-md:text-[32px]
                                max-sm:text-[32px]"
              >
                120 +
              </p>
              <p className="flex justify-center items-center gap-1 text-[30px] max-sm:text-[20px]">
                <span>
                  <GoArrowUp />
                </span>
                10%
              </p>
            </div>
          </div>
          <div className=" ">
            <div
              className="flex justify-between items-center text-[18px] border-b-2 border-[#FFFFFF] pb-[16px]
                                max-lg:text-[14px]
                                max-sm:text-[12px]"
            >
              <p>{t("about.texts9")}</p>
              <p>{t("about.texts10")}</p>
            </div>
            <div className="flex justify-between items-center mt-[56px] max-lg:mt-[27px]  max-sm:mt-[20px]">
              <p
                className="text-[64px] font-[600] 
                                max-lg:text-[44px]
                                max-md:text-[32px]
                                max-sm:text-[32px]"
              >
                6000 +
              </p>
              <p className="flex justify-center items-center gap-1 text-[30px] max-sm:text-[20px]">
                <span>
                  <GoArrowUp />
                </span>
                10%
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
