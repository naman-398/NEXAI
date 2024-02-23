import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Nexaislider = () => {
  var settings = {
    dots: false,
    infinite: true,
    pauseOnHover: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speedAutoplay: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settings2 = {
    dots: false,
    pauseOnHover: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    speedAutoplay: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settings3 = {
    dots: false,
    pauseOnHover: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speedAutoplay: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id='about' className=' pt-[45px] 576:pt-[60px] md:pt-[120px] 992:pt-[200px] relative z-[2]'>
      <h3 className=' Recharge font-bold text-[25px] 576:text-[30px] md:text-[35px] 992:text-[40px] leading-[normal] 576:leading-[50.4px] text-[#02CDCF] text-center px-3 ' data-aos="zoom-in-up">NexAi does all this. And more.</h3>
      <p className=' mb-[25px] 576:mb-[40px] md:mb-[55px] 992:mb-[90px] font-poppins text-[14px] 576:text-base leading-[normal] 576:leading-[20px] 992:leading-[25.6px] mt-[6px] 992:mt-[16px] max-w-[912px] !opacity-70 mx-auto text-[#FFF] text-center px-3' data-aos="zoom-in-up">Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>

      <Slider {...settings} className=' threeslider'>
        <div className=' 450:px-3 ' data-aos="zoom-in-up"><div className=' hover:shadow-[0px_4px_5px_0px_#02CDCF80] duration-300  mb-[15px] 576:mb-[40px] mx-auto 450:mx-0 min-h-[180px] 576:min-h-[220px] max-w-[300px] 576:max-w-[340px] h-full !flex justify-center items-center rounded-[16px] p-[0px_25px] 576:p-[0px_43px] shadow-[0px_4px_20px_0px_#02CDCF29]'>
          <p className=' Recharge  font-bold text-[24px] leading-[38.4px] text-center text-[#FFF]'>NexAi, measure this table</p>
        </div></div>
        <div className=' 450:px-3 ' data-aos="zoom-in-up">
          <div className=' hover:shadow-[0px_4px_5px_0px_#02CDCF80] duration-300  mb-[15px] 576:mb-[40px] mx-auto 450:mx-0 min-h-[180px] 576:min-h-[220px] max-w-[300px] 576:max-w-[340px] h-full !flex justify-center items-center rounded-[16px] p-[0px_25px] 576:p-[0px_43px] shadow-[0px_4px_20px_0px_#02CDCF29]'>
            <p className=' Recharge font-bold text-[24px] leading-[38.4px] text-center text-[#FFF]'>NexAi, Turn on music</p>
          </div></div>
        <div className=' 450:px-3 ' data-aos="zoom-in-up">
          <div className=' hover:shadow-[0px_4px_5px_0px_#02CDCF80] duration-300 mb-[15px] 576:mb-[40px] mx-auto 450:mx-0 min-h-[180px] 576:min-h-[220px] max-w-[300px] 576:max-w-[340px] h-full !flex justify-center items-center rounded-[16px] p-[0px_25px] 576:p-[0px_43px] shadow-[0px_4px_20px_0px_#02CDCF29]'>
            <p className=' Recharge font-bold text-[24px] leading-[38.4px] text-center text-[#FFF]'>NexAi, Turn on light</p>
          </div></div>
        <div className=' 450:px-3 ' data-aos="zoom-in-up">
          <div className=' hover:shadow-[0px_4px_5px_0px_#02CDCF80] duration-300 mb-[15px] 576:mb-[40px] mx-auto 450:mx-0 min-h-[180px] 576:min-h-[220px] max-w-[300px] 576:max-w-[340px] h-full !flex justify-center items-center rounded-[16px] p-[0px_25px] 576:p-[0px_43px] shadow-[0px_4px_20px_0px_#02CDCF29]'>
            <p className=' Recharge font-bold text-[24px] leading-[38.4px] text-center text-[#FFF]'>NexAi, is the front door locked?</p>
          </div></div>
        <div className=' 450:px-3 ' data-aos="zoom-in-up">
          <div className=' hover:shadow-[0px_4px_5px_0px_#02CDCF80] duration-300 mb-[15px] 576:mb-[40px] mx-auto 450:mx-0 min-h-[180px] 576:min-h-[220px] max-w-[300px] 576:max-w-[340px] h-full !flex justify-center items-center rounded-[16px] p-[0px_25px] 576:p-[0px_43px] shadow-[0px_4px_20px_0px_#02CDCF29]'>
            <p className=' Recharge font-bold text-[24px] leading-[38.4px] text-center text-[#FFF]'>NexAi, Turn on light</p>
          </div></div>
      </Slider>
      <Slider {...settings2} className=' threeslider relative z-[1]'>
        <div className=' 450:px-3 ' data-aos="zoom-in-up"><div className=' hover:shadow-[0px_4px_5px_0px_#02CDCF80] duration-300 mb-[15px] 576:mb-[40px] mx-auto 450:mx-0 min-h-[180px] 576:min-h-[220px] max-w-[300px] 576:max-w-[340px] h-full !flex justify-center items-center rounded-[16px] p-[0px_25px] 576:p-[0px_43px] shadow-[0px_4px_20px_0px_#02CDCF29]'>
          <p className=' Recharge  font-bold text-[24px] leading-[38.4px] text-center text-[#FFF]'>NexAi, Turn on light</p>
        </div></div>
        <div className=' 450:px-3 ' data-aos="zoom-in-up">
          <div className='  hover:shadow-[0px_4px_5px_0px_#02CDCF80] duration-300 mb-[15px] 576:mb-[40px] mx-auto 450:mx-0 min-h-[180px] 576:min-h-[220px] max-w-[300px] 576:max-w-[340px] h-full !flex justify-center items-center rounded-[16px] p-[0px_25px] 576:p-[0px_43px] shadow-[0px_4px_20px_0px_#02CDCF29]'>
            <p className=' Recharge font-bold text-[24px] leading-[38.4px] text-center text-[#FFF]'>NexAi, set
              alarm of 5:00 am</p>
          </div></div>
        <div className=' 450:px-3 ' data-aos="zoom-in-up">
          <div className='  hover:shadow-[0px_4px_5px_0px_#02CDCF80] duration-300 mb-[15px] 576:mb-[40px] mx-auto 450:mx-0 min-h-[180px] 576:min-h-[220px] max-w-[300px] 576:max-w-[340px] h-full !flex justify-center items-center rounded-[16px] p-[0px_25px] 576:p-[0px_43px] shadow-[0px_4px_20px_0px_#02CDCF29]'>
            <p className=' Recharge font-bold text-[24px] leading-[38.4px] text-center text-[#FFF]'>NexAi, measure this table</p>
          </div></div>
        <div className=' 450:px-3 ' data-aos="zoom-in-up">
          <div className='  hover:shadow-[0px_4px_5px_0px_#02CDCF80] duration-300 mb-[15px] 576:mb-[40px] mx-auto 450:mx-0 min-h-[180px] 576:min-h-[220px] max-w-[300px] 576:max-w-[340px] h-full !flex justify-center items-center rounded-[16px] p-[0px_25px] 576:p-[0px_43px] shadow-[0px_4px_20px_0px_#02CDCF29]'>
            <p className=' Recharge font-bold text-[24px] leading-[38.4px] text-center text-[#FFF]'>NexAi, Turn on music</p>
          </div></div>
        <div className=' 450:px-3 ' data-aos="zoom-in-up">
          <div className='  hover:shadow-[0px_4px_5px_0px_#02CDCF80] duration-300 mb-[15px] 576:mb-[40px] mx-auto 450:mx-0 min-h-[180px] 576:min-h-[220px] max-w-[300px] 576:max-w-[340px] h-full !flex justify-center items-center rounded-[16px] p-[0px_25px] 576:p-[0px_43px] shadow-[0px_4px_20px_0px_#02CDCF29]'>
            <p className=' Recharge font-bold text-[24px] leading-[38.4px] text-center text-[#FFF]'>NexAi, Turn on light</p>
          </div></div>
      </Slider>
      <Slider {...settings3} className=' threeslider' >
        <div className=' 450:px-3 ' data-aos="zoom-in-up"><div className=' hover:shadow-[0px_4px_5px_0px_#02CDCF80] duration-300 mb-[15px] mx-auto 450:mx-0 min-h-[180px] 576:min-h-[220px] max-w-[300px] 576:max-w-[340px] h-full !flex justify-center items-center rounded-[16px] p-[0px_25px] 576:p-[0px_43px] shadow-[0px_4px_20px_0px_#02CDCF29]'>
          <p className=' Recharge  font-bold text-[24px] leading-[38.4px] text-center text-[#FFF]'>NexAi, Turn on TV</p>
        </div></div>
        <div className=' 450:px-3 ' data-aos="zoom-in-up">
          <div className='  hover:shadow-[0px_4px_5px_0px_#02CDCF80] duration-300 mb-[15px]  mx-auto 450:mx-0 min-h-[180px] 576:min-h-[220px] max-w-[300px] 576:max-w-[340px] h-full !flex justify-center items-center rounded-[16px] p-[0px_25px] 576:p-[0px_43px] shadow-[0px_4px_20px_0px_#02CDCF29]'>
            <p className=' Recharge font-bold text-[24px] leading-[38.4px] text-center text-[#FFF]'>NexAi, Turn on music</p>
          </div></div>
        <div className=' 450:px-3 ' data-aos="zoom-in-up">
          <div className=' hover:shadow-[0px_4px_5px_0px_#02CDCF80] duration-300 mb-[15px] mx-auto 450:mx-0 min-h-[180px] 576:min-h-[220px] max-w-[300px] 576:max-w-[340px] h-full !flex justify-center items-center rounded-[16px] p-[0px_25px] 576:p-[0px_43px] shadow-[0px_4px_20px_0px_#02CDCF29]'>
            <p className=' Recharge font-bold text-[24px] leading-[38.4px] text-center text-[#FFF]'>NexAi, Turn of AC.</p>
          </div></div>
        <div className=' 450:px-3 ' data-aos="zoom-in-up">
          <div className=' hover:shadow-[0px_4px_5px_0px_#02CDCF80] duration-300 mb-[15px]  mx-auto 450:mx-0 min-h-[180px] 576:min-h-[220px] max-w-[300px] 576:max-w-[340px] h-full !flex justify-center items-center rounded-[16px] p-[0px_25px] 576:p-[0px_43px] shadow-[0px_4px_20px_0px_#02CDCF29]'>
            <p className=' Recharge font-bold text-[24px] leading-[38.4px] text-center text-[#FFF]'>NexAi, Lock the front door</p>
          </div></div>
        <div className=' 450:px-3 ' data-aos="zoom-in-up">
          <div className=' hover:shadow-[0px_4px_5px_0px_#02CDCF80] duration-300 mb-[15px]  mx-auto 450:mx-0 min-h-[180px] 576:min-h-[220px] max-w-[300px] 576:max-w-[340px] h-full !flex justify-center items-center rounded-[16px] p-[0px_25px] 576:p-[0px_43px] shadow-[0px_4px_20px_0px_#02CDCF29]'>
            <p className=' Recharge font-bold text-[24px] leading-[38.4px] text-center text-[#FFF]'>NexAi, Turn on light</p>
          </div></div>
      </Slider>
    </div>
  )
}

export default Nexaislider