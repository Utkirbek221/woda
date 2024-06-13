import React from 'react'
import bgimg from '../img/bgimg2.png'
import { GoArrowUpRight, GoArrowLeft, GoArrowRight } from "react-icons/go";
import chegirma from "../img/Chegirma.png"
import sms from "../img/sms.png"
import internet from "../img/internet.png"
import car from "../img/car.png"
import xalqbank from "../img/XALQ_BANKI-01 1.png"
import OTYY from "../img/OTYY-01 1.png"
import turonbank from "../img/Turon_Bank-01 1.png"
import viva from "../img/6672135 1.png"
import garantbank from "../img/GarantBank-01 1.png"
import birga from "../img/article-original 1.png"
import hokim from "../img/1622674150 1.png"
import { GoArrowUp } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function About() {
    const prevRef = React.useRef(null);
    const nextRef = React.useRef(null);
    const swipstl = "bg-[#FFFFFF] w-[1320px] h-[520px] rounded-[10px] "
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                modules={[Navigation]}
                loop
                className="mySwiper w-[1320px] h-[524px]  mt-[20px] rounded-[10px]
                    max-lg:w-[774px]  max-lg:h-[418px]
                    max-sm:w-[363px]  max-sm:h-[456px] "
            >
                <SwiperSlide className={swipstl}>
                    <div className='w-[1320px] h-[520px] m-auto  bgimg rounded-[10px] flex justify-evenly items-center text-[#FFFFFE] border
            max-lg:w-[774px]  max-lg:h-[418px] max-lg:justify-center
            max-sm:w-[363px]  max-sm:h-[456px] max-sm:flex-col ' >
                        <div className='w-[560px] max-lg:w-[388px] max-sm:w-[333px] max-sm:z-[3]'>
                            <h1 className='text-[48px] leading-[55px] font-[700] 
                    max-lg:text-[36px] max-lg:leading-[54px] 
                    max-sm:w-[265px] max-sm:h-[60px] max-sm:leading-[30px] max-sm:text-[24px]'>Доставим воду менее <br />
                                чем <span className='text-[#F1FE5B]'>за 24 часа.</span></h1>
                            <p className='pt-[25px] text-[16px]
                    max-lg:w-[345px] 
                    max-sm:w-[333px] max-sm:pt-[15px] max-sm:mb-[205px] max-sm:text-[13px]'>Быстрая доставка - приоритет в нашей компании, и поэтому мы доставляем воду менее чем за 24 часа с момента заказа. Если наша команда не успеет привезти воду в указнный срок, одна капсула воды предоставляется бесплатно.
                            </p>
                            <button className='w-[131px] h-[39px] bg-[#FDFDFF] text-[#25539A] flex justify-evenly items-center rounded-[8px] mt-[60px] 
                    max-sm:w-[333px] max-sm:h-[36px] max-sm:justify-center'>
                                <p>Связаться</p>
                                <span>
                                    <GoArrowUpRight />
                                </span>
                            </button>
                        </div>
                        <div className='w-[430px] h-[458px] mt-[60px]  
                max-lg:w-[332px] max-lg:h-[373px] max-lg:pt-[10px] 
                max-sm:absolute  max-sm:w-[280px] max-sm:h-[260px] max-sm:pt-[60px] max-sm:z-[1] max-sm:overflow-hidden'>
                            <img src={bgimg} alt='' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={swipstl}>
                    <div className='w-[1320px] h-[520px] m-auto  bgimg rounded-[10px] flex justify-evenly items-center text-[#FFFFFE]
            max-lg:w-[774px]  max-lg:h-[418px] max-lg:justify-center
            max-sm:w-[363px]  max-sm:h-[456px] max-sm:flex-col ' >
                        <div className='w-[560px] max-lg:w-[388px] max-sm:w-[333px] max-sm:z-[3]'>
                            <h1 className='text-[48px] leading-[55px] font-[700] 
                    max-lg:text-[36px] max-lg:leading-[54px] 
                    max-sm:w-[265px] max-sm:h-[60px] max-sm:leading-[30px] max-sm:text-[24px]'>Доставим воду менее <br />
                                чем <span className='text-[#F1FE5B]'>за 24 часа.</span></h1>
                            <p className='pt-[25px] text-[16px]
                    max-lg:w-[345px] 
                    max-sm:w-[333px] max-sm:pt-[15px] max-sm:mb-[205px] max-sm:text-[13px]'>Быстрая доставка - приоритет в нашей компании, и поэтому мы доставляем воду менее чем за 24 часа с момента заказа. Если наша команда не успеет привезти воду в указнный срок, одна капсула воды предоставляется бесплатно.
                            </p>
                            <button className='w-[131px] h-[39px] bg-[#FDFDFF] text-[#25539A] flex justify-evenly items-center rounded-[8px] mt-[60px] 
                    max-sm:w-[333px] max-sm:h-[36px] max-sm:justify-center'>
                                <p>Связаться</p>
                                <span>
                                    <GoArrowUpRight />
                                </span>
                            </button>
                        </div>
                        <div className='w-[430px] h-[458px] mt-[60px]  
                max-lg:w-[332px] max-lg:h-[373px] max-lg:pt-[10px] 
                max-sm:absolute  max-sm:w-[280px] max-sm:h-[260px] max-sm:pt-[60px] max-sm:z-[1] max-sm:overflow-hidden'>
                            <img src={bgimg} alt='' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={swipstl}>
                    <div className='w-[1320px] h-[520px] m-auto  bgimg rounded-[10px] flex justify-evenly items-center text-[#FFFFFE]
            max-lg:w-[774px]  max-lg:h-[418px] max-lg:justify-center
            max-sm:w-[363px]  max-sm:h-[456px] max-sm:flex-col ' >
                        <div className='w-[560px] max-lg:w-[388px] max-sm:w-[333px] max-sm:z-[3]'>
                            <h1 className='text-[48px] leading-[55px] font-[700] 
                    max-lg:text-[36px] max-lg:leading-[54px] 
                    max-sm:w-[265px] max-sm:h-[60px] max-sm:leading-[30px] max-sm:text-[24px]'>Доставим воду менее <br />
                                чем <span className='text-[#F1FE5B]'>за 24 часа.</span></h1>
                            <p className='pt-[25px] text-[16px]
                    max-lg:w-[345px] 
                    max-sm:w-[333px] max-sm:pt-[15px] max-sm:mb-[205px] max-sm:text-[13px]'>Быстрая доставка - приоритет в нашей компании, и поэтому мы доставляем воду менее чем за 24 часа с момента заказа. Если наша команда не успеет привезти воду в указнный срок, одна капсула воды предоставляется бесплатно.
                            </p>
                            <button className='w-[131px] h-[39px] bg-[#FDFDFF] text-[#25539A] flex justify-evenly items-center rounded-[8px] mt-[60px] 
                    max-sm:w-[333px] max-sm:h-[36px] max-sm:justify-center'>
                                <p>Связаться</p>
                                <span>
                                    <GoArrowUpRight />
                                </span>
                            </button>
                        </div>
                        <div className='w-[430px] h-[458px] mt-[60px]  
                max-lg:w-[332px] max-lg:h-[373px] max-lg:pt-[10px] 
                max-sm:absolute  max-sm:w-[280px] max-sm:h-[260px] max-sm:pt-[60px] max-sm:z-[1] max-sm:overflow-hidden'>
                            <img src={bgimg} alt='' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={swipstl}>
                    <div className='w-[1320px] h-[520px] m-auto  bgimg rounded-[10px] flex justify-evenly items-center text-[#FFFFFE]
            max-lg:w-[774px]  max-lg:h-[418px] max-lg:justify-center
            max-sm:w-[363px]  max-sm:h-[456px] max-sm:flex-col ' >
                        <div className='w-[560px] max-lg:w-[388px] max-sm:w-[333px] max-sm:z-[3]'>
                            <h1 className='text-[48px] leading-[55px] font-[700] 
                    max-lg:text-[36px] max-lg:leading-[54px] 
                    max-sm:w-[265px] max-sm:h-[60px] max-sm:leading-[30px] max-sm:text-[24px]'>Доставим воду менее <br />
                                чем <span className='text-[#F1FE5B]'>за 24 часа.</span></h1>
                            <p className='pt-[25px] text-[16px]
                    max-lg:w-[345px] 
                    max-sm:w-[333px] max-sm:pt-[15px] max-sm:mb-[205px] max-sm:text-[13px]'>Быстрая доставка - приоритет в нашей компании, и поэтому мы доставляем воду менее чем за 24 часа с момента заказа. Если наша команда не успеет привезти воду в указнный срок, одна капсула воды предоставляется бесплатно.
                            </p>
                            <button className='w-[131px] h-[39px] bg-[#FDFDFF] text-[#25539A] flex justify-evenly items-center rounded-[8px] mt-[60px] 
                    max-sm:w-[333px] max-sm:h-[36px] max-sm:justify-center'>
                                <p>Связаться</p>
                                <span>
                                    <GoArrowUpRight />
                                </span>
                            </button>
                        </div>
                        <div className='w-[430px] h-[458px] mt-[60px]  
                max-lg:w-[332px] max-lg:h-[373px] max-lg:pt-[10px] 
                max-sm:absolute  max-sm:w-[280px] max-sm:h-[260px] max-sm:pt-[60px] max-sm:z-[1] max-sm:overflow-hidden'>
                            <img src={bgimg} alt='' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='m-auto w-[1320px] h-[50px] mt-[40px] flex justify-center items-center gap-[20px] 
            max-lg:w-[774px]
            max-sm:w-[363px] max-sm:h-[24px] max-sm:gap-[10px] max-sm:mt-[20px]'>
                <div ref={prevRef} className='w-[50px] h-[50px] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center text-[24px]
                max-sm:w-[24px] max-sm:h-[24px] max-sm:text-[14px] '>
                    <GoArrowLeft />
                </div>
                <div ref={nextRef} className='w-[50px] h-[50px] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center text-[24px]
                max-sm:w-[24px] max-sm:h-[24px] max-sm:text-[14px] '>
                    <GoArrowRight />
                </div>
            </div>
            <div id='about' className='w-[1319px] h-[582px] m-auto mt-[50px] flex justify-between items-center 
            max-lg:hidden 
            max-sm:flex max-sm:w-[363px] max-sm:h-[712px]  max-sm:flex-col max-sm:mt-[30px]'>
                <div className='w-[427px] h-[582px] bg-[#FFFFFF] rounded-[15px] flex flex-col items-center justify-center
                max-sm:w-[363px] max-sm:h-[368px]'>
                    <div className='w-[351px] max-sm:w-[335px]'>
                        <p className='text-[#828282] text-[16px] font-[600] 
                        max-sm:text-[12px]'>О нас</p>
                        <h1 className='text-[28px] mt-[10px] max-sm:text-[18px] max-sm:leading-[20px]'>WODA – питьевая вода высшего качества</h1>
                        <p className='text-[#434343] font-[400] text-[14px] mt-[40px] 
                        max-sm:text-[13px] max-sm:mt-[14px]'>
                            ООО «Waterzone Group» созданная в 2012 году под брендом Woda, добывает минеральную воду из артезианской скважины n 5559(14), расположенной в Ташкентской области, Юкорочирчикского района.
                        </p>
                        <p className='text-[#434343] font-[400] text-[14px] mt-[40px] 
                        max-sm:text-[13px] max-sm:mt-[12px]'>
                            Для того чтобы сделать воду не только чистой, но и полезной для здоровья, мы используем восьми ступенчатую очистку воды, с последующим добавлением минералов.
                        </p>
                        <button className='w-[168px] h-[39px] rounded-[8px] gap-[6px] flex justify-center items-center mt-[100px] border-[1px] border-[#E0E0E0]
                        max-sm:mt-[40px]'>
                            <p>Подробно о нас</p>
                            <span><GoArrowUpRight /></span>
                        </button>
                    </div>
                </div>
                <div className='max-sm:flex'>
                    <div className='w-[416px] h-[276px] bg-[#FFFFFF] rounded-[15px] 
                    max-sm:w-[176px] max-sm:h-[160px]'>
                        <div className='w-[340px] m-auto pt-[25px] max-sm:w-[142px] max-sm:pt-[10px]'>
                            <div className='text-[#FFFFFF] w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex items-center justify-center text-[35px]
                            max-sm:w-[41px] max-sm:h-[41px] '>
                                <img src={chegirma} alt="" className='max-sm:w-[23px] max-sm:h-[23px]' />
                            </div>
                            <p className='text-[24px] pt-[100px] max-sm:text-[18px] max-sm:pt-[50px]'>Акции и бонусы</p>
                        </div>
                    </div>
                    <div className='w-[416px] h-[276px] bg-[#FFFFFF] rounded-[15px] mt-[30px]
                    max-sm:w-[176px] max-sm:h-[160px] max-sm:mt-[0px] max-sm:ml-[10px]'>
                        <div className='w-[340px] m-auto pt-[25px] max-sm:w-[142px] max-sm:pt-[10px]'>
                            <div className='text-[#FFFFFF] w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex items-center justify-center text-[35px]
                            max-sm:w-[41px] max-sm:h-[41px] '>
                                <img src={internet} alt="" className='max-sm:w-[23px] max-sm:h-[23px]' />
                            </div>
                            <p className='text-[24px] pt-[85px] max-sm:text-[18px] max-sm:pt-[20px] max-sm:leading-[21px]'>Несколько способов онлайн заказа</p>
                        </div>
                    </div>
                </div>
                <div className='max-sm:flex '>
                    <div className='w-[416px] h-[276px] bg-[#FFFFFF] rounded-[15px] 
                    max-sm:w-[176px] max-sm:h-[160px]'>
                        <div className='w-[340px] m-auto pt-[25px] 
                        max-sm:w-[142px] max-sm:pt-[10px]'>
                            <div className='text-[#FFFFFF] w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex items-center justify-center text-[35px]
                            max-sm:w-[41px] max-sm:h-[41px] '>
                                <img src={sms} alt="" className='max-sm:w-[23px] max-sm:h-[23px]' />
                            </div>
                            <p className='text-[24px] pt-[100px] max-sm:text-[18px] max-sm:leading-[21px] max-sm:pt-[40px]'>Отзывы наших клиентов</p>
                        </div>
                    </div>
                    <div className='w-[416px] h-[276px] bg-[#FFFFFF] rounded-[15px] mt-[30px]
                    max-sm:w-[176px] max-sm:h-[160px] max-sm:mt-[0px] max-sm:ml-[10px]'>
                        <div className='w-[340px] m-auto pt-[25px] max-sm:w-[142px] max-sm:pt-[10px]'>
                            <div className='text-[#FFFFFF] w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex items-center justify-center text-[35px]
                            max-sm:w-[41px] max-sm:h-[41px] '>
                                <img src={car} alt="" className='max-sm:w-[23px] max-sm:h-[23px]' />
                            </div>
                            <p className='text-[24px] pt-[85px] max-sm:text-[18px] w-[290px] max-sm:w-[134px] max-sm:leading-[21px] max-sm:pt-[40px]'>Бесплатная доставка воды</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden max-lg:flex max-sm:hidden w-[774px] h-[858px] m-auto mt-[50px] justify-between items-center gap-4'>
                <div className='grid gap-4 '>
                    <div className='w-[389px] h-[567px] bg-[#FFFFFF] rounded-[15px] flex flex-col items-center justify-center'>
                        <div className='w-[351px]'>
                            <p className='text-[rgb(130,130,130)] text-[16px] font-[600]'>О нас</p>
                            <h1 className='text-[28px] mt-[10px]'>WODA – питьевая вода высшего качества</h1>
                            <p className='text-[#434343] font-[400] text-[14px] mt-[40px]'>
                                ООО «Waterzone Group» созданная в 2012 году под брендом Woda, добывает минеральную воду из артезианской скважины n 5559(14), расположенной в Ташкентской области, Юкорочирчикского района.
                            </p>
                            <p className='text-[#434343] font-[400] text-[14px] mt-[40px]'>
                                Для того чтобы сделать воду не только чистой, но и полезной для здоровья, мы используем восьми ступенчатую очистку воды, с последующим добавлением минералов.
                            </p>
                            <button className='w-[168px] h-[39px] rounded-[8px] gap-[6px] flex justify-center items-center mt-[100px] border-[1px] border-[#E0E0E0]'>
                                <p>Подробно о нас</p>
                                <span><GoArrowUpRight /></span>
                            </button>
                        </div>
                    </div>
                    <div className='w-[389px]  h-[276px] bg-[#FFFFFF] rounded-[15px]'>
                        <div className='w-[340px] m-auto pt-[25px]'>
                            <div className='text-[#FFFFFF] w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex items-center justify-center text-[35px]'>
                                <img src={internet} alt="" />
                            </div>
                            <p className='text-[24px] pt-[85px]'>Несколько способов онлайн заказа</p>
                        </div>
                    </div>
                </div>
                <div className=' grid gap-4'>
                    <div className='w-[370px] h-[276px] bg-[#FFFFFF] rounded-[15px] '>
                        <div className='w-[340px] m-auto pt-[25px]'>
                            <div className='text-[#FFFFFF] w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex items-center justify-center text-[35px]'>
                                <img src={chegirma} alt="" />
                            </div>
                            <p className='text-[24px] pt-[100px]'>Акции и бонусы</p>
                        </div>
                    </div>
                    <div className='w-[370px] h-[276px] bg-[#FFFFFF] rounded-[15px] '>
                        <div className='w-[340px] m-auto max-lg:mt-[25px]'>
                            <div className='text-[#FFFFFF] w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex items-center justify-center text-[35px]'>
                                <img src={sms} alt="" />
                            </div>
                            <p className='text-[24px] pt-[100px]'>Отзывы наших клиентов</p>
                        </div>
                    </div>
                    <div className='w-[370px] h-[276px] bg-[#FFFFFF] rounded-[15px] '>
                        <div className='w-[340px] m-auto max-lg:mt-[25px]'>
                            <div className='text-[#FFFFFF] w-[65px] h-[65px] bg-[#0E2A75] rounded-[50%] flex items-center justify-center text-[35px]'>
                                <img src={car} alt="" />
                            </div>
                            <p className='text-[24px] pt-[85px] w-[290px]'>Бесплатная доставка воды</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[1320px] h-[372px] m-auto mt-[50px] text-[#FFFFFF]
            max-lg:w-[774px] max-lg:h-[447px]
            max-sm:w-[363px] max-sm:h-[232px]'>
                <div className='w-[1320px] h-[126px] bg-[#0E2A75] rounded-[16px] flex justify-center items-center
                max-lg:w-[774px] max-lg:h-[103px]
                max-sm:w-[363px] max-sm:h-[58px]'>
                    <div className='w-[1240px] h-[46px] flex justify-between items-center
                    max-lg:w-[696px]
                    max-sm:w-[320px] '>
                        <h1 className='text-[38px] 
                        max-lg:text-[32px]
                        max-sm:text-[14px] max-sm:w-[153px]'>Нас уже выбрали</h1>
                        <div className='w-[666px] h-0 border-[1px] border-[#E4E4E4] 
                        max-lg:w-[233px]
                        max-sm:w-[87px]'></div>
                        <p className='text-[18px] 
                        max-lg:text-[16px]
                        max-sm:text-[10px] max-sm:w-[93px] max-sm:ml-[20px]'>10+ крупные компании</p>
                    </div>
                </div>
                <div className='w-[1320px] h-[222px] bg-[#FFFFFF] rounded-[16px]  flex justify-center items-center mt-[24px]
                max-lg:w-[774px] max-lg:h-[328px] max-lg:mt-[20px] 
                max-sm:w-[363px] max-sm:h-[162px] max-sm:mt-[20px] '>
                    <div className='w-[1248px] h-[112px] flex justify-between items-center
                    max-lg:w-[774px] max-lg:h-[328px] max-lg:hidden
                    max-sm:w-[363px] max-sm:h-[162px]'>
                        <img src={xalqbank} alt="" />
                        <img src={OTYY} alt="" />
                        <img src={turonbank} alt="" />
                        <img src={viva} alt="" />
                        <img src={garantbank} alt="" />
                        <img src={birga} alt="" />
                        <img src={hokim} alt="" />
                    </div>
                    <div className='hidden max-lg:flex flex-col w-[1248px] h-[112px] justify-center items-center
                    max-lg:w-[774px] max-lg:h-[328px] 
                    max-sm:w-[363px] max-sm:h-[162px]'>
                        <div className='flex  w-[670px] justify-between items-center max-sm:w-[290px]'>
                            <img className='max-sm:w-[130px] max-sm:h-[43px]' src={xalqbank} alt="" />
                            <img className='max-sm:w-[57px] max-sm:h-[65px]' src={OTYY} alt="" />
                            <img className='max-sm:w-[114px] max-sm:h-[41px]' src={turonbank} alt="" />
                        </div>
                        <div className='flex  w-[690px] justify-between items-center mt-[20px] max-sm:w-[300px]'>
                            <img className='max-sm:w-[66px] max-sm:h-[39px]' src={viva} alt="" />
                            <img className='max-sm:w-[96px] max-sm:h-[39px]' src={garantbank} alt="" />
                            <img className='max-sm:w-[50px] max-sm:h-[28px]' src={birga} alt="" />
                            <img className='max-sm:w-[55px] max-sm:h-[54px]' src={hokim} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bgimg2 w-[1320px] h-[450px] m-auto mt-[40px] bg-[#FFFFFF] rounded-[10px] 
            max-lg:w-[774px] max-lg:h-[397px]
            max-sm:w-[363px] max-sm:h-[242px] relative">
                <h1 className='text-[36px] text-[#FFFFFF] absolute bottom-4 left-9
                max-sm:text-[16px] max-sm:bottom-3 max-sm:left-5'>
                    Тысячи людей живут без любви, <br />
                    но никто — без воды.
                </h1>
            </div>
            <div className='w-[1320px] h-[474px] bg-[#0E2A75] rounded-[16px] m-auto mt-[50px] text-[#FFFFFF] flex justify-center items-center
            max-lg:w-[774px] max-lg:h-[378px]
            max-sm:w-[363px] max-sm:h-[547px] '>
                <div className='w-[1230px] flex justify-center items-center m-auto gap-[50px] max-sm:flex-col
                max-lg:w-[724px]
                max-sm:w-[335px]'>
                    <div className='w-[593px] 
                max-lg:w-[347px]
                max-sm:w-[335px]'>
                        <div className='mt-[38px] max-lg:mt-[25px] max-sm:mt-[1px]  '>
                            <div className='flex justify-between items-center text-[18px]
                                max-lg:text-[14px]
                                max-sm:text-[12px]'>
                                <p >Производство/в месяц</p>
                                <p>Ежемесячный рост</p>
                            </div>
                            <div className='border-[1px] border-[#E4E4E4] w-[593px] h-0 mt-[10px]
                            max-lg:w-[347px]
                            max-sm:w-[335px]'></div>
                            <div className='flex justify-between items-center mt-[56px] max-lg:mt-[27px] max-sm:mt-[20px]'>
                                <p className='text-[64px] font-[600] 
                                max-lg:text-[44px]
                                max-sm:text-[32px]'>12000L +</p>
                                <p className='flex justify-center items-center gap-1 text-[30px] max-sm:text-[20px]'><span><GoArrowUp /></span>26%</p>
                            </div>
                        </div>
                        <div className='mt-[56px] max-sm:mt-[40px]'>
                            <div className='flex justify-between items-center text-[18px]
                                max-lg:text-[14px]
                                max-sm:text-[12px]'>
                                <p >Производство/в месяц</p>
                                <p>Ежемесячный рост</p>
                            </div>
                            <div className='border-[1px] border-[#E4E4E4] w-[593px] h-0 mt-[10px]
                            max-lg:w-[347px]
                            max-sm:w-[335px]'></div>
                            <div className='flex justify-between items-center mt-[56px] max-lg:mt-[27px] max-sm:mt-[20px]'>
                                <p className='text-[64px] font-[600] 
                                max-lg:text-[44px]
                                max-sm:text-[32px]'>120 +</p>
                                <p className='flex justify-center items-center gap-1 text-[30px] max-sm:text-[20px]'><span><GoArrowUp /></span>28%</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[593px] 
                max-lg:w-[347px]
                max-sm:w-[335px]'>
                        <div className='mt-[38px] max-lg:mt-[25px]  max-sm:mt-[0px]'>
                            <div className='flex justify-between items-center text-[18px]
                                max-lg:text-[14px]
                                max-sm:text-[12px]'>
                                <p >Производство/в месяц</p>
                                <p>Ежемесячный рост</p>
                            </div>
                            <div className='border-[1px] border-[#E4E4E4] w-[593px] h-0 mt-[10px]
                            max-lg:w-[347px]
                            max-sm:w-[335px]'></div>
                            <div className='flex justify-between items-center mt-[45px] max-lg:mt-[27px]  max-sm:mt-[20px]'>
                                <p className='text-[64px] font-[600] 
                                max-lg:text-[44px]
                                max-sm:text-[32px]'>120 +</p>
                                <p className='flex justify-center items-center gap-1 text-[30px] max-sm:text-[20px]'><span><GoArrowUp /></span>10%</p>
                            </div>
                        </div>
                        <div className='mt-[56px]  max-sm:mt-[20px]'>
                            <div className='flex justify-between items-center text-[18px]
                                max-lg:text-[14px]
                                max-sm:text-[12px]'>
                                <p >Производство/в месяц</p>
                                <p>Ежемесячный рост</p>
                            </div>
                            <div className='border-[1px] border-[#E4E4E4] w-[593px] h-0 mt-[10px] 
                            max-lg:w-[347px]
                            max-sm:w-[335px]'></div>
                            <div className='flex justify-between items-center mt-[45px] max-lg:mt-[27px]  max-sm:mt-[20px]'>
                                <p className='text-[64px] font-[600] 
                                max-lg:text-[44px]
                                max-sm:text-[32px]'>6000 +</p>
                                <p className='flex justify-center items-center gap-1 text-[30px] max-sm:text-[20px]'><span><GoArrowUp /></span>10%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
