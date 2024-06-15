import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Sale() {
    const { t } = useTranslation();
    return (
        <>
            <div id='sale' className='bg-[#FFFFFF] mt-[60px] rounded-[16px] flex justify-between items-center 
            max-lg:mt-[40px] max-sm:mt-[32px] p-[40px] max-lg:p-[32px_20px] max-md:p-[32px_20px] max-sm:p-[18px_14px] gap-x-6 max-md:gap-x-4 max-lg:gap-x-6'>
                <h1 className='text-[38px] font-[600] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[18px] whitespace-nowrap'>{t('sale.text')}</h1>
                <div className='border-[1px] border-[#E4E4E4] w-[45%] flex-grow '></div>
                <p className='text-[18px] text-[#222222] max-lg:text-[16px] max-sm:text-[10px]  whitespace-nowrap'>{t('sale.texts')}</p>
            </div>
            <div className='bg-[#FFFFFF] mt-[24px] max-sm:mt-[16px] rounded-[16px] flex items-center p-[40px] max-lg:p-[20px_65px_20px_20px] '>
                <h1 className='min-w-[150px] max-lg:min-w-[85px] max-xl:text-[20px] text-[#0E2A75] font-[700] text-[24px] max-sm:text-[18px]'>5+2</h1>
                <div className='border-[1px] border-[#E4E4E4] w-0 h-[56px] 
                max-lg:text-[#898989] max-xl:mx-[30px] mx-[54px] '></div>
                <p className='text-[#898989] text-[16px] leading-[28px] max-sm:text-[9px] max-sm:leading-[15px]'>
                {t('sale.texts2')}
                </p>
            </div>
            <div className='grid grid-cols-2 gap-[20px] mt-[20px] max-lg:mt-[15px] max-lg:gap-[15px] max-sm:mt-[9px] max-sm:gap-[9px] '>
                <div className='bg-[#FFFFFF] rounded-[15px] flex  items-center  max-md:flex-col max-md:gap-y-[20px] p-[40px] max-lg:p-[20px] max-sm:p-[14px] max-sm:justify-start max-sm:items-start'>
                    <h1 className=' min-w-[150px]  max-lg:min-w-[135px] max-xl:text-[20px] text-[#0E2A75] text-[24px] font-[700] max-sm:text-[18px]'>152 L = 130 {t('sale.text2')}</h1>
                    <div className='max-md:hidden max-xl:mx-[30px] mx-[54px] max-lg:mx-[25px] border-[1px]  w-0 h-[80%] border-[#E4E4E4]'></div>
                    <p className='text-[#898989] leading-[28px] text-[16px] max-sm:text-[10px] max-sm:leading-[15px] max-md:mt-auto'>
                    {t('sale.texts3')}
                    </p>
                </div>
                <div className='bg-[#FFFFFF] rounded-[15px] flex justify-between items-center max-md:flex-col max-md:gap-y-[20px] p-[40px] max-lg:p-[20px] max-sm:p-[14px] max-sm:justify-start max-sm:items-start '>
                    <h1 className='min-w-[150px] max-lg:min-w-[135px] max-xl:text-[20px] text-[#0E2A75] text-[24px] font-[700] max-sm:text-[18px]'>{t('sale.text3')}</h1>
                    <div className='max-md:hidden  max-xl:mx-[30px] mx-[54px] max-lg:mx-[25px] border-[1px]  w-0 h-[80%] border-[#E4E4E4] '></div>
                    <p className='text-[#898989] leading-[28px] text-[16px] max-sm:text-[10px] max-sm:leading-[15px] max-md:mt-auto'>{t('sale.texts4')}
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-[20px] mt-[20px] max-lg:mt-[15px] max-lg:gap-[15px] max-sm:mt-[9px] max-sm:gap-[9px]'>
                <div className='bg-[#FFFFFF] rounded-[15px] flex  justify-between items-center max-md:flex-col max-md:gap-y-[20px] p-[40px] max-lg:p-[20px] max-sm:p-[14px] max-sm:justify-start max-sm:items-start '>
                    <h1 className='text-[#0E2A75]  min-w-[150px] max-lg:min-w-[135px] max-xl:text-[20px] text-[24px] font-[700] max-sm:text-[18px]'>{t('sale.text4')}</h1>
                    <div className='max-md:hidden  border-[1px] w-0  max-xl:mx-[30px] mx-[54px] max-lg:mx-[25px] h-[80%] border-[#E4E4E4] '></div>
                    <p className=' text-[#898989] leading-[28px] text-[16px] max-sm:text-[10px] max-sm:leading-[15px] max-md:mt-auto'>{t('sale.texts5')}
                    </p>
                </div>
                <div className='bg-[#FFFFFF] rounded-[15px] flex justify-between items-center max-md:flex-col max-md:gap-y-[20px] p-[40px] max-lg:p-[20px] max-sm:p-[14px] max-sm:justify-start max-sm:items-start '>
                    <h1 className='text-[#0E2A75]  min-w-[150px] max-lg:min-w-[135px] max-xl:text-[20px] text-[24px] font-[700] max-sm:text-[18px]'>{t('sale.text5')}</h1>
                    <div className='max-md:hidden w-0  max-xl:mx-[30px] mx-[54px] max-lg:mx-[25px] h-[80%] max-lg:h-[140px] max-sm:h-0 border-[1px] border-[#E4E4E4] '></div>
                    <p className=' text-[#898989] leading-[28px] text-[16px] max-sm:text-[10px] max-sm:leading-[15px] max-md:mt-auto'>{t('sale.texts6')}</p>
                </div>
            </div>
            <div className='bgimg3 h-[450px] max-lg:h-[397px] max-sm:h-[242px] m-auto rounded-[15px] mt-[60px] relative max-sm:mt-[32px]'>
                <h1 className='font-[600] text-[36px] leading-[50px] w-[460px] max-sm:w-[225px] text-[#FFFFFF] absolute bottom-[30px] left-[30px] max-lg:leading-[43px] max-lg:bottom-[20px] max-lg:left-[20px] max-sm:leading-[19px] max-sm:text-[16px] max-sm:bottom-[18px] max-sm:left-[14px]'>
                {t('sale.text6')}
                </h1>
            </div>
        </>
    )
}
