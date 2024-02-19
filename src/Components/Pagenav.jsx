import React, { useState } from 'react'
import Commonbtn from '../Commonbtn/Commonbtn'

const Pagenav = () => {
  const [show, setShow] = useState(false)
  function mobile() {
    setShow(!show)
    if (show === false) {
      document.body.classList.add('overflow_hidden')
    }
    else {
      document.body.classList.remove('overflow_hidden')
    }
  }
  return (
    <div className=' max-w-[1195px] mx-auto px-3'>
    <div className=' flex items-center justify-end '>
      <div className=' w-[75%] 992:w-[65%] justify-end md:justify-between items-center flex py-[21px]'>
      <ul className={`${show === true ? "left-0" : "left-[-100%]"} flex items-center gap-[20px] mobile-view`}>
        <li><a href="#home" onClick={mobile} className=' font-poppins text-base leading-[24px] text-[#FFFFFF] font-normal after:absolute relative after:w-0 after:left-[50%] after:bottom-[-1px] hover:text-[#02CDCF] duration-300 after:bg-[#02CDCF] hover:after:w-full hover:after:left-0 after:duration-300 after:h-[2px] after:rounded-[20px]'>Home</a></li>
        <li><a href="#market" onClick={mobile} className=' font-poppins text-base leading-[24px] text-[#FFFFFF] font-normal  after:absolute relative after:w-0 after:left-[50%] after:bottom-[-1px] hover:text-[#02CDCF] duration-300 after:bg-[#02CDCF] hover:after:w-full hover:after:left-0 after:duration-300 after:h-[2px] after:rounded-[20px]'>Marketplace</a></li>
        <li><a href="#about" onClick={mobile} className=' font-poppins text-base leading-[24px] text-[#FFFFFF] font-normal after:absolute relative after:w-0 after:left-[50%] after:bottom-[-1px] hover:text-[#02CDCF] duration-300 after:bg-[#02CDCF] hover:after:w-full hover:after:left-0 after:duration-300 after:h-[2px] after:rounded-[20px]'>About</a></li>
        <li><a href="#what" onClick={mobile} className=' font-poppins text-base leading-[24px] text-[#FFFFFF] font-normal after:absolute relative after:w-0 after:left-[50%] after:bottom-[-1px] hover:text-[#02CDCF] duration-300 after:bg-[#02CDCF] hover:after:w-full hover:after:left-0 after:duration-300 after:h-[2px] after:rounded-[20px]'>NexChat</a></li>
        <li><a href="#token" onClick={mobile} className=' font-poppins text-base leading-[24px] text-[#FFFFFF] font-normal after:absolute relative after:w-0 after:left-[50%] after:bottom-[-1px] hover:text-[#02CDCF] duration-300 after:bg-[#02CDCF] hover:after:w-full hover:after:left-0 after:duration-300 after:h-[2px] after:rounded-[20px]'>Tokens</a></li>
      </ul>
      <div className=' flex items-center gap-[20px]'>
<Commonbtn text='Sign Up'/>
<button onClick={mobile} className={`${show === false ? "rotate-90" : "rotate-360"} block md:hidden relative z-[6] font-bold text-[27px] text-[#02CDCF] duration-300`}>{show === false ?  "|||" : "X"}</button>
</div>
      </div>
      </div>
    </div>
  )
}

export default Pagenav