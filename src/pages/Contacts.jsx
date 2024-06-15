import React from "react";
import hendset from "../img/headset.png";
import payment from "../img/payment.png";
import document from "../img/document.png";
import car2 from "../img/car2.png";
import { GoArrowUpRight } from "react-icons/go";
import { TbBrandTelegram } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaTruckFast } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

export default function Contacts() {
  const { t } = useTranslation();
  return (
    <>
      <div
        id="contacts"
        className="bg-[#FFFFFF] mt-[60px] rounded-[16px] flex justify-between items-center 
            max-lg:mt-[40px] max-sm:mt-[32px] p-[40px] max-lg:p-[32px_20px] max-md:p-[32px_20px] max-sm:p-[16px_14px] gap-[24px]"
      >
        <h1 className="text-[38px] font-[600] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[18px]">
          {" "}
          {t("contacts.text")}
        </h1>
        <div className="border-[1px] border-[#E4E4E4] w-[35%] "></div>
        <p className="text-[18px] text-[#222222] max-lg:text-[16px] max-sm:text-[10px]">
          {t("contacts.texts")}
        </p>
      </div>
      <div className="mt-[24px] max-lg:mt-[16px] grid grid-cols-4 grid-rows-1 max-lg:grid-cols-2 gap-[20px] max-lg:gap-[15px] max-sm:gap-[9px] max-sm:mt-[16px]">
        <div className="rounded-[16px] bg-[#FFFFFF] flex flex-col justify-center items-center p-[30px_20px_50px_20px] max-sm:p-[14px_14px_15px_15px]">
          <div
            className="w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex justify-center items-center
                    max-sm:w-[36px] max-sm:h-[36px]"
          >
            <img
              className="max-sm:w-[20px] max-sm:h-[20px]"
              src={hendset}
              alt=""
            />
          </div>
          <p
            className=" text-center mt-[40px] text-[23px] font-[600] leading-[38px]
                    max-sm:text-[12px] max-sm:leading-[12px] max-sm:w-[143px]"
          >
            {t("contacts.texts2")}
          </p>
        </div>
        <div className="rounded-[16px] bg-[#FFFFFF] flex flex-col justify-center items-center p-[30px_20px_50px_20px] max-sm:p-[14px_14px_15px_15px]">
          <div
            className="w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex justify-center items-center
                    max-sm:w-[36px] max-sm:h-[36px]"
          >
            <img
              className="max-sm:w-[20px] max-sm:h-[20px]"
              src={document}
              alt=""
            />
          </div>
          <p
            className=" text-center mt-[40px] text-[23px] font-[600] leading-[38px]
                    max-sm:text-[12px] max-sm:leading-[12px] max-sm:w-[143px]"
          >
            {t("contacts.texts3")}
          </p>
        </div>
        <div className="rounded-[16px] bg-[#FFFFFF] flex flex-col justify-center items-center p-[30px_20px_50px_20px] max-sm:p-[14px_14px_15px_15px]">
          <div
            className="w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex justify-center items-center
                    max-sm:w-[36px] max-sm:h-[36px] "
          >
            <img
              className="max-sm:w-[20px] max-sm:h-[20px]"
              src={car2}
              alt=""
            />
          </div>
          <p
            className=" text-center mt-[40px] text-[23px] font-[600] leading-[38px]
                    max-sm:text-[12px] max-sm:leading-[12px] max-sm:w-[143px]"
          >
            {t("contacts.texts4")}
          </p>
        </div>
        <div className="rounded-[16px] bg-[#FFFFFF] flex flex-col justify-center items-center p-[30px_20px_50px_20px] max-sm:p-[14px_14px_15px_15px] ">
          <div
            className="w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex justify-center items-center
                    max-sm:w-[36px] max-sm:h-[36px] "
          >
            <img
              className="max-sm:w-[20px] max-sm:h-[20px]"
              src={payment}
              alt=""
            />
          </div>
          <p
            className=" text-center mt-[40px] text-[23px] font-[600] leading-[38px]
                    max-sm:text-[12px] max-sm:leading-[12px] max-sm:w-[143px]"
          >
            {t("contacts.texts5")}
          </p>
        </div>
      </div>
      <div className="m-auto mt-[60px] flex justify-end p-[50px] max-lg:px-[30px] max-md:p-[20px] bgimg5 rounded-[16px] relative max-lg:mt-[40px] max-sm:mt-[32px]">
        <div className="bg-[#FFFFFF] rounded-[16px] h-full flex flex-col p-[40px] max-md:p-[20px] max-md:w-full mt-[100px]">
          <h1
            className="text-[28px] font-[600]
                        max-md:text-[16px]"
          >
            {t("contacts.text2")}
          </h1>
          <p
            className="text-[16px] max-w-[360px] text-[#222222] font-[400] leading-[24px] mt-[6px] mb-[24px] 
                        max-md:text-[12px] max-md:leading-[18px] max-md:mt-[10px] max-md:mb-[20px]"
          >
            {t("contacts.texts6")}
          </p>
          <div
            className="w-[360px] border-[1px] border-[#E4E4E4]
                        max-md:hidden"
          ></div>
          <h5
            className="font-[400] text-[12px] leading-[14px] mt-[32px] mb-[8px]
                        max-md:text-[10px]  max-md:mt-[0px]"
          >
            {t("contacts.text3")}
          </h5>
          <input
            type="email"
            className="bg-[#F9F9F9]  p-[10px] rounded-[8px] outline-none"
          />
          <h5
            className="font-[400] text-[12px] leading-[14px] mt-[18px] mb-[8px]
                        max-md:text-[10px] "
          >
            {t("contacts.text4")}
          </h5>
          <input
            type="number"
            className="bg-[#F9F9F9] p-[10px] rounded-[8px] outline-none"
          />
          <button className="w-full h-[39px] bg-[#0E2A75] text-[#FFFFFF] rounded-[8px] mt-[40px] flex justify-center items-center gap-[6px] max-md:mt-[30px]">
            {t("contacts.text5")}
            <GoArrowUpRight className="text-[20px]" />
          </button>
        </div>
      </div>

      <div className=" mt-[24px] grid grid-cols-[1fr_.7fr] max-lg:grid-cols-[1fr] gap-[20px] relative">
        <div className="bg-[#FFFFFF] flex-[1] max-lg:order-1 rounded-[16px] flex justify-center items-center max-lg:border max-sm:bottom-0 py-[38px] px-[64px] max-xl:px-[50px] max-xl:py-[30px] max-lg:py-[38px] max-lg:px-[20px]">
          <div className="">
            <p
              className="text-[#828282] text-[16px] font-[600]
                        max-lg:text-[12px]"
            >
              {t("contacts.texts7")}
            </p>
            <h1
              className="text-[28px] max-xl:text-[24px] font-[600] mt-[10px] mb-[24px]
                        max-sm:text-[16px] max-sm:mb-[20px]"
            >
              {t("contacts.texts8")}
            </h1>
            <p
              className="mb-[88px] text-[14px] font-[400] leading-[26px] text-[#434343]
                        max-sm:text-[10px] max-sm:leading-[15px] max-sm:mb-[32px]"
            >
              {t("contacts.texts9")}
            </p>
            <div
              className="grid grid-cols-2 gap-[30px] 
                        max-lg:gap-[20px_180px] 
                        max-md:grid-cols-1 max-md:gap-[26px]"
            >
              <div className="flex items-start ">
                <div
                  className="min-w-[49px] text-[#FFFFFF] text-[23px] flex justify-center items-center aspect-square bg-[#0E2A75] rounded-[50%] mr-[12px] 
                                max-sm:w-[38px]"
                >
                  <SlLocationPin />
                </div>
                <div
                  className="grid gap-[8px]
                                max-sm:gap-[6px]"
                >
                  <h1
                    className="text-[16px] font-[600] leading-[19px]
                                    max-sm:text-[12px]"
                  >
                    {t("contacts.text6")}
                  </h1>
                  <p
                    className="text-[#434343] text-[14px] font-[400] leading-[16px] 
                                    max-sm:text-[10px]"
                  >
                    {t("contacts.texts11")}
                  </p>
                </div>
              </div>
              <div className="flex items-start ">
                <div
                  className="min-w-[49px] text-[#FFFFFF] text-[23px] flex justify-center items-center aspect-square bg-[#0E2A75] rounded-[50%] mr-[12px]
                                max-sm:w-[38px]"
                >
                  <FaRegClock />
                </div>
                <div
                  className="grid gap-[8px]
                                max-sm:gap-[6px]"
                >
                  <h1
                    className="text-[16px] font-[600] leading-[19px]
                                    max-sm:text-[12px]"
                  >
                    {t("contacts.text7")}
                  </h1>
                  <p
                    className="text-[#434343] text-[14px] font-[400] leading-[16px] 
                                    max-sm:text-[10px]"
                  >
                    {t("contacts.texts12")}
                  </p>
                </div>
              </div>
              <div className="flex items-start ">
                <div
                  className="min-w-[49px] text-[#FFFFFF] text-[23px] flex justify-center items-center aspect-square bg-[#0E2A75] rounded-[50%] mr-[12px]
                                max-sm:w-[38px]"
                >
                  <HiOutlineEnvelope />
                </div>
                <div
                  className="grid gap-[8px]
                                max-sm:gap-[6px]"
                >
                  <h1
                    className="text-[16px] font-[600] leading-[19px]
                                    max-sm:text-[12px]"
                  >
                    {t("contacts.text8")}
                  </h1>
                  <p
                    className="text-[#434343] text-[14px] font-[400] leading-[16px] 
                                    max-sm:text-[10px]"
                  >
                    wodawater@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start ">
                <div
                  className="min-w-[49px] text-[#FFFFFF] text-[23px] flex justify-center items-center aspect-square bg-[#0E2A75] rounded-[50%] mr-[12px]
                                max-sm:w-[38px]"
                >
                  <FaTruckFast />
                </div>
                <div
                  className="grid gap-[8px]
                                max-sm:gap-[6px]"
                >
                  <h1
                    className="text-[16px] font-[600] leading-[19px]
                                    max-sm:text-[12px]"
                  >
                    {t("contacts.text9")}
                  </h1>
                  <p
                    className="text-[#434343] text-[14px] font-[400] leading-[16px] 
                                    max-sm:text-[10px]"
                  >
                    {t("contacts.text10")}: 8:00 - 22:00
                  </p>
                </div>
              </div>
              <div className="flex items-start ">
                <div
                  className="min-w-[49px] text-[#FFFFFF] text-[23px] flex justify-center items-center aspect-square bg-[#0E2A75] rounded-[50%] mr-[12px]
                                max-sm:w-[38px]"
                >
                  <FaHeadset />
                </div>
                <div
                  className="grid gap-[8px]
                                max-sm:gap-[6px]"
                >
                  <h1
                    className="text-[16px] font-[600] leading-[19px]
                                    max-sm:text-[12px]"
                  >
                    {t("contacts.text11")}
                  </h1>
                  <p
                    className="text-[#434343] text-[14px] font-[400] leading-[16px] 
                                    max-sm:text-[10px]"
                  >
                    +998 (95) 420-00-09
                  </p>
                </div>
              </div>
              <div className="flex items-start ">
                <div
                  className="min-w-[49px] text-[#FFFFFF] text-[23px] flex justify-center items-center aspect-square bg-[#0E2A75] rounded-[50%] mr-[12px]
                                max-sm:w-[38px]"
                >
                  <HiOutlineUserGroup />
                </div>
                <div
                  className="grid gap-[8px]
                                max-sm:gap-[6px]"
                >
                  <h1
                    className="text-[16px] font-[600] leading-[19px]
                                    max-sm:text-[12px]"
                  >
                    {t("contacts.text12")}
                  </h1>
                  <p
                    className="flex gap-[10px] text-[#434343]
                                    max-sm:text-[18px] max-sm:gap-[14px]"
                  >
                    <TbBrandTelegram />
                    <SlSocialInstagram />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-[#FFFFFF] flex-[1] rounded-[16px] max-lg:aspect-[5/2] overflow-hidden flex h-full w-full">
          <iframe
            title="This is a unique title"
            className="h-full w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=41.301675143661,69.21912855221122&hl=uz&z=17&output=embed`}
          ></iframe>
        </div>
      </div>
    </>
  );
}
