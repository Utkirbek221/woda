import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { FaQuoteLeft } from "react-icons/fa";
import imgavatar from "../img/avatar.png"
export default function Clients() {
    const prevRef = React.useRef(null);
    const nextRef = React.useRef(null);
    const swipstl = "bg-[#FFFFFF] w-[427px] h-[240px] rounded-[10px] "
    return (
        <>
            <div id='clients' className='w-[1320px] h-[126px] m-auto bg-[#FFFFFF] rounded-[16px] flex justify-center items-center mt-[60px] 
    max-lg:w-[774px] max-lg:h-[142px] max-lg:mt-[40px]
    max-sm:w-[363px] max-sm:h-[76px] max-sm:mt-[32px] '>
                <div className='max-lg:w-[734px]
                max-sm:w-[336px] flex justify-center items-center '>
                    <h1 className='text-[38px] font-[600]
        max-lg:text-[32px]max-lg:leading-[38px]
        max-sm:text-[18px] max-sm:leading-[21px]'>Отзывы наших клиентов</h1>
                    <div className='w-[468px] h-0 border-[1px] border-[#E4E4E4] ml-[24px] mr-[24px]
        max-lg:w-[314px] 
        max-sm:w-[108px] max-sm:ml-[16px] max-sm:mr-[16px]'></div>
                    <p className='text-[18px]
        max-lg:text-[16px]
        max-sm:text-[10px] max-sm:w-[103px] max-sm:ml-[10px] '>Более 30 довольных клиентов</p>
                </div>
            </div>
            <div className='w-[1320px] h-[240px] m-auto mt-[24px] 
            max-lg:w-[774px] max-lg:h-[250px]
            max-sm:w-[363px] max-sm:h-[216px]'>
                <Swiper
                    slidesPerView={'auto'}
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
                    className="mySwiper w-[1320px] h-[240px]
                    max-lg:w-[774px] max-lg:h-[250px]
                    max-sm:w-[363px] max-sm:h-[216px] "
                >
                    <SwiperSlide className={swipstl}>
                        <div className='w-[379px] h-[168px]  mt-[24px] ml-[24px] flex flex-col justify-between items-center
                        max-lg:w-[321px] max-lg:h-[188px]
                        max-sm:w-[323px] '>
                            <div className='w-full flex justify-between items-center 
                            '>
                                <div className=' w-[40px] h-[40px] rounded-[50%] overflow-hidden'>
                                    <img src={imgavatar} alt="" />
                                </div>
                                <div className='w-[220px] h-[40px]'>
                                    <h1 className='text-[16px] font-[600]'>Рахимжон Эрматов</h1>
                                    <p className='text-[12px] text-[#898989]'>Старший машинист АО "Temiryo’l"</p>
                                </div>
                                <div className='text-[#181F77] text-[34px]
                                max-sm:text-[28px]'><FaQuoteLeft /></div>
                            </div>
                            <p className='text-[12px] leading-[20px] mt-[28px] 
                             max-sm:mt-[18px] max-sm:text-[11px]'>Горячая акция для жарких дней! Покупайте 8 капсул воды всего лишь за 130 тысяч сум. Торопитесь, период акции ограничен. При покупки первых трех капсул, мы вам дарим механическую помпу в подарок. Покупайте кулеры по максимально выгодной цене и получайте 10 капсул воды в подарок.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={swipstl}>
                        <div className='w-[379px] h-[168px]  mt-[24px] ml-[24px] flex flex-col justify-between items-center
                        max-lg:w-[321px] max-lg:h-[188px]
                        max-sm:w-[323px] '>
                            <div className='w-full flex justify-between items-center 
                            '>
                                <div className=' w-[40px] h-[40px] rounded-[50%] overflow-hidden'>
                                    <img src={imgavatar} alt="" />
                                </div>
                                <div className='w-[220px] h-[40px]'>
                                    <h1 className='text-[16px] font-[600]'>Рахимжон Эрматов</h1>
                                    <p className='text-[12px] text-[#898989]'>Старший машинист АО "Temiryo’l"</p>
                                </div>
                                <div className='text-[#181F77] text-[34px]
                                max-sm:text-[28px]'><FaQuoteLeft /></div>
                            </div>
                            <p className='text-[12px] leading-[20px] mt-[28px] 
                             max-sm:mt-[18px] max-sm:text-[11px]'>Горячая акция для жарких дней! Покупайте 8 капсул воды всего лишь за 130 тысяч сум. Торопитесь, период акции ограничен. При покупки первых трех капсул, мы вам дарим механическую помпу в подарок. Покупайте кулеры по максимально выгодной цене и получайте 10 капсул воды в подарок.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={swipstl}>
                        <div className='w-[379px] h-[168px]  mt-[24px] ml-[24px] flex flex-col justify-between items-center
                        max-lg:w-[321px] max-lg:h-[188px]
                        max-sm:w-[323px] '>
                            <div className='w-full flex justify-between items-center 
                            '>
                                <div className=' w-[40px] h-[40px] rounded-[50%] overflow-hidden'>
                                    <img src={imgavatar} alt="" />
                                </div>
                                <div className='w-[220px] h-[40px]'>
                                    <h1 className='text-[16px] font-[600]'>Рахимжон Эрматов</h1>
                                    <p className='text-[12px] text-[#898989]'>Старший машинист АО "Temiryo’l"</p>
                                </div>
                                <div className='text-[#181F77] text-[34px]
                                max-sm:text-[28px]'><FaQuoteLeft /></div>
                            </div>
                            <p className='text-[12px] leading-[20px] mt-[28px] 
                             max-sm:mt-[18px] max-sm:text-[11px]'>Горячая акция для жарких дней! Покупайте 8 капсул воды всего лишь за 130 тысяч сум. Торопитесь, период акции ограничен. При покупки первых трех капсул, мы вам дарим механическую помпу в подарок. Покупайте кулеры по максимально выгодной цене и получайте 10 капсул воды в подарок.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={swipstl}>
                        <div className='w-[379px] h-[168px]  mt-[24px] ml-[24px] flex flex-col justify-between items-center
                        max-lg:w-[321px] max-lg:h-[188px]
                        max-sm:w-[323px] '>
                            <div className='w-full flex justify-between items-center 
                            '>
                                <div className=' w-[40px] h-[40px] rounded-[50%] overflow-hidden'>
                                    <img src={imgavatar} alt="" />
                                </div>
                                <div className='w-[220px] h-[40px]'>
                                    <h1 className='text-[16px] font-[600]'>Рахимжон Эрматов</h1>
                                    <p className='text-[12px] text-[#898989]'>Старший машинист АО "Temiryo’l"</p>
                                </div>
                                <div className='text-[#181F77] text-[34px]
                                max-sm:text-[28px]'><FaQuoteLeft /></div>
                            </div>
                            <p className='text-[12px] leading-[20px] mt-[28px] 
                             max-sm:mt-[18px] max-sm:text-[11px]'>Горячая акция для жарких дней! Покупайте 8 капсул воды всего лишь за 130 тысяч сум. Торопитесь, период акции ограничен. При покупки первых трех капсул, мы вам дарим механическую помпу в подарок. Покупайте кулеры по максимально выгодной цене и получайте 10 капсул воды в подарок.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
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
            <div className='bgimg4 w-[1320px] h-[450px] m-auto mt-[60px] relative rounded-[10px]
            max-lg:w-[774px] max-lg:h-[397px]
            max-sm:w-[364px] max-sm:h-[242px] '>
                <h1 className='w-[625px] font-[600] text-[36px] leading-[50px] text-[#FFFFFF] absolute bottom-[30px] left-[30px]
                max-lg:bottom-[20px] max-lg:left-[20px]
                max-sm:w-[278px]  max-sm:bottom-[20px] max-sm:left-[14px] max-sm:text-[16px] max-sm:leading-[19px]' >
                    Вода — единственный подходящий
                    напиток для мудрого.
                </h1>
            </div>
        </>
    );
}
