import logo from './logo.svg';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Herosection from './Components/Herosection';
import Nexaisection from './Components/Nexaisection';
import Blockchainslider from './Components/Blockchainslider';
import { useEffect } from 'react';
import Backtotop from './Components/Backtotop';
import Loadersection from './Components/Loadersection';
function App() {
  useEffect(() => {
    AOS.init(
      {once: true,
      duration:2500,}
    );
  }, [])
  return (
    <div className=' bg-[#040606]'>
   <div className='  bg-[#040606] max-w-[1920px] mx-auto'>
    <Loadersection/>
    <Backtotop/>
    <Herosection/>
    <Blockchainslider/>
    <Nexaisection/>
   </div>
   </div>
  );
}

export default App;
