import React from 'react'
import { Facebook, Telegram, Twitter } from '../commonsvg/Icon'

const Footersection = () => {
  return (
    <div className=' bg-[url(../src/Assets/Images/footerbg.webp)] bg-cover bg-center bg-no-repeat relative z-[1]'>
      <div className=' max-w-[1164px] px-3 mx-auto'>
        <div className=' flex flex-wrap flex-row -mx-3 justify-between  sm:mt-[145px] items-center'>
          <div className=' w-full sm:w-1/2 md:w-1/3 px-3 '>
            <p className=' Neuropolitical font-normal text-[32px] text-[#FFF] cursor-pointer' data-aos="zoom-in-up">NEX<span className=' text-[#02CDCF] '>AI</span></p>
            <p className='Recharge font-bold text-[14px] 576:text-[16px] leading-[normal] 576:leading-[25.6px] max-w-[356px] text-[#FFFFFF]' data-aos="zoom-in-up"><span className=' opacity-70'>Nullam viverra natoque amet et sed scelerisque viverra fringilla platea. Ullamcorper.</span></p>
            <div className=' flex items-center gap-[12px] mt-[5px] 576:mt-[20px]'>
              <a href="https://www.facebook.com/" className=' hover:animate-bounce duration-300' data-aos="zoom-in-up"><Facebook /></a>
              <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" data-aos="zoom-in-up" className=' hover:animate-bounce duration-300 w-[25px] p-[5px] 576:p-0 576:w-[38px] h-[25px] 576:h-[38px] rounded-full border-[1.5px] 576:border-[2.5px] border-solid border-[#02CDCF] flex items-center justify-center'><Twitter /></a>
              <a href="https://web.telegram.org/k/"  data-aos="zoom-in-up" className=' hover:animate-bounce duration-300'><Telegram /></a>
            </div>
          </div>
          <div className=' w-full sm:w-1/2 md:w-5/12 px-3 pt-[10px] 450:pt-[20px] sm:pt-0'>
            <div className=' flex-wrap flex flex-row -mx-3'>
              <div className=' w-1/2 px-3  flex flex-col sm:items-center'>
                <ul className=' flex flex-col gap-[5px] 576:gap-[15px] md:gap-[20px]'>
                  <li data-aos="zoom-in-up"><a href="" className=' Recharge text-[#FFF] text-[14px] 576:text-[18px] font-bold leading-[21.6px]' data-aos="zoom-in-up">Quick links</a></li>
                  <li data-aos="zoom-in-up"><a href="" className=' Recharge text-[#FFF] text-[14px] 576:text-[18px] font-bold leading-[21.6px] !opacity-70  after:absolute relative after:w-0 after:left-[50%] after:bottom-[-1px] hover:text-[#02CDCF] duration-300 after:bg-[#02CDCF] hover:after:w-full hover:after:left-0 after:duration-300 after:h-[2px] after:rounded-[20px]'>Home</a></li>
                  <li data-aos="zoom-in-up"><a href="" className=' Recharge text-[#FFF] text-[14px] 576:text-[18px] font-bold leading-[21.6px] opacity-70  after:absolute relative after:w-0 after:left-[50%] after:bottom-[-1px] hover:text-[#02CDCF] duration-300 after:bg-[#02CDCF] hover:after:w-full hover:after:left-0 after:duration-300 after:h-[2px] after:rounded-[20px]'>Features</a></li>
                  <li data-aos="zoom-in-up"><a href="" className=' Recharge text-[#FFF] text-[14px] 576:text-[18px] font-bold leading-[21.6px] opacity-70  after:absolute relative after:w-0 after:left-[50%] after:bottom-[-1px] hover:text-[#02CDCF] duration-300 after:bg-[#02CDCF] hover:after:w-full hover:after:left-0 after:duration-300 after:h-[2px] after:rounded-[20px]'>Marketplace</a></li>
                  <li data-aos="zoom-in-up"><a href="" className=' Recharge text-[#FFF] text-[14px] 576:text-[18px] font-bold leading-[21.6px] opacity-70  after:absolute relative after:w-0 after:left-[50%] after:bottom-[-1px] hover:text-[#02CDCF] duration-300 after:bg-[#02CDCF] hover:after:w-full hover:after:left-0 after:duration-300 after:h-[2px] after:rounded-[20px]'>Tokens</a></li>
                  <li data-aos="zoom-in-up"><a href="" className=' Recharge text-[#FFF] text-[14px] 576:text-[18px] font-bold leading-[21.6px] opacity-70  after:absolute relative after:w-0 after:left-[50%] after:bottom-[-1px] hover:text-[#02CDCF] duration-300 after:bg-[#02CDCF] hover:after:w-full hover:after:left-0 after:duration-300 after:h-[2px] after:rounded-[20px]'>NexChat</a></li>
                  <li data-aos="zoom-in-up"><a href="" className=' Recharge text-[#FFF] text-[14px] 576:text-[18px] font-bold leading-[21.6px] opacity-70  after:absolute relative after:w-0 after:left-[50%] after:bottom-[-1px] hover:text-[#02CDCF] duration-300 after:bg-[#02CDCF] hover:after:w-full hover:after:left-0 after:duration-300 after:h-[2px] after:rounded-[20px]'>About</a></li>
                </ul>
              </div>
              <div className=' w-1/2 px-3 flex flex-col sm:items-end'>
                <ul className=' flex flex-col gap-[5px]  576:gap-[15px] md:gap-[20px]'>
                  <li data-aos="zoom-in-up"><a href="" className=' Recharge text-[#FFF] text-[14px] 576:text-[18px] font-bold leading-[21.6px]' data-aos="zoom-in-up">Information's</a></li>
                  <li data-aos="zoom-in-up"><a href="" className=' Recharge text-[#FFF] text-[14px] 576:text-[18px] font-bold leading-[21.6px] opacity-70  after:absolute relative after:w-0 after:left-[50%] after:bottom-[-1px] hover:text-[#02CDCF] duration-300 after:bg-[#02CDCF] hover:after:w-full hover:after:left-0 after:duration-300 after:h-[2px] after:rounded-[20px]'>Contact</a></li>
                  <li data-aos="zoom-in-up"><a href="" className=' Recharge text-[#FFF] text-[14px] 576:text-[18px] font-bold leading-[21.6px] opacity-70  after:absolute relative after:w-0 after:left-[50%] after:bottom-[-1px] hover:text-[#02CDCF] duration-300 after:bg-[#02CDCF] hover:after:w-full hover:after:left-0 after:duration-300 after:h-[2px] after:rounded-[20px]'>Phone</a></li>
                  <li data-aos="zoom-in-up"><a href="" className=' Recharge text-[#FFF] text-[14px] 576:text-[18px] font-bold leading-[21.6px] opacity-70  after:absolute relative after:w-0 after:left-[50%] after:bottom-[-1px] hover:text-[#02CDCF] duration-300 after:bg-[#02CDCF] hover:after:w-full hover:after:left-0 after:duration-300 after:h-[2px] after:rounded-[20px]'>terms</a></li>
                  <li data-aos="zoom-in-up"><a href="" className=' Recharge text-[#FFF] text-[14px] 576:text-[18px] font-bold leading-[21.6px] opacity-70  after:absolute relative after:w-0 after:left-[50%] after:bottom-[-1px] hover:text-[#02CDCF] duration-300 after:bg-[#02CDCF] hover:after:w-full hover:after:left-0 after:duration-300 after:h-[2px] after:rounded-[20px]'>Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className=' h-[2px] opacity-40 rounded-[16px] bg-[#FCFCFC] w-full mt-[15px] 576:mt-[30px]' />
        <p className=' text-center opacity-70 Recharge font-bold text-[13px] 576:text-[16px] leading-[19.6px] text-[#FFF] py-[10px] 576:py-[20px]'>@Copyright.nexai</p>
      </div>
    </div>
  )
}

export default Footersection