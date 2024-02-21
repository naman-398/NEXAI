import React from 'react'
import s2img from "../Assets/Images/s2img.webp";
import Commonbtn from '../Commonbtn/Commonbtn';
import s2elispe2 from "../Assets/Images/s2elispe2.webp";
import s2elispe1 from "../Assets/Images/s2elipse1.webp";
const Aipowereded = () => {
    return (

        <div className=' 576:pt-[60px] md:pt-[80px] 992:pt-[140px] relative 576:pb-[60px] md:pb-[120px] 992:pb-[192px] bg-[#050505]' id='feature'>
            <img src={s2elispe2} alt="s2" className=' absolute right-0 top-[0] md:top-[-70%] 992:top-[-25%] z-0 elipse animate-pulse' />
            <div className=' max-w-[1246px] mx-auto px-3 relative z-[1]'>
                <div className=' flex flex-wrap flex-row -mx-3 items-center'>
                    <div className=' w-full md:w-1/2 px-3 relative z-[1]' data-aos="zoom-in-up">
<div className=' relative'>
                        <img src={s2img} alt="s2img" className=' max-w-[612px] w-full relative z-[0] me-auto' />
                        <div className='  absolute left-[17%] sm:left-[31%] z-[-1] top-[24%] max-w-[231px] w-full max-h-[231px] h-full blur-[150px] rounded-[231px] bg-[#02CDCF]'></div></div>
                    </div>
                    <div className=' w-full md:w-1/2 px-3 pt-[20px] md:pt-0'>
                        <div className=' max-w-[517px] mx-auto'>
                            <h2 className=' md:max-w-[517px] Recharge font-bold text-[#02CDCF] text-[30px] 992:text-[40px] leading-[35.4px] 992:leading-[50.4px] text-center md:text-start' data-aos="zoom-in-up">Ai-Powered Home Assistant</h2>
                            <p className=' 992:max-w-[517px] mt-[5px] 992:mt-[16px] text-[#FFF] !!opacity-70 font-poppins font-normal text-[14px] 992:text-[16px] leading-[21.5px] 992:leading-[25.6px] text-center md:text-start' data-aos="zoom-in-up">Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
                            <p className=' 992:max-w-[517px] mt-[2px] 992:mt-[6px] text-[#FFF] !!opacity-70 font-poppins font-normal text-[14px] 992:text-[16px] leading-[21.5px] 992:leading-[25.6px] text-center md:text-start' data-aos="zoom-in-up">Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
                            <p className=' 992:max-w-[517px] mt-[2px] 992:mt-[6px] text-[#FFF] !!opacity-70 font-poppins font-normal text-[14px] 992:text-[16px] leading-[21.5px] 992:leading-[25.6px] text-center md:text-start' data-aos="zoom-in-up">assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
                            <div className=' pt-[10px] 992:pt-[40px] text-center md:text-start' data-aos="zoom-in-up"><Commonbtn text='Learn More' /></div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aipowereded