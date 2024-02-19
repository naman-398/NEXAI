import React from 'react'
import Commonbtn from '../Commonbtn/Commonbtn'

const Readysection = () => {
  return (
    <div className=' max-w-[1164px] mx-auto px-3 pt-[50px] 576:pt-[80px] md:pt-[150px] 992:pt-[287px] 576:pb-[60px] pb-[45px] md:pb-[89px]'>
        <div className=' flex justify-between items-center flex-col sm:flex-row'>
            <p className=' Recharge font-bold md:text-[40px] text-[25px] 450:text-[30px] leading-[normal] 450:leading-[40px] md:leading-[52px] text-[#02CDCF] text-center sm:text-start' data-aos="zoom-in-up"> 
           <span className= ' text-[#FFF] block'> Ready to get started</span>
Talk to us Today 
            </p>
            <div className=' pt-[10px] sm:pt-0' data-aos="zoom-in-up"><Commonbtn text="Get Started"/></div>
        </div>

    </div>
  )
}

export default Readysection