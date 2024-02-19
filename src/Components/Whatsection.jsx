import React from 'react'
import Commonbtn from '../Commonbtn/Commonbtn'
import what from "../Assets/Images/what.webp";
const Whatsection = () => {
    return (
        <div id='what' className=' max-w-[1364px] px-3 mx-auto'>
            <div className=' bg-[url(../src/Assets/Images/whatbg.webp)] hover:shadow-[inset_0px_0px_20px_#02CDCF80] hover:border-[#02CDCF80] duration-300 max-w-[1340px] mx-auto border-solid rounded-[24px] border-[1px] border-[#FCFCFC]  bg-no-repeat bg-100% bg-center mt-[45px] 576:mt-[60px] md:mt-[100px] 992:mt-[160px] p-[20px_15px] 576:p-[40px_20px] 992:p-[163px_100px]'>
                <div className=' flex flex-wrap flex-col-reverse md:flex-row -mx-3 items-center'>
                    <div className=' w-full md:w-1/2 px-3'>
                        <h3 className=' Recharge font-bold text-[32px] md:text-[35px] 992:text-[40px] leading-[50.4px] text-[#02CDCF] text-center md:text-start' data-aos="zoom-in-up">What is NexAi?</h3>
                        <p className=' font-poppins text-[13px] 420:text-[14px] 992:text-base leading-[20px] 992:leading-[25.6px] mt-[6px] 992:mt-[16px] md:max-w-[564px] !opacity-70 text-[#FFF] text-center md:text-start ' data-aos="zoom-in-up">Beyond its convenience, Nexai revolutionizes the way you interact with your home environment. It enhances productivity, efficiency, and overall well-being. From managing your schedules to transforming the way you experience smart living, Nexai opens up a world of possibilities.</p>
                        <p className=' font-poppins text-[13px] 420:text-[14px] 992:text-base leading-[20px] 992:leading-[25.6px] mt-[4px] 992:mt-[8px] md:max-w-[564px] !opacity-70 text-[#FFF] text-center md:text-start' data-aos="zoom-in-up">Nexai's software can be installed on all your smart devices, including smartphones, computers, smart TVs, and kitchen appliances. It acts as a centralized control hub, allowing you to manage and interact with all your devices seamlessly. Whether it's adjusting the temperature, turning on appliances, or even accessing files on your home computer from anywhere, Nexai empowers you with effortless control.</p>
                        <div className=' pt-[10px] 992:pt-[40px] text-center md:text-start' data-aos="zoom-in-up"><Commonbtn text='Learn More' /></div>
                    </div>
                    <div className=' w-full md:w-1/2 px-3'>
                        <img src={what} alt="" className=' mx-auto mix-blend-color-dodge' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whatsection