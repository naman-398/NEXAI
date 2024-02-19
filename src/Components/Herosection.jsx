import React from 'react'
import Pagenav from './Pagenav'
import Commonbtn from '../Commonbtn/Commonbtn'
import Aipowereded from './Aipowereded'

const Herosection = () => {
    return (
        <div className=' pt-[10px] pb-[55px] overflow-hidden' id='home'>
            <div className=' bg-[url(../src/Assets/Images/herobg.webp)] 1200:min-h-[800px] 1440:min-h-[100vh] bg-no-repeat bg-cover md:bg-100% bg-right md:bg-center mx-auto'>
                <Pagenav />
                <div className=' max-w-[1164px] mx-auto px-3 1200:py-0 py-[200px]  1200:pt-[104px] 1440:pt-[170px]'>
                    <h1 className=' text-[35px] 450:text-[45px] 576:text-[56px] md:text-[60px] leading-[40px] 450:leading-[55px] 576:leading-[75.6px] text-[#FFF] max-w-[577px] Recharge font-normal'><span className=' font-bold Recharge text-[#02CDCF]'>Nexai</span> is an advanced AI-powered home assistant</h1>
                    <p className=' font-poppins font-normal leading-[normal] 576:leading-[25.6px] text-[14px] 576:text-base text-[#FFFFFF] !opacity-70 mt-[6px] 576:mt-[16px]'>Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
                    <div className=' pt-[20px] 576:pt-[51px]'><Commonbtn text='Know More' /></div>
                </div>
            </div>
            <Aipowereded />
        </div>
    )
}

export default Herosection