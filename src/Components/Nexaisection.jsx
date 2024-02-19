import React from 'react'
import nexaiimg1 from "../Assets/Images/nexaiimg1.png";
import Footersection from './Footersection';
import Readysection from './Readysection';
import elipse6 from "../Assets/Images/elipse1.webp";
import elipse7 from "../Assets/Images/elipse2.webp";
import elipse8 from "../Assets/Images/elipse3.webp";
import elipse9 from "../Assets/Images/slider3.webp";
import Whatsection from './Whatsection';
const Nexaisection = () => {
  return (
    <div className=' overflow-hidden'>
      <Whatsection/>
    <div className='relative' >
      <img src={elipse6} alt="elispe6" className=' absolute right-0 top-[3%] z-[1]animate-pulse ' />
      <img src={elipse6} alt="elispe6" className=' absolute right-0 bottom-[32%] z-[1] animate-pulse' />
      <img src={elipse7} alt="elispe6" className=' absolute left-0 top-[-12%] z-[0] animate-pulse' />
      <img src={elipse9} alt="elispe6" className=' absolute right-0 top-[-2%] z-[0] animate-pulse' />
      <img src={elipse8} alt="elispe6" className=' absolute left-0 top-[29%] z-[0] animate-pulse' />
      <img src={elipse9} alt="elispe6" className=' absolute right-0 bottom-[-10%] z-[0] animate-pulse' />
      <div id="token" className=' relative z-[2]'>
        <div className=" container mx-auto max-w-[1264px] px-3 pt-[60px] md:mt-[100px]">
          <p className="text-[30px] sm:text-[40px] leading-[normal] font-bold Recharge text-[#2dcdcf] text-center mb-4 md:mb-[47px]" data-aos="zoom-in-up">
            NexAI Token & utility{" "}
          </p>
          <div className="flex flex-row  items-center justify-center flex-wrap pt-[40px]  -mx-3 ">
            <div className=" md:w-1/2 w-full px-3 " data-aos="zoom-in-up">
              <img className=" max-w-[571px] w-full object-cover mt-[-30%] 576:mt-[-15%] md:mt-[-30%] mx-auto md:mx-0 md:ml-[-17%]" src={nexaiimg1} alt="" />
            </div>
            <div className=" md:w-1/2 w-full px-3 max-h-[400px] 576:max-h-[470px] scroll-hide  overflow-y-scroll">
              <div className="flex gap-[13px] 350:gap-[20px] md:gap-[20px] 910:gap-[55px] xl:gap-[65px]">
                <hr className="w-[1px] p-[4px] rounded-[10px] sm:ms-2 h-[1490px] 350:h-[1270px] 390:h-[1150px] 420:h-[1120px] 450:h-[1040px] 470:h-[950px] 520:h-[920px] 576:h-[900px] sm:h-[840px] 700:h-[730px] md:h-[1250px] 920:h-[1070px] lg:h-[1740px] 1150:h-[1670px] xl:h-[1380px] mt-5 bg-[#2dcdcf]" />
                <div>
                  <div className="relative">
                    <span className="rounded-full bg-white h-[25px] w-[25px] absolute top-[40%] left-[-11%] 420:left-[-9%] 470:left-[-8%] 520:left-[-7%] md:left-[-11.5%] 920:left-[-18.5%] 992:left-[-17.5%]  lg:left-[-16.5%] 1150:left-[-15%] xl:left-[-15.5%]"></span>

                    <p className="text-base 576:text-[18px] 992:text-[24px] font-bold Recharge leading-[31px] text-white mb-1 992:mb-2 lg:mb-4" data-aos="zoom-in-up">
                      Purchasing Nexai Products
                    </p>
                    <p className="text-[14px] 992:text-base font-normal font-poppins leading-[normal] 992:leading-[26px] text-white !opacity-[0.7] md:max-w-[536px] mb-[15px] 992:mb-6 lg:mb-[60px] " data-aos="zoom-in-up">
                      Nex AI tokens will be the primary currency for acquiring
                      Nexai's extensive range of software solutions, hardware
                      devices, including drones and sensors, and other smart home
                      products available on the Nexai marketplace. Users can
                      confidently make purchases using Nex tokens, enjoying the
                      convenience and flexibility of a token-based payment system.
                    </p>
                  </div>
                  <div className="relative">
                    <span className="rounded-full bg-white h-[25px] w-[25px] absolute top-[40%] left-[-11%] 420:left-[-9%] 470:left-[-8%] 520:left-[-7%] md:left-[-11.5%] 920:left-[-18.5%] 992:left-[-17.5%]  lg:left-[-16.5%] 1150:left-[-15%] xl:left-[-15.5%]"></span>

                    <p className="text-base 576:text-[18px] 992:text-[24px] font-bold Recharge leading-[31px] text-white mb-1 992:mb-2 lg:mb-4" data-aos="zoom-in-up">
                      Accessing Exclusive Content{" "}
                    </p>
                    <p className="text-[14px] 992:text-base font-normal font-poppins leading-[normal] 992:leading-[26px] text-white !opacity-[0.7] md:max-w-[536px] mb-[15px] 992:mb-6 lg:mb-[60px] " data-aos="zoom-in-up">
                      By holding Nex AI tokens, users will gain privileged access
                      to exclusive content within the Nexai platform. These tokens
                      will unlock premium features, advanced functionalities, and
                      specialized services, enabling users to fully explore and
                      enjoy the enhanced capabilities of Nexai's ecosystem.
                    </p>
                  </div>
                  <div className="relative">
                    <span className="rounded-full bg-white h-[25px] w-[25px] absolute top-[40%] left-[-11%] 420:left-[-9%] 470:left-[-8%] 520:left-[-7%] md:left-[-11.5%] 920:left-[-18.5%] 992:left-[-17.5%]  lg:left-[-16.5%] 1150:left-[-15%] xl:left-[-15.5%]"></span>

                    <p className="text-base 576:text-[18px] 992:text-[24px] font-bold Recharge leading-[31px] text-white mb-1 992:mb-2 lg:mb-4">
                      Loyalty and Rewards{" "}
                    </p>
                    <p className="text-[14px] 992:text-base font-normal font-poppins leading-[normal] 992:leading-[26px] text-white !opacity-[0.7] md:max-w-[536px] mb-[15px] 992:mb-6 lg:mb-[60px] ">
                      The Nexai ecosystem will feature a robust loyalty program,
                      rewarding users with Nex AI tokens for their active
                      engagement, ongoing participation, and dedicated usage of
                      Nexai's products and services. Token holders will have the
                      opportunity to redeem their accumulated rewards for
                      discounts, incentives, or exclusive offers, fostering a
                      strong sense of loyalty and encouraging continued
                      involvement.
                    </p>
                  </div>
                  <div className="relative">
                    <span className="rounded-full bg-white h-[25px] w-[25px] absolute top-[40%] left-[-11%] 420:left-[-9%] 470:left-[-8%] 520:left-[-7%] md:left-[-11.5%] 920:left-[-18.5%] 992:left-[-17.5%]  lg:left-[-16.5%] 1150:left-[-15%] xl:left-[-15.5%]"></span>

                    <p className="text-base 576:text-[18px] 992:text-[24px] font-bold Recharge leading-[31px] text-white mb-1 992:mb-2 lg:mb-4">
                      Participating in Governance{" "}
                    </p>
                    <p className="text-[14px] 992:text-base font-normal font-poppins leading-[normal] 992:leading-[26px] text-white !opacity-[0.7] md:max-w-[536px] mb-[15px] 992:mb-6 lg:mb-[60px] ">
                      Nex AI token holders will play a vital role in the
                      governance of the Nexai ecosystem. Through voting
                      mechanisms, token holders will have a direct say in the
                      decision-making process. They can express their opinions,
                      vote on proposed changes or improvements, and actively
                      contribute to shaping the future development and direction
                      of the Nexai ecosystem.
                    </p>
                  </div>
                  <div className="relative">
                    <span className="rounded-full bg-white h-[25px] w-[25px] absolute top-[40%] left-[-11%] 420:left-[-9%] 470:left-[-8%] 520:left-[-7%] md:left-[-11.5%] 920:left-[-18.5%] 992:left-[-17.5%]  lg:left-[-16.5%] 1150:left-[-15%] xl:left-[-15.5%]"></span>

                    <p className="text-base 576:text-[18px] 992:text-[24px] font-bold Recharge leading-[31px] text-white mb-1 992:mb-2 lg:mb-4">
                      Peer-to-Peer Transactions{" "}
                    </p>
                    <p className="text-[14px] 992:text-base font-normal font-poppins leading-[normal] 992:leading-[26px] text-white !opacity-[0.7] md:max-w-[536px] mb-[15px] 992:mb-6 lg:mb-[60px] ">
                      Nex AI tokens will enable seamless peer-to-peer transactions
                      within the Nexai community. Users will have the ability to
                      exchange tokens with others for various purposes, such as
                      purchasing pre-owned Nexai devices, engaging in token
                      trading activities, or conducting value exchanges directly
                      within the ecosystem, all with the utmost security and
                      convenience.
                    </p>
                  </div>
                  <div className="relative">
                    <span className="rounded-full bg-white h-[25px] w-[25px] absolute top-[40%] left-[-11%] 420:left-[-9%] 470:left-[-8%] 520:left-[-7%] md:left-[-11.5%] 920:left-[-18.5%]  992:left-[-17.5%] lg:left-[-16.5%] 1150:left-[-15%] xl:left-[-15.5%]"></span>

                    <p className="text-base 576:text-[18px] 992:text-[24px] font-bold Recharge leading-[31px] text-white mb-1 992:mb-2 lg:mb-4">
                      Token Staking and Rewards{" "}
                    </p>
                    <p className="text-[14px] 992:text-base font-normal font-poppins leading-[normal] 992:leading-[26px] text-white !opacity-[0.7] md:max-w-[536px] mb-[15px] 992:mb-6 lg:mb-[60px] ">
                      Nex AI tokens will support staking mechanisms, allowing
                      users to lock up their tokens for a specified period. By
                      staking their tokens, users will earn additional rewards,
                      such as interest, dividends, or other incentives, further
                      incentivizing token holding and fostering long-term
                      engagement and loyalty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Readysection />
      <Footersection />
    </div>
    </div>
  )
}

export default Nexaisection