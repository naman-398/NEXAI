import React from 'react'
import Pagenav from './Pagenav'
import Commonbtn from '../Commonbtn/Commonbtn'
import Aipowereded from './Aipowereded'
import heroelipse from "../Assets/Images/heroelipse.webp";

const Herosection = () => {
    return (
        <div className=' pt-[10px] pb-[55px] overflow-hidden bg-[#040606]' >
            <div className=' bg-[url(../src/Assets/Images/herobg2.webp)] md:bg-[url(../src/Assets/Images/herobg.webp)] md:min-h-[810px] 1537:min-h-[100vh] bg-no-repeat bg-cover md:bg-100% bg-right md:bg-center mx-auto relative'>
                <img src={heroelipse} alt="" className=' absolute  right-0 top-0' />
                <Pagenav />
                <div id='home' className=' max-w-[1164px] mx-auto px-3 py-[180px] 576:py-[80px] md:pt-[104px] 1537flex items-center flex-col'>
                    <h1 className=' text-[35px] 450:text-[45px] 576:text-[56px] md:text-[60px] leading-[40px] 450:leading-[55px] 576:leading-[75.6px] text-[#FFF] max-w-[577px] Recharge font-normal'><span className=' font-bold Recharge text-[#02CDCF]'>Nexai</span> is an advanced AI-powered home assistant</h1>
                    <p className=' font-poppins font-normal leading-[normal] 576:leading-[25.6px] text-[14px] 576:text-base text-[#FFFFFF] !opacity-70 mt-[6px] 576:mt-[16px]'>Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
                    <div className=' pt-[20px] 576:pt-[51px] 1537:pt-[70px]'><Commonbtn text='Know More' /></div>
                </div>
            </div>
            <Aipowereded />
        </div>
    )
}

export default Herosection