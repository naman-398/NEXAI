import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Nexaislider from './Nexaislider';
import elipse1 from "../Assets/Images/slider1.webp";
import elipse2 from "../Assets/Images/slider2.webp";
import elipse3 from "../Assets/Images/slider3.webp";
import elipse4 from "../Assets/Images/slider4.webp";
import elipse5 from "../Assets/Images/slider5.webp";
const Blockchainslider = () => {
    var settings = {
        dots: false,
        infinite: true,
        pauseOnHover: true, 
        speed: 3000,
        slidesToShow: 3.3,
        slidesToScroll: 1,
        autoplay: true,
        speedAutoplay: 0,
        responsive: [
            {
              breakpoint: 1250,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2.7,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 2.2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1.7,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1.3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1.7,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 470,
              settings: {
                slidesToShow: 1.4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
    };
    return (
        <div id='market' className=' md:pt-[100px] 576:pt-[60px] pt-[45px] 992:pt-[160px] max-w-[11640px] mx-auto px-3 overflow-hidden relative z-[2]'>
           <img src={elipse1} alt="elipse" className=' absolute right-0 top-[-12%] z-0 hidden sm:block animate-pulse' />
           <img src={elipse2} alt="elipse" className=' absolute left-0 top-[-7%] z-0 hidden sm:block animate-pulse' />
           <img src={elipse3} alt="elipse" className=' absolute right-0 top-[30%] z-0 animate-pulse' />
           <img src={elipse4} alt="elipse" className=' absolute right-0 top-[2%] z-[1] animate-pulse' />
           <img src={elipse5} alt="elipse" className=' absolute left-0 top-[48%] z-[1] animate-pulse' />
            <h3 className=' Recharge font-bold text-[32px] md:text-[35px] 992:text-[40px] leading-[normal] 576:leading-[50.4px] text-[#02CDCF] text-center ' data-aos="zoom-in-up">Blockchain & AI technology</h3>
            <p className=' font-poppins text-[14px] 576:text-base leading-[normal] 576:leading-[20px] 992:leading-[25.6px] mt-[6px] 992:mt-[16px] max-w-[997px] opacity-70 mx-auto text-[#FFF] text-center' data-aos="zoom-in-up">Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
            <h4 className=' Recharge font-bold text-[20px] 992:text-[20px] max-w-[684px] leading-[normal] 576:leading-[32px] text-[#FFF] mt-[20px] 576:mt-[30px] md:mt-[50px] 992:mt-[96px] text-center  mx-auto' data-aos="zoom-in-up">By building the software on blockchain, Nexai provides the following advantages</h4>
            <div className=' max-w-[1100px] 1250:max-w-[1200px] 1350:max-w-[1300px] ms-auto px-3 1250:px-0'>

<Slider {...settings} className='mt-[25px] 576:mt-[60px] overflow-hidden  relative z-[1] blockchain'>
<div className=' 470:px-[30px] px-1' data-aos="zoom-in-up"><div className=' hover:scale-[.95] duration-300 mx-auto 470:mx-0 bg-[url(../src/Assets/Images/hexagonslider.webp)] 576:w-[340px] w-[250px] h-[240px] 576:h-[340px] bg-no-repeat bg-100% bg-center pt-[50px] !flex flex-col items-center  '>
    <div className=' 576:w-[58px] w-[45px] h-[45px] 576:h-[58px] rounded-full slider-circle t-[62px] flex items-center justify-center'>
<p className=' Recharge font-bold text-[25px] 576:text-[32px] leading-[51.2px] text-[#FFF]'>1</p>
    </div>
    <p className='Recharge font-bold text-[17px] 576:text-[20px] leading-[normal] 576:leading-[32px] text-[#FFF] max-w-[212px] text-center mt-[15px] 576:mt-[30px]'>Security and Privacy</p>
</div></div>
<div className=' 470:px-[30px] px-1 576:mt-[111px]' data-aos="zoom-in-up"><div className='hover:scale-[.95] duration-300 mx-auto 470:mx-0 bg-[url(../src/Assets/Images/hexagonslider.webp)] 576:w-[340px] w-[250px] h-[240px] 576:h-[340px] bg-no-repeat bg-100% bg-center pt-[50px] !flex flex-col items-center  '>
    <div className=' 576:w-[58px] w-[45px] h-[45px] 576:h-[58px] rounded-full slider-circle t-[62px] flex items-center justify-center'>
<p className=' Recharge font-bold text-[25px] 576:text-[32px] leading-[51.2px] text-[#FFF]'>2</p>
    </div>
    <p className='Recharge font-bold text-[17px] 576:text-[20px] leading-[normal] 576:leading-[32px] text-[#FFF] max-w-[212px] text-center mt-[15px] 576:mt-[30px]'>Transparent and Reliable Data Management</p>
</div></div>
<div className=' 470:px-[30px] px-1' data-aos="zoom-in-up"><div className='hover:scale-[.95] duration-300 mx-auto 470:mx-0 bg-[url(../src/Assets/Images/hexagonslider.webp)] 576:w-[340px] w-[250px] h-[240px] 576:h-[340px] bg-no-repeat bg-100% bg-center pt-[50px] !flex flex-col items-center  '>
    <div className=' 576:w-[58px] w-[45px] h-[45px] 576:h-[58px] rounded-full slider-circle t-[62px] flex items-center justify-center'>
<p className=' Recharge font-bold text-[25px] 576:text-[32px] leading-[51.2px] text-[#FFF]'>3</p>
    </div>
    <p className='Recharge font-bold text-[17px] 576:text-[20px] leading-[normal] 576:leading-[32px] text-[#FFF] max-w-[212px] text-center mt-[15px] 576:mt-[30px]'>Self-learning and Personalization</p>
</div></div>
<div className=' 470:px-[30px] px-1 576:mt-[111px]' data-aos="zoom-in-up"><div className='hover:scale-[.95] duration-300 mx-auto 470:mx-0 bg-[url(../src/Assets/Images/hexagonslider.webp)] 576:w-[340px] w-[250px] h-[240px] 576:h-[340px] bg-no-repeat bg-100% bg-center pt-[50px] !flex flex-col items-center  '>
    <div className=' 576:w-[58px] w-[45px] h-[45px] 576:h-[58px] rounded-full slider-circle t-[62px] flex items-center justify-center'>
<p className=' Recharge font-bold text-[25px] 576:text-[32px] leading-[51.2px] text-[#FFF]'>4</p>
    </div>
    <p className='Recharge font-bold text-[17px] 576:text-[20px] leading-[normal] 576:leading-[32px] text-[#FFF] max-w-[212px] text-center mt-[15px] 576:mt-[30px]'>Automated and Transparent Transactions</p>
</div></div>
<div className=' 470:px-[30px] px-1' data-aos="zoom-in-up"><div className=' hover:scale-[.95] duration-300mx-auto 470:mx-0 bg-[url(../src/Assets/Images/hexagonslider.webp)] 576:w-[340px] w-[250px] h-[240px] 576:h-[340px] bg-no-repeat bg-100% bg-center pt-[50px] !flex flex-col items-center  '>
    <div className=' 576:w-[58px] w-[45px] h-[45px] 576:h-[58px] rounded-full slider-circle t-[62px] flex items-center justify-center'>
<p className=' Recharge font-bold text-[25px] 576:text-[32px] leading-[51.2px] text-[#FFF]'>5</p>
    </div>
    <p className='Recharge font-bold text-[17px] 576:text-[20px] leading-[normal] 576:leading-[32px] text-[#FFF] max-w-[212px] text-center mt-[15px] 576:mt-[30px]'>Self-learning and Personalization</p>
</div></div>
<div className=' 470:px-[30px] px-1 576:mt-[111px]' data-aos="zoom-in-up"><div className='hover:scale-[.95] duration-300 mx-auto 470:mx-0 bg-[url(../src/Assets/Images/hexagonslider.webp)] 576:w-[340px] w-[250px] h-[240px] 576:h-[340px] bg-no-repeat bg-100% bg-center pt-[50px] !flex flex-col items-center  '>
    <div className=' 576:w-[58px] w-[45px] h-[45px] 576:h-[58px] rounded-full slider-circle t-[62px] flex items-center justify-center'>
<p className=' Recharge font-bold text-[25px] 576:text-[32px] leading-[51.2px] text-[#FFF]'>6</p>
    </div>
    <p className='Recharge font-bold text-[17px] 576:text-[20px] leading-[normal] 576:leading-[32px] text-[#FFF] max-w-[212px] text-center mt-[15px] 576:mt-[30px]'>Security and Privacy</p>
</div></div>


            </Slider>
            </div>
            <Nexaislider/>
        </div>
    )
}

export default Blockchainslider