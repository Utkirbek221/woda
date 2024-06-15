import React, { useState } from 'react'
import logo from "../img/LogoHeader.png"
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    localStorage.setItem("lang",lng.target.value)
    i18n.changeLanguage(lng.target.value);
  };
  return (

    <>
      <div className='h-[70px] rounded-[16px] bg-[#FFFFFF] m-auto mt-[30px] flex  items-center justify-between  
        max-lg:h-[67px] max-lg:bg-[#FFFFFF] 
        max-sm:bg-[#FFFFFF]'>
        <img src={logo} alt="" className=' w-[116px] h-[43px] ml-[20px] 
         max-lg:w-[100px] max-lg:h-[37px] 
         max-sm:w-[57px] max-sm:h-[21px]'/>
        <div className=' flex items-center justify-center w-[450px] h-[19px] gap-[40px] max-lg:hidden max-sm:hidden'>
          <a className='text-[#222222] font-[500] cursor-pointer' href='#about'>{t('header.link1')}</a>
          <a className='text-[#222222] font-[500] cursor-pointer' href='#sale'>{t('header.link2')}</a>
          <a className='text-[#222222] font-[500] cursor-pointer' href='#clients'>{t('header.link3')}</a>
          <a className='text-[#222222] font-[500] cursor-pointer' href='#contacts'>{t('header.link4')}</a>
        </div>
        <div className='mr-[20px] flex justify-center items-center gap-[25px]'>
          <div className='flex justify-center items-center gap-[8px] '>
            <select onChange={changeLanguage} defaultValue={i18n.language} name="selectedFruit" className='cursor-pointer'>
              <option value="ru">РУС</option>
              <option value="uz">UZB</option>
              <option value="en">ENG</option>
            </select>
          </div>
          <button className='border-[1px] border-[#E0E0E0] w-[201px] h-[39px] rounded-[10px] max-sm:hidden'>+998 (95) 420-00-09</button>
          <div className='hidden max-lg:flex max-lg:text-[34px] max-sm:flex max-sm:20px'>
            <button onClick={() => setOpenMenu(!openMenu)}>{openMenu ? <IoMdClose /> : <HiMenu />}</button>
          </div>
        </div>
      </div>
      <div className={`hidden ${openMenu ? 'w-[45%] duration-[1s]  p-7' : 'w-0 hidden p-0 overflow-hidden duration-[1s]'}  h-[100vh] max-lg:flex fixed top-0 right-0 bg-[#FFFFFF] z-[999] flex-col text-[#black]`}>
        <div className='w-full  text-[30px]'>
          <button onClick={() => setOpenMenu(!openMenu)}>
            <IoMdClose />
          </button>
        </div>
        <div className='w-full h-[50vh]  flex-col justify-center items-center mt-[120px] grid text-[22px]'>
          <a className='text-[#222222] font-[500]' href='#about'>{t('header.link1')}</a>
          <a className='text-[#222222] font-[500]' href='#sale'>{t('header.link2')}</a>
          <a className='text-[#222222] font-[500]' href='#clients'>{t('header.link3')}</a>
          <a className='text-[#222222] font-[500]' href='#contacts'>{t('header.link4')}</a>
        </div>
      </div>
    </>
  )
}
