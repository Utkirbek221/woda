import React from "react";
import logo from "../img/LogoHeader.png";
import { SlLocationPin } from "react-icons/sl";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className=" h-[172px] px-[40px] bg-[#FFFFFF] rounded-[16px] m-auto  mt-[60px] mb-[60px] flex items-center justify-between max-lg:h-[149px] max-sm:h-[70px] max-sm:mt-[38px] max-sm:mb-[38px]">
        <div
          className=" h-[92px] flex justify-between items-center w-full"
        >
          <div>
            <img
              className="ml-[44px] max-lg:ml-[90px] 
            max-sm:w-[57px] max-sm:h-[21px] max-sm:ml-[50px]"
              src={logo}
              alt=""
            />
            <div
              className="flex justify-center items-center mt-[25px] text-[#898989] gap-[8px]
            max-sm:gap-[4px] max-sm:mt-[10px]"
            >
              <SlLocationPin className="max-sm:text-[10px]" />
              <p className="max-sm:text-[8px]">
                Ташкент, Алмазар, улица Жамий 5.
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-center  h-[19px] gap-[40px] max-lg:hidden max-sm:hidden">
            <a
              className="text-[#222222] font-[500] whitespace-nowrap"
              href="#about"
            >
              {t("header.link1")}
            </a>
            <a className="text-[#222222] font-[500]" href="#sale">
              {t("header.link2")}
            </a>
            <a className="text-[#222222] font-[500]" href="#clients">
              {t("header.link3")}
            </a>
            <a className="text-[#222222] font-[500]" href="#contacts">
              {t("header.link4")}
            </a>
          </div>
          <div
            className="hidden items-center justify-center h-[19px] gap-[40px]
           max-lg:w-[180px] max-lg:h-[74px] max-lg:grid max-lg:grid-cols-2
          max-sm:flex max-sm:w-[94px] max-sm:h-[36px] max-sm:gap-[20px]"
          >
            <div className="flex-col  ">
              <ul
                className="max-lg:grid max-lg:gap-[30px]
              max-sm:grid max-sm:gap-[10px]"
              >
                <li className="">
                  <a
                    href="#about"
                    className="text-[#222222] whitespace-nowrap font-[500]
              max-lg:text-[14px] max-sm:text-[9px] "
                  >
                    {t("header.link1")}
                  </a>
                </li>
                <li>
                  <a
                    href="#sale"
                    className="text-[#222222] font-[500]
              max-lg:text-[14px] max-lg:mt-[40px]
              max-sm:text-[9px]  "
                  >
                    {t("header.link2")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-col ">
              <ul
                className="max-lg:grid max-lg:gap-[30px]
              max-sm:grid max-sm:gap-[10px]"
              >
                <li>
                  <a
                    href="#clients"
                    className="text-[#222222] font-[500]
              max-lg:text-[14px] max-sm:text-[9px]"
                  >
                    {t("header.link3")}
                  </a>
                </li>
                <li>
                  <a
                    href="#contacts"
                    className="text-[#222222] font-[500]
              max-lg:text-[14px] max-lg:mt-[40px]
              max-sm:text-[9px] max-sm:mt-[16px] "
                  >
                    {t("header.link4")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
