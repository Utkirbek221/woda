import React from 'react'
import hendset from "../img/headset.png"
import payment from "../img/payment.png"
import document from "../img/document.png"
import car2 from "../img/car2.png"
import { GoArrowUpRight } from "react-icons/go";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { TbBrandTelegram } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaTruckFast } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi2";


export default function Contacts() {
    return (
        <>
            <div id='contacts' className='w-[1320px] h-[126px] m-auto bg-[#FFFFFF] rounded-[16px] flex justify-evenly items-center mt-[60px]
        max-lg:w-[774px] max-lg:h-[142px] max-lg:mt-[40px]
        max-sm:w-[363px] max-sm:h-[76px] max-sm:mt-[32px]'>
                <div className='max-lg:w-[734px] flex justify-betwen items-center
                max-sm:w-[335px]'>

                    <h1 className='text-[38px] leading-[46px] font-[600]
            max-lg:text-[32px] max-lg:leading-[38px]
            max-sm:text-[18px] max-sm:leading-[21px]'>Наша поэтапная работа</h1>
                    <div className='w-[583px] border-[1px] border-[#E4E4E4]
            max-lg:w-[278px]
            max-sm:w-[108px]'></div>
                    <p className='text-[18px] font-[400] text-[#222222]
            max-lg:text-[16px]
            max-sm:text-[10px] max-sm:leading-[12px] max-lg:ml-[20px] '>Состоит из 4 этапов</p>
                </div>
            </div>
            <div className='w-[1320px] h-[299px] m-auto mt-[24px] flex justify-between items-center flex-wrap
        max-lg:w-[774px] max-lg:h-[581px] max-lg:mt-[10px] 
        max-sm:w-[363px] max-sm:h-[302px] max-sm:mt-[10px]'>
                <div className='w-[315px] h-[299px] rounded-[16px] bg-[#FFFFFF] flex flex-col justify-center items-center
                max-lg:w-[380px] max-lg:h-[283px]
                max-sm:w-[177px] max-sm:h-[147px] '>
                    <div className='w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex justify-center items-center
                    max-sm:w-[36px] max-sm:h-[36px]'>
                        <img className='max-sm:w-[20px] max-sm:h-[20px]' src={hendset} alt="" />
                    </div>
                    <p className='w-[232px] text-center mt-[40px] text-[23px] font-[600] leading-[38px]
                    max-sm:text-[12px] max-sm:leading-[12px] max-sm:w-[143px]'>
                        Принимается заявка через звонок или телеграм
                    </p>
                </div>
                <div className='w-[315px] h-[299px] rounded-[16px] bg-[#FFFFFF] flex flex-col justify-center items-center
                max-lg:w-[380px] max-lg:h-[283px]
                max-sm:w-[177px] max-sm:h-[147px] '>
                    <div className='w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex justify-center items-center
                    max-sm:w-[36px] max-sm:h-[36px]'>
                        <img className='max-sm:w-[20px] max-sm:h-[20px]' src={document} alt="" />
                    </div>
                    <p className='w-[232px] text-center mt-[40px] text-[23px] font-[600] leading-[38px]
                    max-sm:text-[12px] max-sm:leading-[12px] max-sm:w-[143px]'>
                        Заявка добавляется в общую таблицу доставок
                    </p>
                </div>
                <div className='w-[315px] h-[299px] rounded-[16px] bg-[#FFFFFF] flex flex-col justify-center items-center 
                max-lg:w-[380px] max-lg:h-[283px] max-lg:mt-[8px]
                max-sm:w-[177px] max-sm:h-[147px] max-sm:mt-[8px]'>
                    <div className='w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex justify-center items-center
                    max-sm:w-[36px] max-sm:h-[36px] '>
                        <img className='max-sm:w-[20px] max-sm:h-[20px]' src={car2} alt="" />
                    </div>
                    <p className='w-[232px] text-center mt-[40px] text-[23px] font-[600] leading-[38px]
                    max-sm:text-[12px] max-sm:leading-[12px] max-sm:w-[143px]'>
                        Наш курьер доставляет водув течении 24 часов
                    </p>
                </div>
                <div className='w-[315px] h-[299px] rounded-[16px] bg-[#FFFFFF] flex flex-col justify-center items-center 
                max-lg:w-[380px] max-lg:h-[283px] max-lg:mt-[8px]
                max-sm:w-[177px] max-sm:h-[147px]  max-sm:mt-[8px]'>
                    <div className='w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex justify-center items-center
                    max-sm:w-[36px] max-sm:h-[36px] '>
                        <img className='max-sm:w-[20px] max-sm:h-[20px]' src={payment} alt="" />
                    </div>
                    <p className='w-[232px] text-center mt-[40px] text-[23px] font-[600] leading-[38px]
                    max-sm:text-[12px] max-sm:leading-[12px] max-sm:w-[143px]'>
                        При получении капсулы, оплачиваете картой или наличными
                    </p>
                </div>
            </div>
            <div className='w-[1320px] h-[573px] m-auto mt-[60px] flex bgimg5 rounded-[16px] relative
            max-lg:w-[774px] max-lg:h-[573px] max-lg:mt-[40px]
            max-sm:w-[363px] max-sm:h-[479px] max-sm:mt-[32px]'>
                <div className='w-[440px] h-[473px] bg-[#FFFFFF] rounded-[16px] absolute bottom-[50px] right-[60px] flex justify-center items-center
                max-lg:right-[30px]
                max-sm:w-[323px] max-sm:h-[334px] max-sm:bottom-[20px] max-sm:left-[20px] max-sm:right-[20px]'>
                    <div className='w-[360px] h-[393px]
                    max-sm:w-[283px] max-sm:h-[294px]'>
                        <h1 className='text-[28px] font-[600]
                        max-sm:text-[16px]'>Оставить заявку</h1>
                        <p className='text-[16px] font-[400] leading-[24px] mt-[6px] mb-[24px] 
                        max-sm:text-[12px] max-sm:leading-[18px] max-sm:mt-[10px] max-sm:mb-[20px]'>Наши операторы свяжутся с вами в ближайшее время</p>
                        <div className='w-[360px] border-[1px] border-[#E4E4E4]
                        max-sm:hidden'></div>
                        <h5 className='font-[400] text-[12px] leading-[14px] mt-[32px] mb-[8px]
                        max-sm:text-[10px]  max-sm:mt-[0px]'>Имя*</h5>
                        <input type="email" className='bg-[#F9F9F9]  pl-[10px] w-[360px] h-[50px] rounded-[8px]
                        max-sm:w-[295px] max-sm:h-[38px] ' />
                        <h5 className='font-[400] text-[12px] leading-[14px] mt-[18px] mb-[8px]
                        max-sm:text-[10px] '>Телефон*</h5>
                        <input type="number" className='bg-[#F9F9F9] pl-[10px]  w-[360px] h-[50px] rounded-[8px]
                        max-sm:w-[295px] max-sm:h-[38px]' />
                        <button className='w-[360px] h-[39px] bg-[#0E2A75] text-[#FFFFFF] rounded-[8px] mt-[40px] flex justify-center items-center gap-[6px]
                        max-sm:w-[295px] max-sm:h-[40px] max-sm:mt-[30px]'>Отправить<GoArrowUpRight className='text-[20px]' /></button>
                    </div>
                </div>
            </div>
            <div className='w-[1320px] h-[520px] m-auto mt-[24px] flex justify-between items-center relative
            max-lg:w-[774px] max-lg:h-[896px] max-lg:flex-col
            max-sm:w-[363px] max-sm:h-[655px]'>
                <div className='w-[726px] h-[520px] bg-[#FFFFFF] rounded-[16px] flex justify-center items-center
                max-lg:w-[774px] max-lg:h-[520px] max-lg:absolute max-lg:bottom-0 max-lg:border
                max-sm:w-[363px] max-sm:h-[499px] max-sm:absolute max-sm:bottom-0'>
                    <div className='w-[598px] h-[444px]
                    max-lg:w-[734px]
                    max-sm:w-[335px] max-sm:h-[467px]'>
                        <p className='text-[#828282] text-[16px] font-[600]
                        max-lg:text-[12px]'>Контактная информация</p>
                        <h1 className='text-[28px] font-[600] mt-[10px] mb-[24px]
                        max-sm:text-[16px] max-sm:mb-[20px]'>У вас есть вопросы или предложения?</h1>
                        <p className='mb-[88px] text-[14px] font-[400] leading-[26px] text-[#434343]
                        max-sm:text-[10px] max-sm:leading-[15px] max-sm:mb-[32px]'>Свяжитесь с нами, если у вас есть какие-либо вопросы или вы хотите получить
                            дополнительную информацию</p>
                        <div className='grid grid-cols-2 gap-[30px] 
                        max-lg:gap-[20px_180px] 
                        max-sm:grid-cols-1 max-sm:gap-[16px_0px]'>
                            <div className='flex items-start '>
                                <div className='w-[49px] text-[#FFFFFF] text-[23px] flex justify-center items-center aspect-square bg-[#0E2A75] rounded-[50%] mr-[12px] 
                                max-sm:w-[38px]'>
                                    <SlLocationPin />
                                </div>
                                <div className='grid gap-[8px]
                                max-sm:gap-[6px]'>
                                    <h1 className='text-[16px] font-[600] leading-[19px]
                                    max-sm:text-[12px]'>Наш адрес</h1>
                                    <p className='text-[#434343] text-[14px] font-[400] leading-[16px] 
                                    max-sm:text-[10px]'>Ташкент, Алмазар, улица Жамий 5.</p>
                                </div>
                            </div>
                            <div className='flex items-start '>
                                <div className='w-[49px] text-[#FFFFFF] text-[23px] flex justify-center items-center aspect-square bg-[#0E2A75] rounded-[50%] mr-[12px]
                                max-sm:w-[38px]'>
                                    <FaRegClock />
                                </div>
                                <div className='grid gap-[8px]
                                max-sm:gap-[6px]'>
                                    <h1 className='text-[16px] font-[600] leading-[19px]
                                    max-sm:text-[12px]'>Прием заявок</h1>
                                    <p className='text-[#434343] text-[14px] font-[400] leading-[16px] 
                                    max-sm:text-[10px]'>Ежедневно 24 часа</p>
                                </div>
                            </div><div className='flex items-start '>
                                <div className='w-[49px] text-[#FFFFFF] text-[23px] flex justify-center items-center aspect-square bg-[#0E2A75] rounded-[50%] mr-[12px]
                                max-sm:w-[38px]'>
                                    <HiOutlineEnvelope />
                                </div>
                                <div className='grid gap-[8px]
                                max-sm:gap-[6px]'>
                                    <h1 className='text-[16px] font-[600] leading-[19px]
                                    max-sm:text-[12px]'>Адрес электронной почты</h1>
                                    <p className='text-[#434343] text-[14px] font-[400] leading-[16px] 
                                    max-sm:text-[10px]'>wodawater@gmail.com</p>
                                </div>
                            </div><div className='flex items-start '>
                                <div className='w-[49px] text-[#FFFFFF] text-[23px] flex justify-center items-center aspect-square bg-[#0E2A75] rounded-[50%] mr-[12px]
                                max-sm:w-[38px]'>
                                    <FaTruckFast />
                                </div>
                                <div className='grid gap-[8px]
                                max-sm:gap-[6px]'>
                                    <h1 className='text-[16px] font-[600] leading-[19px]
                                    max-sm:text-[12px]'>Доставка</h1>
                                    <p className='text-[#434343] text-[14px] font-[400] leading-[16px] 
                                    max-sm:text-[10px]'>Пн - Ст: 8:00 - 22:00</p>
                                </div>
                            </div><div className='flex items-start '>
                                <div className='w-[49px] text-[#FFFFFF] text-[23px] flex justify-center items-center aspect-square bg-[#0E2A75] rounded-[50%] mr-[12px]
                                max-sm:w-[38px]'>
                                    <FaHeadset />
                                </div>
                                <div className='grid gap-[8px]
                                max-sm:gap-[6px]'>
                                    <h1 className='text-[16px] font-[600] leading-[19px]
                                    max-sm:text-[12px]'>Номер телефона</h1>
                                    <p className='text-[#434343] text-[14px] font-[400] leading-[16px] 
                                    max-sm:text-[10px]'>+998 (95) 420-00-09</p>
                                </div>
                            </div><div className='flex items-start '>
                                <div className='w-[49px] text-[#FFFFFF] text-[23px] flex justify-center items-center aspect-square bg-[#0E2A75] rounded-[50%] mr-[12px]
                                max-sm:w-[38px]'>
                                    <HiOutlineUserGroup />
                                </div>
                                <div className='grid gap-[8px]
                                max-sm:gap-[6px]'>
                                    <h1 className='text-[16px] font-[600] leading-[19px]
                                    max-sm:text-[12px]'>Мы в соцсетях</h1>
                                    <p className='flex gap-[10px] text-[#434343]
                                    max-sm:text-[18px] max-sm:gap-[14px]'><TbBrandTelegram /><SlSocialInstagram /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[574px] h-[520px] bg-[#FFFFFF] rounded-[16px]
                max-lg:w-[774px] max-lg:h-[360px]
                max-sm:w-[363px] max-sm:h-[140px]'>
                    <MapContainer center={[41.3275, 69.2817]} zoom={15} className='rounded-[16px] w-[574px] h-[520px]
                      max-lg:w-[774px] max-lg:h-[360px]
                      max-sm:w-[363px] max-sm:h-[140px]'>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[41.3275, 69.2817]}>
                            <Popup>
                                Tashkent, Jami Street 5
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}
