import React from 'react'

const Commonbtn = (props) => {
  return (
    <div>
        <button className=' p-[8px_15px] 576:p-[18px_32px] rounded-[12px] Recharge font-bold leading-[21.6px] border-[2px] border-solid border-transparent text-[14px] 576:text-[18px] text-[#0B0A0A] bg-[#02CDCF] z-[1] relative before:absolute before:bg-[#0B0A0A] hover:text-[#02CDCF] before:top-[100%] before:left-[100%] before:duration-300 hover:before:top-[-30px] duration-300 hover:before:left-[-30px]  hover:border-[#02CDCF] overflow-hidden before:w-[366px] before:h-[218px] before:rounded-full before:z-[-1]'> {props.text}</button>
    </div>
  )
}

export default Commonbtn